import { Head } from "@inertiajs/inertia-react"
import React, { PropsWithChildren } from "react"
import Sidebar from "@/Components/admin/Sidebar"
import { AdminMenu } from "@/Components/admin/AdminMenu"

interface Props {
    title: string;
    renderHeader?(): JSX.Element;
}

export default function AdminLayout({ title, children }: PropsWithChildren<Props>) {
    return (
        <>
            <Head title={title} />

            <AdminMenu />

            <main className="flex gap-4 h-screen w-screen bg-base-100">
                <Sidebar />

                <div className="overflow-y-scroll w-full">
                    {children}
                </div>
            </main>
        </>
    );
}
