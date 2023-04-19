import React, { useState } from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import AdminLayout from '@/Layouts/AdminLayout'
import { convertDate } from '@/Helpers/Tools'
import DownloadFiles from '@/Components/admin/DownloadFiles'

export default function Candidates({ candidates }: any) {
    let [search, setSearch] = useState("")

    let [about, setAbout] = useState("")
    let [linkedin, setLinkedin] = useState("")

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

            {/* Details Modal */}
            <input type="checkbox" id="details-candidate" className="modal-toggle" />
            <div className="modal p-3">
                <div className="modal-box">
                    { linkedin && <p className="mb-4">Linkedin : { linkedin }</p>}

                    <div>
                        <h3 className="text-lg font-bold mb-2">About :</h3>
                        <p>{ about }</p>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="details-candidate" className="btn btn-error">Close</label>
                    </div>
                </div>
            </div>

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
                                { candidates && searchPosts().map((candidate: any, index: number) => (
                                    <tr key={index}>
                                        <th>{ index + 1 }</th>
                                        <td>{ candidate.name }</td>
                                        <td>
                                            <DownloadFiles filename={ candidate.cv } />
                                        </td>
                                        <td>{ candidate.gender }</td>
                                        <td>{ candidate.address }</td>
                                        <td>{ convertDate(candidate.updated_at) }</td>
                                        <td className="flex gap-2">
                                            { candidate.about &&
                                                <label htmlFor="details-candidate" className="badge badge-info p-3 cursor-pointer" onClick={ () => {
                                                    setAbout(candidate.about)
                                                    setLinkedin(candidate.linkedin)
                                                } }>Details</label>
                                            }
                                        </td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    </div>
                }

            </section>

        </AdminLayout>
    )
}
