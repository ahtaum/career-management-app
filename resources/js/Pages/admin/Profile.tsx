import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import AdminLayout from '@/Layouts/AdminLayout'

export default function Profile() {
    let { userAuth }: any = usePage().props

    return (
        <AdminLayout title="Profile">

            <section id="profile-page" className="container my-8 p-3">

                <h1 className="font-bold text-2xl mb-4">Profile</h1>

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">{ userAuth.data.username }</h1>

                            <div className="avatar mx-auto">
                                <div className="w-24 rounded-full">
                                    <img src={ userAuth.data.avatar } />
                                </div>
                            </div>

                            <p className="py-6">{ userAuth.data.email }</p>
                            <button className="btn btn-primary">Edit</button>
                        </div>
                    </div>
                </div>

            </section>

        </AdminLayout>
    )
}
