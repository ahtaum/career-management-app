import React, { useState } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'

export default function Jobs() {
    let [search, setSearch] = useState("")

    return (
        <AdminLayout title="Jobs">

            <section id="jobs-page" className="container my-8 p-3">

                <h1 className="font-bold text-2xl mb-8">Jobs</h1>

                <div className="flex justify-between mr-2 my-5">
                    <button className="btn btn-primary">Add</button>

                    <input type="text" placeholder="Type here" className="input input-bordered" onChange={(e) => setSearch(e.target.value)} value={search} />
                </div>

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
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
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

            </section>

        </AdminLayout>
    )
}
