import type { Course } from "@/types/course";

interface SearchResultsItemProps {
    course: Course;
}

export function SearchResultsItem({ course }: SearchResultsItemProps) {
    return (
        <div className="flex items-center justify-between px-3 py-2 hover:bg-accent cursor-pointer">
            <span className="text-xs font-mono font-medium">{course.fullCode}</span>
            <span className="text-xs text-muted-foreground text-end" dir="rtl">{course.title}</span>
        </div>
    );
}
