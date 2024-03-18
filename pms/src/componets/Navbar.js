import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import Form from './Form';

const Navbar = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    return (

        <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center font-bold text-4xl whitespace-nowrap dark:text-white">PMS</span>
                </Link>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {
                        isAuthenticated &&
                        <li className=' self-center flex'>
                            <p className=' text-white mr-10 font-semibold text-xl'>{user.name}</p>
                        </li>
                    }
                    {
                        isAuthenticated ?
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                            :
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => loginWithRedirect()}>Login</button>
                    }


                </div>
            </div>
        </nav>

        {
            isAuthenticated ? 
            <Form/> : 
            <p> Login first</p>
        }
        </>

    )
}

export default Navbar
