import React from 'react'
import { MainLayout } from '@/Layouts/MainLayout'

export default function Home({ companies }: any) {
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

                <div className="container my-8">
                    <div className="flex-col text-center my-8">
                        <h1 className="font-bold text-2xl mb-4">All Jobs Open</h1>

                        <input type="text" placeholder="Search Jobs ..." className="input input-bordered lg:w-96 md:w-96" name="search-posts" />
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:p-0 p-5 md:grid md:grid-cols-3 md:gap-8 md:p-5 my-4">

                        <div className="card bg-base-100 shadow-xl mb-4">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl mb-4">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl mb-4">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </MainLayout>
    )
}
