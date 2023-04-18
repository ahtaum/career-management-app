import React, { useState } from 'react'
import { Link } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import AdminLayout from '@/Layouts/AdminLayout'
import { convertDate, sanitizeHtml } from '@/Helpers/Tools'

export default function Jobs({ jobs }: any) {
    let [search, setSearch] = useState("")

    let [id, setId] = useState("")
    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")

    // Search Data
    let searchPosts = () => {
        let paramSearch = ["title"]

        return jobs.filter((post: any) => {
            return paramSearch.some((newData) => {
                return (
                    post[newData].toString().toLowerCase().indexOf(search.toLowerCase()) > -1
                )
            })
        })
    }

    return (
        <AdminLayout title="Jobs">

            {/* Details Modal */}
            <input type="checkbox" id="details-job" className="modal-toggle" />
            <div className="modal p-3">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center mb-8">{ title }</h3>

                    { sanitizeHtml(description) }

                    <div className="modal-action">
                        <label htmlFor="details-job" className="btn btn-error">Close</label>
                    </div>
                </div>
            </div>

            {/* Main */}
            <section id="jobs-page" className="container my-8 p-3">

                <h1 className="font-bold text-2xl mb-8">Jobs</h1>

                <div className="flex justify-between mr-2 my-8">
                    <Link href={route("addJob")} className="btn btn-primary">Add</Link>

                    <input type="text" placeholder="Type here" className="input input-bordered" onChange={(e) => setSearch(e.target.value)} value={search} />
                </div>

                { jobs.length === 0 && <p className="mt-10 text-center text-slate-500 italic">Data Empty...</p> }
                { jobs.length !== 0 &&
                    <div className="overflow-x-auto">
                        <table className="table table-compact w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Info</th>
                                    <th>Salary</th>
                                    <th>Level</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { jobs && searchPosts().map((job: any, index: number) => (
                                    <tr key={job.id}>
                                        <th>{ index + 1 }</th>
                                        <td>{ job.title }</td>
                                        <td>{ job.info }</td>
                                        <td>{ job.salary }</td>
                                        <td>{ job.level }</td>
                                        <td>{ convertDate(job.updated_at) }</td>
                                        <td className="flex gap-2">
                                            <label htmlFor="details-job" className="badge badge-info p-3 cursor-pointer" onClick={() => {
                                                setId(job.id)
                                                setTitle(job.title)
                                                setDescription(job.description)
                                            }}>Details</label>
                                            <Link href={route("editJob", job.id)} className="badge badge-success p-3 cursor-pointer">Edit</Link>
                                            <div className="badge badge-error p-3 cursor-pointer">Delete</div>
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
