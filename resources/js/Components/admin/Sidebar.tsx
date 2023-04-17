import React, { useState } from "react"
import { Link, usePage } from "@inertiajs/inertia-react"
import route from "ziggy-js"

let Sidebar = () => {
    let { userAuth }: any = usePage().props
    let [isOpen, setIsOpen] = useState(false)

    let toggleDropdown = () => {
      setIsOpen(!isOpen)
    }

    return (
        <div className="lg:flex md:flex hidden flex-col w-64 bg-gradient-to-b from-blue-400 to-blue-600 h-screen">
            <div className="h-16 flex justify-center items-center text-white text-xl font-bold mb-6">
                {/* { userAuth.data.username } */}
                Admin
            </div>

            <ul className="flex-grow">
                <li className="mb-2">
                    <Link href={route("dashboard")} className="flex items-center py-2 px-6 text-white hover:bg-blue-500">
                    Dashboard
                    </Link>
                </li>
                <li className="mb-2">
                    <div className="flex items-center py-2 px-6 text-white hover:bg-blue-500 cursor-pointer" onClick={toggleDropdown}>
                        Posts
                        <svg className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M3.707 6.293a1 1 0 011.414 0L10 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    {isOpen && (
                        <ul className="ml-4 mt-2">
                            <li>
                                <a href="#" className="flex items-center py-2 px-6 text-white hover:bg-blue-500">
                                Jobs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center py-2 px-6 text-white hover:bg-blue-500">
                                Candidates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center py-2 px-6 text-white hover:bg-blue-500">
                                Applications
                                </a>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="mb-2">
                    <Link href={route("profile")} className="flex items-center py-2 px-6 text-white hover:bg-blue-500">
                    Profile
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href={route("logout")} method="post" as="button" type="button" className="tflex items-center py-2 px-6 text-white hover:bg-blue-500">Logout</Link>
                </li>
            </ul>

            <div className="h-16 flex justify-center items-center text-white text-sm">
            &copy; 2023
            </div>
        </div>
    )
}

export default Sidebar
