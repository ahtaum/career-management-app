import React, { useState } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import { FiKey, FiEdit } from 'react-icons/fi'

export default function Companies({ companies }: any) {
    return (
        <AdminLayout title="companies">

            <section id="profile-page" className="container my-8 p-3">

                <h1 className="font-bold text-2xl mb-4">Company Profile</h1>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <div className="mb-8">
                            <h2 className="mb-4 font-bold text-2xl">{ companies.name }</h2>
                            <span>{ companies.address }</span>
                        </div>

                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={ companies.logo } />
                            </div>
                        </div>

                        <p className="mb-8">{ companies.description }</p>

                        <button className="btn btn-info">Edit</button>
                    </div>
                </div>

            </section>

        </AdminLayout>
    )
}
