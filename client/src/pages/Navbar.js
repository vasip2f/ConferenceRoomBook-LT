import React from 'react';
import '../App.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'pink' }}>
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link className="text-black text-xl font-semibold text-gray-100">𝕮𝖔𝖓𝖋𝖊𝖗𝖊𝖓𝖈𝖊 𝕽𝖔𝖔𝖒  𝕭𝖔𝖔𝓚𝖎𝖓𝖌</Link>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col md:flex-row md:mx-6">
            <NavLink to="/login" activeClassName="font-bold" className="my-1 text-gray-100 md:mx-4 md:my-0 hover:text-gray-300">𝕷𝖔𝖌𝖎𝖓</NavLink>
            <NavLink to="/register" activeClassName="font-bold" className="my-1 text-gray-100 md:mx-4 md:my-0 hover:text-gray-300">𝕽𝖊𝖌𝖎𝖘𝖙𝖊𝖗</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

