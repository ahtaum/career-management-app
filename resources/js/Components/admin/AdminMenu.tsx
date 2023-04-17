import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import route from 'ziggy-js'

export const AdminMenu = () => {
    return (
        <>

        <div className="navbar bg-base-100 lg:hidden md:hidden flex">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href={route("dashboard")}>Dashboard</Link></li>

                        <li tabIndex={0}>
                            <a>
                                Posts
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>

                            <ul className="p-2 bg-base-100">
                                <li><Link href={route("jobs")}>Jobs</Link></li>
                                <li><a href="#">Candidates</a></li>
                                <li><a href="#">Applications</a></li>
                            </ul>
                        </li>

                        <li><Link href={route("profile")}>Profile</Link></li>
                        <li><Link href={route("logout")} method="post" as="button" type="button">Logout</Link></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>

                <Link href={route("dashboard")} className="btn btn-ghost normal-case text-xl">Admin</Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href={route("dashboard")}>Dashboard</a></li>
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Costumers</a></li>
                    <li><Link href={route("logout")} method="post" as="button" type="button">Logout</Link></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>
        </div>

        </>
    )
}
