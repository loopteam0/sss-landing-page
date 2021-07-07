import { React, Fragment } from 'react'

export default function Aims() {
    return (
        <Fragment>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="p-8 rounded shadow-xl sm:p-16">
                    <div className="flex flex-col lg:flex-row">
                        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-10">
                            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Get <span className='text-green-600' >Data</span> on how much <span className="text-red-400">waste</span> and <span className="text-red-400"> recycling </span>
                                is being generated in your home, <span className="text-green-600">office</span> or <span className="text-green-600">community</span> every single day.
                            </h2>
                        </div>
                        <div className="lg:w-1/2 space-y-4">

                            <p>How are we supposed to design effective recycling programs and track their progress if there is no way to measure our waste & recycling?</p>

                            <p>With our smart bin, your bin is picked up on timely basis when its full.
                                Automatic closing and opening of the bin.</p>

                            <p>Eco Friendly design to improve waste collection in your community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
