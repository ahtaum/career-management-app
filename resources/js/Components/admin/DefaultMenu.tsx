import React from 'react'
import { usePage, Link } from '@inertiajs/inertia-react'
import route from 'ziggy-js'

export const DefaultMenu = ({ title }: any) => {
    let { userAuth }: any = usePage().props

    return (
        <div className="navbar bg-base-100 lg:flex md:flex hidden">
            <div className="flex-1">
                <h1 className="font-bold text-2xl">{ title }</h1>
            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-14 rounded-full">
                            <img src={ userAuth.profileImg } />
                        </div>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link href={route("profile")} className="justify-between">Profile</Link>
                        </li>
                        <li>
                            <Link href={route("logout")} method="post" as="button" type="button">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
