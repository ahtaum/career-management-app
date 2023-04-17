import React, { useState } from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import { AuthLayout } from '@/Layouts/AuthLayout'

export default function Login() {
    const { errors } = usePage().props
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e: any) {
        e.preventDefault()

        try {
            Inertia.post(route("authenticate"), { email, password }, {
                forceFormData: true,
            })
        } catch (error: any) {
            alert(error.message)
        }
    }

    return (
        <AuthLayout title="Login">

            <section id="login-page">

                <div className="flex flex-wrap h-screen">
                    <div className="w-full md:w-1/2 bg-gradient-to-b from-blue-400 to-blue-500 flex items-center justify-center">
                        <div className="w-full max-w-md p-4">
                            <h1 className="text-white text-3xl font-bold mb-6 lg:text-left md:text-left text-center">Login</h1>

                            <form onSubmit={handleSubmit}>
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

                                <div className="mb-6 flex justify-between">
                                    <Link href={route("home")} className="btn btn-error">Back</Link>

                                    <button className="btn btn-primary" type="submit">Login</button>
                                </div>

                                <div className="flex lg:hidden md:hidden">
                                    <p className="text-gray-700 mb-4">
                                        Don't have an account yet?{' '}
                                        <Link href={route("register")} className="text-blue-700 font-bold underline">
                                            Register now
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

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
                                Don't have an account yet?{' '}
                                <Link href={route("register")} className="text-blue-600 hover:text-blue-700 underline">
                                Register now
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

            </section>

        </AuthLayout>
    )
}
