import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CircleIcon from '@mui/icons-material/Circle';

const Header = () => {
  return (
    <header className='sticky z-50 top-0'>
      <nav className='bg-slate-950 px-5 h-16'>
        <div className='flex flex-row justify-between items-center h-full'>
          <Link to='/' className='flex'>
              <h1 className='font-bold text-lime-500 text-2xl'>RE</h1>
              <h1 className='font-bold text-white text-2xl'>FLEX</h1>
          </Link>
          <div className='h-full w-full'>
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
          {/* <div className='flex items-center'>
            <ShoppingCartIcon fontSize='large' style={{ color: 'white' }} />
            <div className='relative'>
              <CircleIcon style={{ color: 'red' }} />
              <p className='absolute text-white font-medium text-sm z-20 right-2 bottom-0.5'>0</p>
            </div>
          </div> */}
        </div>
      </nav>
    </header>
  )
}

export default Header;