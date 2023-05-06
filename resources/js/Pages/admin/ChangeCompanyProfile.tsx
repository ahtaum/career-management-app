import React, { useState } from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import { Inertia } from '@inertiajs/inertia'
import AdminLayout from '@/Layouts/AdminLayout'

export default function ChangeCompanyProfile({ company }: any) {
    let { errors, flash }: any = usePage().props

    let [name, setName] = useState<string>(company.name)
    let [address, setAddress] = useState<string>(company.address)
    let [info, setInfo] = useState<string>(company.info)
    let [description, setDescription] = useState<string>(company.description)
    let [logo, setLogo] = useState<File | null>(company.logo)

    let [loading, setLoading] = useState(false)

    let handleSubmit = (e: any) => {
        e.preventDefault()

        try {
            Inertia.post(route("editCompanyProfile", company.id), { name, address, description, info, logo }, {
                forceFormData: true,
                onProgress: () => {
                    setLoading(true)
                },
                onFinish: () => {
                    setLoading(false)
                },
                onSuccess: () => {
                    setLoading(false)
                }
            })
        } catch (error: any) {
            alert(error.message)
            setLoading(false)
        }
    }

    return (
        <AdminLayout title="Change Company Profile">

            <section id="change-company-profile" className="container my-8 p-3">

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
                            <span className="label-text">Name</span>
                        </label>

                        <input type="text" placeholder="title" className="input input-bordered" name="name" onChange={(e) => setName(e.target.value)} value={name} disabled={loading} />
                        { errors.name &&
                            <div className="alert alert-warning shadow-lg mt-3">
                                <div>
                                    <span>{ errors.name }</span>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>

                        <input type="text" placeholder="set job salary" className="input input-bordered" name="address" onChange={(e) => setAddress(e.target.value)} value={address} disabled={loading} />
                        { errors.address &&
                            <div className="alert alert-warning shadow-lg mt-3">
                                <div>
                                    <span>{ errors.address }</span>
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
                            <span className="label-text">Description</span>
                        </label>

                        <textarea className="textarea textarea-bordered" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
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
                            <span className="label-text">Logo (Options)</span>
                        </label>

                        <input type="file" className="file-input file-input-bordered" name="logo" onChange={(e) => setLogo(e.target.files ? e.target.files[0] : null)} value={undefined} disabled={loading} />
                        { errors.logo &&
                            <div className="alert alert-warning shadow-lg mt-3">
                                <div>
                                    <span>{ errors.logo }</span>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="flex justify-between my-4">
                        <Link href={route("companies")} className="btn btn-error">Back</Link>

                        <button className={`btn btn-primary ${loading ? "loading" : ""}`} type="submit">Change</button>
                    </div>
                </form>

            </section>

        </AdminLayout>
    )
}
