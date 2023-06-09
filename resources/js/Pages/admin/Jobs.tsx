import React, { useState } from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import AdminLayout from '@/Layouts/AdminLayout'
import { convertDate, sanitizeHtml } from '@/Helpers/Tools'
import { Props } from '@/Interfaces/props'
import { FiTrash, FiEdit, FiPlus } from 'react-icons/fi'

export default function Jobs({ jobs }: Props) {
    let { flash }: any = usePage().props
    let [search, setSearch] = useState("")
    let [currentPage, setCurrentPage] = useState(1)
    let jobsPerPage = 10

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

    // Delete Data
    let deleteItem = (itemId: string) => {
        try {
            Inertia.delete(route("delete", itemId))
        } catch (error: any) {
            console.log(error.message)
        }
    }

    // Pagination
    let indexOfLastJob = currentPage * 10
    let indexOfFirstJob = indexOfLastJob - 10
    let currentJobs = searchPosts().slice(indexOfFirstJob, indexOfLastJob)

    let totalPages = Math.ceil(searchPosts().length / jobsPerPage)

    let handleNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    let handlePrevPage = () => {
        setCurrentPage(currentPage - 1)
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

            {/* Delete Modal */}
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-center mb-10">Are You Sure to delete this Post?!</h3>

                    <div className="modal-action flex justify-between">
                        <label htmlFor="delete-modal" className="btn btn-success">Close</label>

                        <label htmlFor="delete-modal" className="btn btn-error" onClick={() => deleteItem(id)}>Delete</label>
                    </div>
                </div>
            </div>

            {/* Delete Item Alert */}
            { flash.message && (
                <div className="alert alert-success shadow-lg my-8">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{ flash.message }</span>
                    </div>
                </div>
            ) }

            {/* Main */}
            <section id="jobs-page" className="container my-8 p-3">

                <div className="flex justify-between mr-2 my-8">
                    <Link href={route("addJob")} className="btn btn-primary gap-2">
                        <FiPlus className="text-2xl" />
                        <span className="lg:flex md:flex hidden">Add</span>
                    </Link>

                    <input type="text" placeholder="Type here" className="input input-bordered" onChange={(e) => setSearch(e.target.value)} value={search} />
                </div>

                { jobs.length === 0 && <p className="mt-10 text-center text-slate-500 italic">Data Empty...</p> }
                { jobs.length !== 0 &&
                    <>

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
                                { jobs && currentJobs.map((job: any, index: number) => (
                                    <tr key={job.id}>
                                        <th>{ index + 1 }</th>
                                        <td>{ job.title }</td>
                                        <td>{ job.info }</td>
                                        <td>{ job.salary }</td>
                                        <td>{ job.level }</td>
                                        <td>{ convertDate(job.updated_at) }</td>
                                        <td className="flex gap-2">
                                            <label htmlFor="details-job" className="badge badge-info p-3 cursor-pointer hover:text-white" onClick={() => {
                                                setTitle(job.title)
                                                setDescription(job.description)
                                            }}>Details</label>
                                            <Link href={route("editJob", job.id)} className="badge badge-success p-3 cursor-pointer hover:text-white"><FiEdit /></Link>
                                            <label htmlFor="delete-modal" className="badge badge-error p-3 cursor-pointer hover:text-white" onClick={ () => setId(job.id) }><FiTrash /></label>
                                        </td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    </div>

                    {/* pagination button */}
                    <div className="flex justify-center mt-8">
                        <button onClick={handlePrevPage} disabled={currentPage === 1} className="btn btn-primary mr-2">Previous</button>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn btn-primary">Next</button>
                    </div>

                    </>
                }

            </section>

        </AdminLayout>
    )
}
