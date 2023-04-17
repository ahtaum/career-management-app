import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import AdminLayout from '@/Layouts/AdminLayout'

export default function Dashboard() {
    let { userAuth }: any = usePage().props

    return (
        <AdminLayout title="Dashboard">

            <section id="dashboard-admin-page" className="container my-8 p-3">

                <h1 className="font-bold text-2xl">Dashboard</h1>

                <div className="lg:flex md:flex justify-between gap-4 my-8">
                    <div className="card bg-base-100 w-full shadow-xl mb-4">
                        <div className="card-body mx-auto">
                            <h2 className="card-title mb-4">{ userAuth.data.username }</h2>

                            <div className="avatar mb-4 mx-auto">
                                <div className="w-24 rounded-full">
                                    <img src={userAuth.data.avatar} />
                                </div>
                            </div>

                            <p className="mb-4 text-lg">{ userAuth.data.email }</p>

                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl mb-4 lg:w-96 md:w-96">
                        <div className="card-body">
                            <h2 className="card-title mx-auto">Jobs</h2>
                            <h1 className="text-7xl font-bold lg:mt-8 text-center">0</h1>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl mb-4 lg:w-96 md:w-96">
                        <div className="card-body">
                            <h2 className="card-title mx-auto">Candidates</h2>
                            <h1 className="text-7xl font-bold lg:mt-8 text-center">0</h1>
                        </div>
                    </div>
                </div>

            </section>

        </AdminLayout>
    )
}
