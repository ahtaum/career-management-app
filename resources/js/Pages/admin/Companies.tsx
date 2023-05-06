import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import AdminLayout from '@/Layouts/AdminLayout'
import route from 'ziggy-js'

export default function Companies({ companies }: any) {
    return (
        <AdminLayout title="companies">

            <section id="profile-page" className="container my-8 p-3">

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <div className="mb-8">
                            <h2 className="mb-4 font-bold text-2xl">{ companies.name }</h2>
                            <span>{ companies.address }</span>
                        </div>

                        <div className="avatar mx-auto my-4">
                            <div className="w-24 rounded-full">
                                <img src={ companies.logo } />
                            </div>
                        </div>

                        <p className="mb-8">{ companies.description }</p>

                        <Link href={route("changeCompanyProfile", companies.id)} className="btn btn-info">Edit</Link>
                    </div>
                </div>

            </section>

        </AdminLayout>
    )
}
