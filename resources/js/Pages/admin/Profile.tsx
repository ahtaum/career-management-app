import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import AdminLayout from '@/Layouts/AdminLayout'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import { FiKey, FiEdit } from 'react-icons/fi'

export default function Profile() {
    let { userAuth, errors, flash }: any = usePage().props

    let [email, setEmail] = useState(userAuth.data.email)
    let [username, setUsername] = useState(userAuth.data.username)
    let [password, setPassword] = useState("")
    let [avatar, setAvatar] = useState<File | null>(userAuth.data.avatar)
    let [confirm_password, setConfirmPasswrod] = useState("")

    let [loading, setLoading] = useState(false)

    let handleSubmit = (e: any) => {
        e.preventDefault()

        try {
            Inertia.post(route("changeProfile", userAuth.data.id), { email, username, avatar }, {
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

    let handleSubmitPassword = (e: any) => {
        e.preventDefault()

        try {
            Inertia.post(route("changePassword", userAuth.data.id), { password, confirm_password }, {
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
        <AdminLayout title="Profile">

            {/* Edit Modal */}
            <input type="checkbox" id="edit-profile" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Edit Profile</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>

                            <input type="text" placeholder="username" className="input input-bordered" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" placeholder="email" className="input input-bordered" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Avatar (Options)</span>
                            </label>

                            <div className="avatar my-8">
                                <div className="w-24 rounded mx-auto">
                                    <img src={userAuth.profileImg} />
                                </div>
                            </div>

                            <input type="file" className="file-input file-input-bordered" name="avatar" onChange={(e) => setAvatar(e.target.files ? e.target.files[0] : null)} value={undefined} />
                            { errors.avatar &&
                                <div className="alert alert-warning shadow-lg mt-3">
                                    <div>
                                        <span>{ errors.avatar }</span>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="modal-action flex justify-between">
                            <label htmlFor="edit-profile" className="btn btn-error">cancel</label>

                            <label htmlFor="edit-profile">
                                <button className="btn btn-primary" type="submit">Edit</button>
                            </label>
                        </div>
                    </form>
                </div>
            </div>

            {/* Change Password Modal */}
            <input type="checkbox" id="edit-password" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Change Password Profile</h3>

                    <form onSubmit={handleSubmitPassword}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" placeholder="your new password" className="input input-bordered" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            { errors.password &&
                                <div className="alert alert-warning shadow-lg mt-3">
                                    <div>
                                        <span>{ errors.password }</span>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>

                            <input type="password" placeholder="confirm your new password" className="input input-bordered" name="confirm_password" onChange={(e) => setConfirmPasswrod(e.target.value)} value={confirm_password} />
                            { errors.confirm_password &&
                                <div className="alert alert-warning shadow-lg mt-3">
                                    <div>
                                        <span>{ errors.confirm_password }</span>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="modal-action flex justify-between">
                            <label htmlFor="edit-password" className="btn btn-error">cancel</label>

                            <label htmlFor="edit-password">
                                <button className="btn btn-primary" type="submit">Change</button>
                            </label>
                        </div>
                    </form>
                </div>
            </div>

            {/* Main */}
            <section id="profile-page" className="container my-8 p-3">

                <h1 className="font-bold text-2xl mb-4">Profile</h1>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="mb-8 font-bold text-2xl">{ userAuth.data.username }</h2>

                        <div className="avatar mb-4 mx-auto my-2">
                            <div className="w-24 rounded-full">
                                <img src={ userAuth.profileImg } />
                            </div>
                        </div>

                        <p className="mb-4">{ userAuth.data.email }</p>

                        <div className="card-actions flex justify-center">
                            <label htmlFor="edit-profile" className={`gap-2 btn btn-primary ${loading ? "loading" : ""}`}><FiEdit />Edit Profile</label>

                            <label htmlFor="edit-password" className="btn btn-success gap-2"><FiKey />Change Password</label>
                        </div>
                    </div>
                </div>

                { flash.message && (
                    <div className="alert alert-success shadow-lg my-8">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{ flash.message }</span>
                        </div>
                    </div>
                ) }

            </section>

        </AdminLayout>
    )
}
