import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import AdminLayout from '@/Layouts/AdminLayout'
import { convertDate } from '@/Helpers/Tools'
import DownloadFiles from '@/Components/admin/DownloadFiles'
import { FiTrash, FiEdit } from 'react-icons/fi'

export default function Candidates({ candidates }: any) {
    let { flash }: any = usePage().props

    let [search, setSearch] = useState("")
    let [currentPage, setCurrentPage] = useState(1)
    let jobsPerPage = 10

    let [about, setAbout] = useState("")
    let [linkedin, setLinkedin] = useState("")
    let [status, setStatus] = useState("")
    let [id, setId] = useState("")

    let handleChange = async (e: any) => {
        e.preventDefault()

        try {
            Inertia.post(route("changeStatus", id), { status })
        } catch (error: any) {
            alert(error.message)
        }
    }

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
        <AdminLayout title="Candidates">

            {/* Notification for status change */}
            { flash.message && (
                <div className="alert alert-success shadow-lg my-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{ flash.message }</span>
                    </div>
                </div>
            ) }

            {/* Delete Modal */}
            <input type="checkbox" id="delete-candidate" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-center mb-10">Are You Sure to delete this Post?!</h3>

                    <div className="modal-action flex justify-between">
                        <label htmlFor="delete-candidate" className="btn btn-success">Close</label>

                        <label htmlFor="delete-candidate" className="btn btn-error" onClick={() => deleteItem(id)}>Delete</label>
                    </div>
                </div>
            </div>

            {/* Details Modal */}
            <input type="checkbox" id="details-candidate" className="modal-toggle" />
            <div className="modal p-3">
                <div className="modal-box">
                    { linkedin && <p className="mb-4">Linkedin : { linkedin }</p>}

                    <div>
                        <h3 className="text-lg font-bold mb-4 text-center">About</h3>
                        <p>{ about }</p>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="details-candidate" className="btn btn-error">Close</label>
                    </div>
                </div>
            </div>

            {/* Edit Status Job Modal */}
            <input type="checkbox" id="edit-status" className="modal-toggle" />
            <div className="modal p-3">
                <div className="modal-box">
                    <h1 className="mb-4 font-bold text-xl text-center">Change Status Candidate</h1>

                    <form onSubmit={handleChange}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>

                            <select className="select select-bordered" name="level" onChange={(e) => setStatus(e.target.value)} value={status}>
                                <option disabled value="">Select Level</option>
                                <option value="pending">Pending</option>
                                <option value="accepted" selected={status === "accepted"}>Accepted</option>
                                <option value="fail">Fail</option>
                            </select>
                        </div>

                        <div className="modal-action">
                            <label htmlFor="edit-status" className="btn btn-error">Close</label>

                            <label htmlFor="edit-status">
                                <button className="btn btn-primary" type="submit">Change</button>
                            </label>
                        </div>
                    </form>

                </div>
            </div>

            <section id="candidates-page" className="container my-8 p-3">

                <input type="text" placeholder="Search Candidates" className="input input-bordered my-5" onChange={(e) => setSearch(e.target.value)} value={search} />

                { candidates.length === 0 && <p className="mt-10 text-center text-slate-500 italic">Data Empty...</p> }
                { candidates.length !== 0 &&
                    <>

                    <div className="overflow-x-auto">
                        <table className="table table-compact w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Applied</th>
                                    <th>Cv</th>
                                    <th>Status</th>
                                    <th>Gender</th>
                                    <th>Address</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { candidates && currentJobs.map((candidate: any, index: number) => (
                                    <tr key={index}>
                                        <th>{ index + 1 }</th>
                                        <td>{ candidate.name }</td>
                                        <td>{ candidate.email }</td>
                                        <td>{ candidate.jobs.title }</td>
                                        <td>
                                            <DownloadFiles filename={ candidate.cv } />
                                        </td>
                                        <td>{ candidate.applications.status }</td>
                                        <td>{ candidate.gender }</td>
                                        <td>{ candidate.address }</td>
                                        <td>{ convertDate(candidate.updated_at) }</td>
                                        <td className="flex gap-2">
                                            { candidate.about &&
                                                <label htmlFor="details-candidate" className="badge badge-info p-3 cursor-pointer hover:text-white" onClick={ () => {
                                                    setAbout(candidate.about)
                                                    setLinkedin(candidate.linkedin)
                                                } }>Details</label>
                                            }
                                            <label htmlFor="edit-status" className="badge badge-success p-3 cursor-pointer hover:text-white" onClick={ () => {
                                                setStatus(candidate.applications.status)
                                                setId(candidate.applications.id)
                                            } }><FiEdit /></label>
                                            <label htmlFor="delete-candidate" className="badge badge-error p-3 cursor-pointer hover:text-white" onClick={() => setId(candidate.id)}><FiTrash /></label>
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
