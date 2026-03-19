import api from "@/lib/axios";
import { columns } from "@/components/groups/columns";
import { GroupsTable } from "@/components/groups/groups-table";
import type { GetGroupsResponse } from "@/types/group";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/courses/$courseId/groups")({
    component: CourseGroupsPage,
    loader: async ({ params }) => {
        return fetchCourseGroups(params.courseId);
    },
});

function fetchCourseGroups(courseId: string) {
    const res = api.get<GetGroupsResponse>(`/groups?courseId=${courseId}`);
    return res.then(res => res.data.groups);
}

function CourseGroupsPage() {
    const groups = Route.useLoaderData();

    return (
        <main className="flex-1 flex flex-col px-4 py-8 max-w-5xl mx-auto w-full">
            <h1 className="text-2xl font-bold mb-6">Groups</h1>
            <GroupsTable columns={columns} data={groups} />
        </main>
    );
}
