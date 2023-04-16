import React from 'react'
import { MainLayout } from '@/Layouts/MainLayout'

export default function Home() {
    return (
        <MainLayout title="Homepage">

            <section id="home-page">

                <div className="hero p-24 bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold mb-4">Hello there</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quis.</p>
                        </div>
                    </div>
                </div>

                <div className="container my-8">
                    <div className="flex justify-between my-4">
                        <h1 className="font-bold text-2xl">All Jobs Open</h1>

                        <input type="text" placeholder="Search Posts ..." className="input input-bordered lg:w-96 md:w-96 w-full" name="search-posts" />
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:p-0 p-5 md:grid md:grid-cols-3 md:gap-8 md:p-5 my-4">

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
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
