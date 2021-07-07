
import React, { Component, Fragment } from 'react'
import { logo1 } from '../config'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react';

export default function AppBar() {


  let match = useLocation();

  let menus = [
    {
      title: "Home",
      link: '#home'
    },
    {
      title: "About Us",
      link: '#about-us'
    },
    {
      title: "Products",
      link: '#products',
    },
    {
      title: "Contact Us",
      link: '#contact-us'
    }
  ]
  console.log(match);
  return (

    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 pb-0 justify-between   items-center">
        <Link to='/' key={'logo-600'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className='w-10 h-10' src={logo1} alt="Rh Automobile logo" />
          <span className="ml-3 text-xl">SSS</span>
        </Link>
        <nav className="md:ml-auto md:flex flex-wrap items-center hidden   text-base justify-center">
          {
            menus.map(e => (
              <Link key={`${e}`} className={`py-2 px-6 flex text-green-500 border-b-2 transition-all ${match.pathname === e.link ? 'border-green-500' : ''} `} to={e.link} >{e.title}</Link>
            ))
          }
        </nav>

        <div className='flex md:hidden' >
          <Menu as='div' className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white 
              bg-black rounded-md bg-opacity-20 hover:bg-opacity-30
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Options

              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {
                    menus.map(e =>
                      <Menu.Item>
                        {({ active }) => (
                          <a href={e.link}
                            className={`${active ? 'bg-green-100 text-green-800 ' : 'text-gray-900'
                              } group flex rounded-md items-center w-full px-4 py-3 text-sm`}
                          >

                            {e.title}
                          </a>
                        )}
                      </Menu.Item>
                    )
                  }

                </div>


              </Menu.Items>
            </Transition>
          </Menu>
        </div>

      </div>
    </header>
  );

}