import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/courses/$courseId")({
    component: CourseGroupsPage,
});

function CourseGroupsPage() {
    const { courseId } = Route.useParams();

    return (
        <main className="flex-1 flex flex-col px-4 py-8 max-w-5xl mx-auto w-full">
            <h1 className="text-2xl font-bold mb-6">Groups for {courseId}</h1>
            <p className="text-muted-foreground">Groups will be listed here.</p>
        </main>
    );
}
