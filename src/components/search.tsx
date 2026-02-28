import { useEffect, useState } from "react";
import { SearchInput } from "@/components/search-input";
import { SearchResults } from "@/components/search-results";

import type { Course } from "@/types/course";

async function fetchCourses(query: string): Promise<Course[]> {
    const res = await fetch(
        `${import.meta.env.VITE_API_URL}/catalog/courses?q=${encodeURIComponent(query)}`,
    );
    if (!res.ok) throw new Error("Failed to fetch courses");
    const json = await res.json();
    return json.data as Course[];
}

export function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState<Course[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!searchQuery) {
            setResults([]);
            setError(null);
            return;
        }

        setIsLoading(true);
        setError(null);
        fetchCourses(searchQuery)
            .then((data) => setResults(data))
            .catch(() => setError("Something went wrong. Please try again."))
            .finally(() => setIsLoading(false));
    }, [searchQuery]);

    return (
        <div className="relative w-full max-w-3xl">
            <SearchInput setSearchQuery={setSearchQuery} />
            {error ? (
                <div className="mt-1 border rounded-sm p-2">
                    <p className="text-xs text-destructive text-center py-2">{error}</p>
                </div>
            ) : (
                <SearchResults
                    results={results}
                    isLoading={isLoading}
                    query={searchQuery}
                />
            )}
        </div>
    );
}
