import React, { PropsWithChildren, useEffect } from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { MainMenu } from '@/Components/MainMenu'
import route from 'ziggy-js'

interface Props {
    title: string;
    renderHeader?(): JSX.Element;
}

export const MainLayout = ({ title, children }: PropsWithChildren<Props>) => {
    let { users }: any = usePage().props

    useEffect(() => {
        if (users.data === 0) {
            window.location.href = route('register')
        }
    }, [users.data])

    return (
        <>

        <Head title={title} />

        <main>
            <MainMenu />

            {children}
        </main>

        </>
    )
}
