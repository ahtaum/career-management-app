import React, { useState } from 'react'
import { Link } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import { MainLayout } from '@/Layouts/MainLayout'
import { convertDate } from '@/Helpers/Tools'
import { Props } from '@/Interfaces/props'

export default function Home({ companies, jobs }: Props) {
    let [search, setSearch] = useState("")
    let [currentPage, setCurrentPage] = useState(1)
    let jobsPerPage = 6

    // Search Data
    let searchPosts = () => {
        let paramSearch = ["title"]

        return jobs.filter((post: any) => {
            return paramSearch.some((newData) => {
                return (
                    post[newData].toString().toLowerCase().indexOf(search.toLowerCase()) > -1
                )
            })
        })
    }

    // Pagination
    let indexOfLastJob = currentPage * 6
    let indexOfFirstJob = indexOfLastJob - 6
    let currentJobs = searchPosts().slice(indexOfFirstJob, indexOfLastJob)

    let totalPages = Math.ceil(searchPosts().length / jobsPerPage)

    let handleNextPage = () => {
      setCurrentPage(currentPage + 1)
    }

    let handlePrevPage = () => {
      setCurrentPage(currentPage - 1)
    }

    return (
        <MainLayout title="Homepage">

            <section id="home-page">

                <div className="hero lg:p-24 p-10 md:p-14 bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-lg">
                            <h1 className="text-5xl font-bold mb-6">{ companies.name }</h1>

                            <p className="py-6 text-xl">{ companies.info }</p>
                        </div>
                    </div>
                </div>

                <div className={`container my-8 ${jobs.length === 0 ? "hidden" : ""}`}>
                    <div className="flex-col text-center my-8">
                        <h1 className="font-bold text-2xl mb-4">All Jobs Open</h1>

                        <input type="text" placeholder="Search Jobs ..." className="input input-bordered lg:w-96 md:w-96" name="search-posts" onChange={(e) => setSearch(e.target.value)} value={search} />
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:p-0 p-5 md:grid md:grid-cols-3 md:gap-8 md:p-5 my-8">

                        { jobs && currentJobs.map((job: any) => (
                            <div className="card bg-base-100 hover:bg-base-200 shadow-xl mb-4" key={job.id}>
                                <div className="card-body">
                                    <h2 className="card-title">{ job.title }</h2>

                                    <div className="my-3">
                                        <p>{ job.info }</p>

                                        <span className="text-slate-500 mt-3">{ convertDate(job.updated_at) }</span>
                                    </div>

                                    <div className="card-actions justify-end">
                                        <Link href={route("detailsJob", job.id)} className="btn btn-primary">Apply</Link>
                                    </div>
                                </div>
                            </div>
                        )) }

                    </div>

                    {/* pagination button */}
                    <div className="flex justify-center mt-8">
                        <button onClick={handlePrevPage} disabled={currentPage === 1} className="btn btn-primary mr-2">Previous</button>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn btn-primary">Next</button>
                    </div>
                </div>

            </section>

        </MainLayout>
    )
}
