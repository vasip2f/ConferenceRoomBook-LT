import React from 'react';
import '../App.css';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";

// function NavbarCalendar() {

//   const [date, setDate] = useState("");

//   useEffect(() => {
//     let interval = setInterval(() => {
//       setDate(new Date().toLocaleString());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <nav expand='lg' style={{ backgroundColor: 'lightgray' }}>
//       <div className="container flex flex-wrap justify-between items-center mx-auto">
//         <Link fix='top' className="flex items-center justify-between">
//           <span className="self-center text-xl font-semibold whitespace-nowrap text-black">𝕮𝖔𝖓𝖋𝖊𝖗𝖊𝖓𝖈𝖊 𝕽𝖔𝖔𝖒 𝕭𝖔𝖔𝓚𝖎𝖓𝖌</span>
//         </Link>

//         <p className="date-time text-black text-size-10">{date}</p>
//         <div className="flex items-center justify-between" id="mobile-menu">

//           <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
             
//             <p className="flex items-center justify-between">W𝖊𝖑𝖈𝖔𝖒𝖊  : {localStorage.getItem("email")}</p>
//             <li>
//               <NavLink to="/dashboard" className="flex items-center justify-between">𝘿𝙖𝙨𝙝𝙗𝙤𝙖𝙧𝙙</NavLink>
//             </li>
//             <li>
//               <NavLink to="/login" className="flex items-center justify-between">𝐋𝐨𝐠𝐨𝐮𝐭</NavLink>
//             </li>

//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default NavbarCalendar

function NavbarCalendar() {
  const [date, setDate] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full flex justify-center items-center" style={{ backgroundColor: 'lightblue' }}>
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <span className="text-black text-center text-2xl font-bold tracking-wider">𝕮𝖔𝖓𝖋𝖊𝖗𝖊𝖓𝖈𝖊 𝕽𝖔𝖔𝖒  𝕭𝖔𝖔𝓚𝖎𝖓𝖌</span>
          <button
            className="md:hidden rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg viewBox="0 0 20 20" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                d="M3 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 14a1 1 0 110-2h6a1 1 0 110 2H9z"
                clipRule="evenodd"
              />
            </svg>
          </button>

        </div>

        {/* <div className="text-right">
          <p className="date-time text-black text-size-10">{date}</p>
        </div> */}

        <div className={`md:flex md:items-center ${showMenu ? "block" : "hidden"}`}>
          <div className="flex flex-col md:flex-row md:mx-6">

            <p className="flex items-center justify-between">W𝖊𝖑𝖈𝖔𝖒𝖊 : {localStorage.getItem("email")}</p>

           
            <NavLink
              to="/dashboard"
              activeClassName="font-bold"
              className="my-1 text-gray-100 md:mx-4 md:my-0 hover:text-gray-300 text-black"
              onClick={() => setShowMenu(false)}
            >
              𝘿𝙖𝙨𝙝𝙗𝙤𝙖𝙧𝙙
            </NavLink>

            <NavLink
              to="/login"
              activeClassName="font-bold"
              className="my-1 text-gray-100 md:mx-4 md:my-0 hover:text-gray-300 text-black"
              onClick={() => setShowMenu(false)}
            >
              𝐋𝐨𝐠𝐨𝐮𝐭
            </NavLink>

          </div>
        </div>

      </div>

    </nav>
  )
}

export default NavbarCalendar


















