import React, { useState } from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import AdminLayout from '@/Layouts/AdminLayout'
import TextEditor from '@/Components/tools/TextEditor'
import { Inertia } from '@inertiajs/inertia'

export default function AddJob() {
    let { errors, flash }: any = usePage().props

    let [title, setTitle] = useState("")
    let [salary, setSalary] = useState(0)
    let [description, setDescription] = useState("")
    let [info, setInfo] = useState("")
    let [level, setlevel] = useState("junior")

    let [loading, setLoading] = useState(false)

    let handleSubmit = (e: any) => {
        e.preventDefault()

        try {
            Inertia.post(route("store"), { title, salary, description, info, level }, {
                forceFormData: true,
                onProgress: () => {
                    setLoading(true)
                },
                onFinish: () => {
                    setLoading(false)
                },
                onSuccess: () => {
                    setTitle("")
                    setDescription("")
                    setSalary(0)
                    setInfo("")
                    setlevel("junior")
                    setLoading(false)
                }
            })
        } catch (error: any) {
            alert(error.message)
            setLoading(false)
        }
    }

    return (
        <AdminLayout title="Post Job">

            <section id="formAddJob-page" className="container my-8 p-3">

                <h1 className="font-bold text-2xl mb-8 lg:text-left md:text-left text-center">Post Job</h1>

                { flash.message && (
                    <div className="alert alert-success shadow-lg my-4">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{ flash.message }</span>
                        </div>
                    </div>
                ) }

                <form onSubmit={handleSubmit}>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>

                        <input type="text" placeholder="title" className="input input-bordered" name="title" onChange={(e) => setTitle(e.target.value)} value={title} disabled={loading} />
                        { errors.title &&
                            <div className="alert alert-warning shadow-lg mt-3">
                                <div>
                                    <span>{ errors.title }</span>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Salary</span>
                        </label>

                        <input type="number" placeholder="set job salary" className="input input-bordered" name="salary" onChange={(e) => setSalary(parseInt(e.target.value))} value={salary} disabled={loading} />
                        { errors.salary &&
                            <div className="alert alert-warning shadow-lg mt-3">
                                <div>
                                    <span>{ errors.salary }</span>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Info</span>
                        </label>

                        <input type="text" placeholder="info" className="input input-bordered" name="info" onChange={(e) => setInfo(e.target.value)} value={info} disabled={loading} />
                        { errors.info &&
                            <div className="alert alert-warning shadow-lg mt-3">
                                <div>
                                    <span>{ errors.info }</span>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Jobs Description</span>
                        </label>

                        <TextEditor onChange={(value) => setDescription(value)} value={description} />
                        { errors.description &&
                            <div className="alert alert-warning shadow-lg mt-3">
                                <div>
                                    <span>{ errors.description }</span>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Level</span>
                        </label>

                        <select className="select select-bordered" name="level" onChange={(e) => setlevel(e.target.value)} value={level} disabled={loading}>
                            <option disabled selected>Select Level</option>
                            <option value="junior">Junior</option>
                            <option value="middle">Middle</option>
                            <option value="senior">Senior</option>
                        </select>
                    </div>

                    <div className="flex justify-between my-4">
                        <Link href={route("jobs")} className="btn btn-error">Back</Link>

                        <button className={`btn btn-primary ${loading ? "loading" : ""}`} type="submit">Add</button>
                    </div>
                </form>

            </section>

        </AdminLayout>
    )
}
