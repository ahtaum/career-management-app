import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import { FiArrowLeft } from 'react-icons/fi'
import { MainLayout } from '@/Layouts/MainLayout'
import { sanitizeHtml } from '@/Helpers/Tools'
import { Gender, Job } from '@/Interfaces/types'

export default function Job({ job }: Job) {
    let { errors, flash }: any = usePage().props
    let job_id = job.id

    let [name, setName] = useState<string>("")
    let [email, setEmail] = useState<string>("")
    let [address, setAddress] = useState<string>("")
    let [gender, setGender] = useState<Gender>("male")
    let [cv, setCv] = useState<File | null>(null)
    let [linkedin, setLinkedin] = useState<string>("")
    let [about, setAbout] = useState<string>("")

    let [loading, setLoading] = useState<boolean>(false)

    let handleSubmit = (e: any) => {
        e.preventDefault()

        try {
            Inertia.post(route("applyJob"), { job_id, name, email, address, gender, cv, linkedin, about }, {
                forceFormData: true,
                onProgress: () => {
                    setLoading(true)
                },
                onFinish: () => {
                    setLoading(false)
                },
                onSuccess: () => {
                    setName("")
                    setEmail("")
                    setAddress("")
                    setGender("male")
                    setCv(null)
                    setAbout("")
                    setLoading(false)
                }
            })
        } catch (error: any) {
            alert(error.message)
            setLoading(false)
        }
    }

    return (
        <MainLayout title="Job">

            <section id="jobDetails-page" className="container my-8">

                {/* Notification */}
                { flash.message && (
                    <div className="alert alert-success shadow-lg my-8 mx-auto">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{ flash.message }</span>
                        </div>
                    </div>
                ) }

                {/* Main */}
                <div className="card bg-base-100 shadow-xl my-8 p-3">
                    <div className="card-body">
                        <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-8">

                            <div className="w-full">
                                <span className="badge badge-error mb-8 p-4 cursor-pointer" onClick={() => window.history.back() }><FiArrowLeft /></span>

                                <h1 className="mb-8 font-bold text-2xl">{ job.title }</h1>

                                <p>{ sanitizeHtml(job.description) }</p>
                            </div>

                            <form className="lg:w-96 md:w-96" onSubmit={handleSubmit}>
                                <h1 className="font-bold text-2xl mb-8 text-center">Apply this Job</h1>

                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Fullname</span>
                                    </label>

                                    <input type="text" placeholder="your name" className="input input-bordered" name="name" onChange={(e) => setName(e.target.value)} value={name} disabled={loading} />
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
                                        <span className="label-text">Email</span>
                                    </label>

                                    <input type="email" placeholder="your email" className="input input-bordered" name="email" onChange={(e) => setEmail(e.target.value)} value={email} disabled={loading} />
                                    { errors.email &&
                                        <div className="alert alert-warning shadow-lg mt-3">
                                            <div>
                                                <span>{ errors.email }</span>
                                            </div>
                                        </div>
                                    }
                                </div>

                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Your Current Address</span>
                                    </label>

                                    <input type="text" placeholder="your Address" className="input input-bordered" name="address" onChange={(e) => setAddress(e.target.value)} value={address} disabled={loading} />
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
                                        <span className="label-text">Gender</span>
                                    </label>

                                    <select className="select select-bordered" name="gender" onChange={(e) => setGender(e.target.value as Gender)} value={gender} disabled={loading}>
                                        <option disabled selected>Select Options</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>


                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Your CV</span>
                                    </label>

                                    <input type="file" className="file-input file-input-bordered" name="cv" onChange={(e) => setCv(e.target.files ? e.target.files[0] : null)} value={undefined} disabled={loading} />
                                    { errors.cv &&
                                        <div className="alert alert-warning shadow-lg mt-3">
                                            <div>
                                                <span>{ errors.cv }</span>
                                            </div>
                                        </div>
                                    }
                                </div>

                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Linkedin (Options)</span>
                                    </label>

                                    <input type="text" placeholder="your Linkedin" className="input input-bordered" name="linkedin" onChange={(e) => setLinkedin(e.target.value)} value={linkedin} disabled={loading} />
                                    { errors.linkedin &&
                                        <div className="alert alert-warning shadow-lg mt-3">
                                            <div>
                                                <span>{ errors.linkedin }</span>
                                            </div>
                                        </div>
                                    }
                                </div>

                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Wanna Share About You? (Options)</span>
                                    </label>

                                    <textarea className="textarea textarea-bordered" placeholder="Bio" name="about" onChange={(e) => setAbout(e.target.value)} value={about} disabled={loading}></textarea>
                                    { errors.about &&
                                        <div className="alert alert-warning shadow-lg mt-3">
                                            <div>
                                                <span>{ errors.about }</span>
                                            </div>
                                        </div>
                                    }
                                </div>

                                <button className={`btn btn-info ${loading ? "loading" : ""}`} type="submit">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>

            </section>

        </MainLayout>
    )
}
