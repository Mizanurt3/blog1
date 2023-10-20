import React from 'react';
import { useState } from 'react';
import {menu, close, logo} from "../assets";
import { Link } from 'react-router-dom';

export function Navbar() {
    const [toggle, setToggle] = useState(false)

    const [dropdown, setDropdown] = useState(false)

    return (
        <nav className={`!toggle?'w-screen h-[80px] bg-white z-100  drop-shadow-lg':z-100`}>
            <div className="flex justify-between items-center w-full h-full md:max-w-[1240px]  m-auto">
                <div className='flex items-center'>
                    <img src={logo} alt="" className='sm:ml-10 ss:ml md:ml-3 opacity-[55%] w-full h-[25px]' />
                </div>
                <div className='flex items-center '>
                    <ul className='hidden md:flex '>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>

                        <li>Platform</li>
                        
                        <li>Pricing</li>
                        
                    </ul>
                </div>
                <div className='hidden md:flex sm:mr-10 md:mr-10 md:gap-4'>
                    <button className='border-none bg-transparent text-black'>Login</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
                <div className='md:hidden ' onClick={()=>{
                    setToggle(!toggle)
                    
                }}>
                    <img src={toggle?close:menu} alt="" className='w-[28px] h-[28px] mr-10 cursor-pointer' />
                </div>

                
                    


            </div>
                <ul className={toggle?'absolute  bg-white w-full px-8 md:hidden ss:z-50 sm:z-50':'hidden'}>
                    <Link to="/"><li>Home</li></Link>
                    
                    <li>About</li>
                    <li>Support</li>
                    <li onClick={()=>{
                            setDropdown(!dropdown)
                        }} className={dropdown? 'border-2' : 'w-[150px] cursor-pointer'}>Platform
                        <img style={{position:"absolute",top:"185px", left:"130px"}} className='absolute w-[28px] ' src={dropdown?close:menu} alt="" />
                        {dropdown?<ul className='p-0 m-0 '>
                            <li className='' href="www.google.com">fdgdfg</li>
                            <li className='mb-0 pb-0'>fdgdfg</li>
                        </ul>:false}
                    </li>
                    <li>Pricing</li>
                    <div className='flex flex-col my-4'>
                        <button className=' bg-transparent text-black mb-4 py-3 px-8'>Login</button>
                        <button className='px-8 py-3'>Sign Up</button>
                    </div>
                    <a href="www.google.com">gsdgdfgdf</a>
                        
                </ul>
            
        </nav>
    )
}
