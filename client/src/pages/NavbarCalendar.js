import React from 'react';
import '../App.css';
import {Link, NavLink} from 'react-router-dom'

function NavbarCalendar() {
  return (
<nav   expand='lg'   style={{backgroundColor:'pink'}}>
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <Link  fix='top' className="flex items-center justify-between">
        <span className="self-center text-xl font-semibold whitespace-nowrap text-black">𝕮𝖔𝖓𝖋𝖊𝖗𝖊𝖓𝖈𝖊 𝕽𝖔𝖔𝖒 𝕭𝖔𝖔𝓚𝖎𝖓𝖌</span>
    </Link>
  
    <div className="flex items-center justify-between" id="mobile-menu">
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <p className="flex items-center justify-between">W𝖊𝖑𝖈𝖔𝖒𝖊  : {localStorage.getItem("email")}</p>
        <li>
          <NavLink to="/dashboard" className="flex items-center justify-between">𝘿𝙖𝙨𝙝𝙗𝙤𝙖𝙧𝙙</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="flex items-center justify-between">𝐋𝐨𝐠𝐨𝐮𝐭</NavLink>
        </li>
 
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavbarCalendar