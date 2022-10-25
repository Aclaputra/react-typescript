import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="w-full h-16 bg-black flex items-center px-10 justify-between">
      <h1 className="text-white text-3xl font-semibold font-Monserrat">users management</h1>
      <Link to="add-user" type="button" className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
        Add User
      </Link>
    </div>
  )
}
