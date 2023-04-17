import { Head } from "@inertiajs/inertia-react"
import React, { PropsWithChildren } from "react"

interface Props {
    title: string;
    renderHeader?(): JSX.Element;
}

export default function AdminLayout({ title, children }: PropsWithChildren<Props>) {
    return (
        <>
            <Head title={title} />

            {/* <AdminNavbar /> */}

            <main className="flex gap-4 h-screen w-screen bg-base-100">
                {/* <Sidebar /> */}

                <div className="overflow-y-scroll w-full">
                    {children}
                </div>
            </main>
        </>
    );
}
