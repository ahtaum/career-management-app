import React, { useState } from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import { AuthLayout } from '@/Layouts/AuthLayout'

export default function Register() {
    let { errors } = usePage().props

    let [email, setEmail] = useState("")
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [avatar, setAvatar] = useState<File | null>(null)
    let [confirm_password, setConfirmPassword] = useState("")

    let [notif, setNotif] = useState(false)

    let handleSubmit = async (e: any) => {
        e.preventDefault()

        try {
            Inertia.post(route("addUser"), { email, username, password, confirm_password, avatar }, {
                forceFormData: true,
                onProgress: () => {
                    setNotif(false)
                },
                onSuccess: () => {
                    setEmail("")
                    setUsername("")
                    setPassword("")
                    setConfirmPassword("")
                    setNotif(true)
                }
            })
        } catch (error: any) {
            alert(error.message)
            setNotif(false)
        }
    }

    return (
        <AuthLayout title="Register User">

            <section id="register-page">

                <div className="flex flex-wrap h-screen">
                    <div className="w-full md:w-1/2 items-center justify-center lg:flex md:flex hidden">
                        <div className="w-full max-w-md p-4">
                            <h2 className="text-gray-800 text-2xl font-bold mb-6">Welcome back!</h2>

                            <p className="text-gray-700 mb-4 text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis
                                iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo.
                            </p>

                            <p className="text-gray-700 mb-4">
                                have some an account?{' '}
                                <Link href={route("login")} className="text-blue-600 hover:text-blue-700 underline">Login Now</Link>
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 bg-gradient-to-b from-blue-400 to-blue-500 flex items-center justify-center">
                        <div className="w-full max-w-md p-4">
                            <h1 className="text-3xl font-bold my-6 lg:text-left md:text-left text-center">Register</h1>

                            {/* Notification Success */}
                            { notif && (
                                <div className="alert alert-success shadow-lg">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>Register Complete go to <Link href={route("login")} className="text-blue-700 font-bold underline">Login</Link></span>
                                    </div>
                                </div>
                            ) }

                            <form onSubmit={handleSubmit}>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Username</span>
                                    </label>

                                    <input type="text" placeholder="your username" className="input input-bordered" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
                                    { errors.username &&
                                        <div className="alert alert-warning shadow-lg mt-3">
                                            <div>
                                                <span>{ errors.username }</span>
                                            </div>
                                        </div>
                                    }
                                </div>

                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>

                                    <input type="email" placeholder="your email" className="input input-bordered" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
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
                                        <span className="label-text">Password</span>
                                    </label>

                                    <input type="password" placeholder="your password" className="input input-bordered" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
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

                                    <input type="password" placeholder="confirm your password" className="input input-bordered" name="confirm_password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirm_password} />
                                    { errors.confirm_password &&
                                        <div className="alert alert-warning shadow-lg mt-3">
                                            <div>
                                                <span>{ errors.confirm_password }</span>
                                            </div>
                                        </div>
                                    }
                                </div>

                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Avatar (Options)</span>
                                    </label>

                                    {/* <input type="file" className="file-input file-input-bordered" name="avatar" onChange={(e) => setAvatar(e.target.files[0])} value={undefined} /> */}
                                    <input type="file" className="file-input file-input-bordered" name="avatar" onChange={(e) => setAvatar(e.target.files ? e.target.files[0] : null)} value={undefined} />
                                    { errors.avatar &&
                                        <div className="alert alert-warning shadow-lg mt-3">
                                            <div>
                                                <span>{ errors.avatar }</span>
                                            </div>
                                        </div>
                                    }
                                </div>

                                <div className="mb-6 flex justify-between">
                                    <Link href={route("home")} className="btn btn-error">Back</Link>
                                    <button className="btn btn-primary" type="submit">Register</button>
                                </div>

                                <div className="flex lg:hidden md:hidden">
                                    <p className="text-gray-700 mb-4">
                                        have some an account?{' '}
                                        <Link href={route("login")} className="text-blue-700 font-bold underline">
                                            Login
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>

        </AuthLayout>
    )
}
