import React from 'react';
import logo from '../../../images/logo2.png';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container mx-auto h-20 bg-white flex justify-between items-center'>
            <Link to='/'><img className='w-[200px]' src={logo} alt="" /></Link>
            <div className='flex items-center space-x-8'>
                <RiShoppingCartLine className='cursor-pointer' size={20}/>
                <Link to='/login'>Login</Link>
                <Link to='/signup'><button className='px-6 py-1.5 text-white bg-[#f91944] rounded-full'>Sign Up</button></Link>
            </div>
        </div>
    );
};

export default Navbar;