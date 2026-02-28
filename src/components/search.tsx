import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

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

	const {
		data: results = [],
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["courses", searchQuery],
		queryFn: () => fetchCourses(searchQuery),
		enabled: !!searchQuery,
	});

	return (
		<div className="relative w-full max-w-3xl">
			<SearchInput setSearchQuery={setSearchQuery} />
			{isError ? (
				<div className="mt-1 border rounded-sm p-2">
					<p className="text-xs text-destructive text-center py-2">
						Something went wrong. Please try again.
					</p>
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
