
import React from 'react'
import { useForm } from 'react-hook-form';

export default function ContactUs() {

    const { register, handleSubmit, errors } = useForm();
    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254133.52436411314!2d-0.31981623688939187!3d5.591192094041994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1615660914981!5m2!1sen!2sgh";
    
    const submit = (data) => {
        console.log(data);
    }
    return (

        <section id='contact-us' className="text-gray-600 body-font relative" >
            
        <div className='text-center w-full' >
            <p className="mt-3 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 ">
                Contact Us
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto text-center ">
               Interested in finding us
            </p>
        </div>
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight={0} marginWidth={0} scrolling="no" src={map} ></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full">
                        <div className="md:w-1/2 w-1/3 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">Accra</p>
                        </div>
                        <div className="w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a href='email:rhautomobile@gmail.com' className="text-indigo-500 leading-relaxed">smartsanitation.solutions@gmail.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <a href='tel:+233555027916' className="leading-relaxed text-indigo-500">+233 555 027 916</a>
 
{/* Instagram/twitter: Smart sanitation solutions
Facebook: TrashAppMobile */}
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <form onSubmit={handleSubmit(submit)}>

                        <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">Send Us a Message</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input ref={register({ required: true })} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none
                         text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            <small className='text-red-500 text-xs' > {errors.name && 'Your Name is required'} </small>

                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input ref={register({ required: true })} type="email" id="email" name="email" className="w-full bg-white rounded border 
                        border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                         text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
                         duration-200 ease-in-out" />
                            <small className='text-red-500 text-xs' > {errors.email && 'Incorrect email format'} </small>

                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea ref={register({ required: true })} id="message" name="message" className="w-full bg-white rounded border 
                        border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                         h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6
                          transition-colors duration-200 ease-in-out"></textarea>

                        </div>

                        <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Sumbit</button>
                        <p className="text-xs text-gray-500 mt-3">Send us a message and we will get back to you</p>
                    </form>
                </div>
            </div>
        </section>

    )
}
