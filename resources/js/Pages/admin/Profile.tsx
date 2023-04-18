import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import AdminLayout from '@/Layouts/AdminLayout'

export default function Profile() {
    let { userAuth }: any = usePage().props
    let { errors } = usePage().props

    let [email, setEmail] = useState("")
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [avatar, setAvatar] = useState<File | null>(null)
    let [confirm_password, setConfirmPasswrod] = useState("")

    return (
        <AdminLayout title="Profile">

            {/* Edit Modal */}
            <input type="checkbox" id="edit-profile" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Edit Profile</h3>

                    <form>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>

                            <input type="text" placeholder="username" className="input input-bordered" name="username" />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" placeholder="email" className="input input-bordered" name="email" />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" placeholder="password" className="input input-bordered" name="password" />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Confirm New Password</span>
                            </label>

                            <input type="password" placeholder="confirm new password" className="input input-bordered" name="confirm_password" />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Avatar (Options)</span>
                            </label>

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

                            <button className="btn btn-primary" type="submit">Edit</button>
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

                        <div className="card-actions justify-center">
                            <label htmlFor="edit-profile" className="btn btn-primary">open modal</label>
                        </div>
                    </div>
                </div>

            </section>

        </AdminLayout>
    )
}
