import React, { PropsWithChildren } from 'react'
import { Head } from '@inertiajs/inertia-react'

interface Props {
    title: string;
    renderHeader?(): JSX.Element;
}

export const MainLayout = ({ title, children }: PropsWithChildren<Props>) => {
    return (
        <>

        <Head title={title} />

        <main>
            {children}
        </main>

        </>
    )
}
