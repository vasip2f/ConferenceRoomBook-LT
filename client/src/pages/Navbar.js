// import React from 'react';
// import '../App.css';
// import { Link, NavLink } from 'react-router-dom'

// function Navbar() {
//   return (
//     <nav expand='sm' style={{ backgroundColor: 'pink' }}>
//       <div className="container flex flex-wrap justify-between items-center mx-auto">
//         <Link  fix='top' className="flex items-center">
//           <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">𝕮𝖔𝖓𝖋𝖊𝖗𝖊𝖓𝖈𝖊 𝕽𝖔𝖔𝖒 𝕭𝖔𝖔𝖐𝖎𝖓𝖌 𝕬𝖕𝖕</span>
//         </Link>
//         <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
//           <span className="sr-only">Open main menu</span>
//           <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//           <svg className="hidden w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//         </button>
//         <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
//           <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
//             <li>
//               <NavLink to="/login" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">𝕷𝖔𝖌𝖎𝖓</NavLink>
//             </li>
//             <li>
//               <NavLink to="/register" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">𝕽𝖊𝖌𝖎𝖘𝖙𝖊𝖗</NavLink>
//             </li>

//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React from 'react';
import '../App.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'pink' }}>
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-black text-xl font-semibold text-gray-100">𝕮𝖔𝖓𝖋𝖊𝖗𝖊𝖓𝖈𝖊 𝕽𝖔𝖔𝖒 𝕭𝖔𝖔𝖐𝖎𝖓𝖌 𝕬𝖕𝖕</Link>

          {/* <button
            className="border border-gray-100 text-gray-200 inline-flex items-center justify-center p-2 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white md:hidden"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button> */}
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

