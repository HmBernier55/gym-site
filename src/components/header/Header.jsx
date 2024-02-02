import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className='bg-slate-950 px-5 h-16 sticky z-50 top-0 w-full flex justify-between items-center'>
      {/* <div className='flex flex-row justify-between items-center h-full flex-wrap'> */}
        <Link to='/' className='flex'>
            <h1 className='font-bold text-lime-500 text-2xl'>RE</h1>
            <h1 className='font-bold text-white text-2xl'>FLEX</h1>
        </Link>
        <div className='lg:hidden'>
          <button onClick={toggleNav}>{isOpen ? <CloseIcon style={{ color: 'white' }} /> : <MenuIcon style={{ color: 'white' }} />}</button>
        </div>
        {isOpen && (
          <div className='absolute left-0 top-full w-full bg-slate-900'>
            <div className='flex flex-col items-center text-white font-medium'>
            <NavLink to='/' className={({isActive}) => `hover:bg-slate-800 w-full text-center py-3 ${isActive ? 'text-white bg-slate-800' : 'text-gray-500'}`} onClick={toggleNav}>Home</NavLink>
              <NavLink to='/about' className={({isActive}) => `hover:bg-slate-800 w-full text-center py-3 ${isActive ? 'text-white bg-slate-800' : 'text-gray-500'}`} onClick={toggleNav}>About</NavLink>
              <NavLink to='/amenities' className={({isActive}) => `hover:bg-slate-800 w-full text-center py-3 ${isActive ? 'text-white bg-slate-800' : 'text-gray-500'}`} onClick={toggleNav}>Amenities</NavLink>
              <NavLink to='/classes' className={({isActive}) => `hover:bg-slate-800 w-full text-center py-3 ${isActive ? 'text-white bg-slate-800' : 'text-gray-500'}`} onClick={toggleNav}>Classes</NavLink>
              <NavLink to='/pricing' className={({isActive}) => `hover:bg-slate-800 w-full text-center py-3 ${isActive ? 'text-white bg-slate-800' : 'text-gray-500'}`} onClick={toggleNav}>Pricing</NavLink>
              <NavLink to='/contact' className={({isActive}) => `hover:bg-slate-800 w-full text-center py-3 ${isActive ? 'text-white bg-slate-800' : 'text-gray-500'}`} onClick={toggleNav}>Contact</NavLink>
            </div>
          </div>
        )}
        <div className='h-full w-full hidden lg:block'>
          <ul className='flex font-medium text-sm h-full justify-center'>
            <li className='h-full'>
              <NavLink to='/' className={({isActive}) => `h-full px-6 flex items-center hover:bg-slate-800 ${isActive ? 'text-white bg-slate-800' : 'text-gray-500'}`}>HOME</NavLink>
            </li>
            <li className='h-full'>
              <NavLink to='/about' className={({isActive}) => `h-full px-6 flex items-center hover:bg-slate-800 ${isActive ? 'text-white' : 'text-gray-500'}`}>ABOUT</NavLink>
            </li>
            <li className='h-full'>
              <NavLink to='/amenities' className={({isActive}) => `h-full px-6 flex items-center hover:bg-slate-800 ${isActive ? 'text-white' : 'text-gray-500'}`}>AMENITIES</NavLink>
            </li>
            <li className='h-full'>
              <NavLink to='/classes' className={({isActive}) => `h-full px-6 flex items-center hover:bg-slate-800 ${isActive ? 'text-white' : 'text-gray-500'}`}>CLASSES</NavLink>
            </li>
            <li className='h-full'>
              <NavLink to='/pricing' className={({isActive}) => `h-full px-6 flex items-center hover:bg-slate-800 ${isActive ? 'text-white' : 'text-gray-500'}`}>PRICING</NavLink>
            </li>
            <li className='h-full'>
              <NavLink to='/contact' className={({isActive}) => `h-full px-6 flex items-center hover:bg-slate-800 ${isActive ? 'text-white' : 'text-gray-500'}`}>CONTACT</NavLink>
            </li>
          </ul>
        </div>
      {/* </div> */}
    </header>
  )
}

export default Header;