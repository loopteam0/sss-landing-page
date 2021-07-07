import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        return (
            <section className="text-gray-600  bg body-font">
      
                <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center ">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                             Who We Are
                        </h1>
                        <p className="mb-8 leading-relaxed">
                        
                            Located in Kumasi in the Ashanti Region of Ghana. 	Smart sanitation solutions is made up of young and innovative
                            people from diverse fields, working together towards a common goal.
                            <br />
                          </p>
                       
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    
                        <h1 className="title-font  text-3xl mb-4 font-medium text-gray-900">
                           Our Mission
                            </h1>
                        Our mission is to use our smartbin to raise awareness on proper waste
                        disposal in our communities or anywhere we find ourselves.


                    </div>
                </div>
            </section>
        )
    }
}
