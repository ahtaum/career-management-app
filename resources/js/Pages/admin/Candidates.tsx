import React, { useState } from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import AdminLayout from '@/Layouts/AdminLayout'
import { convertDate, sanitizeHtml } from '@/Helpers/Tools'

export default function Candidates({ candidates }: any) {
    let { flash }: any = usePage().props
    let [search, setSearch] = useState("")

    let [id, setId] = useState("")

    // Search Data
    let searchPosts = () => {
        let paramSearch = ["name"]

        return candidates.filter((post: any) => {
            return paramSearch.some((newData) => {
                return (
                    post[newData].toString().toLowerCase().indexOf(search.toLowerCase()) > -1
                )
            })
        })
    }

    return (
        <AdminLayout title="Candidates">

            {/* Delete Item Alert */}
            { flash.message && (
                <div className="alert alert-success shadow-lg my-8">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{ flash.message }</span>
                    </div>
                </div>
            ) }

            <section id="candidates-page" className="container my-8 p-3">

                <h1 className="font-bold text-2xl mb-8">Candidates</h1>

                <input type="text" placeholder="Search Candidates" className="input input-bordered my-5" onChange={(e) => setSearch(e.target.value)} value={search} />

                { candidates.length === 0 && <p className="mt-10 text-center text-slate-500 italic">Data Empty...</p> }
                { candidates.length !== 0 &&
                    <div className="overflow-x-auto">
                        <table className="table table-compact w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Cv</th>
                                    <th>Gender</th>
                                    <th>Address</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>
                                        <div className="badge badge-primary p-3">Download</div>
                                    </td>
                                    <td>Littel, Schaden and Vandervort</td>
                                    <td>Canada</td>
                                    <td>12/16/2020</td>
                                    <td className="flex gap-2">
                                        <div className="badge badge-info p-3">Details</div>
                                        <div className="badge badge-success p-3 cursor-pointer">Edit</div>
                                        <div className="badge badge-error p-3 cursor-pointer">Delete</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }

            </section>

        </AdminLayout>
    )
}
