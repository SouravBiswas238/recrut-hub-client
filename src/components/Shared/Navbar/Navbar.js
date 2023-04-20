import React, { useState } from 'react';
import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

import { HiLightBulb } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
// react icon import links 
import { FaHouseUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPlusLg, BsTools, BsInfoCircleFill, BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { MdDeveloperMode, MdOutlineConnectWithoutContact } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RiLoginBoxLine } from "react-icons/ri";
import { ImExit } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserStore } from '../../../stateManagement/UserContext/UserContextStore';
import useDarkMode from '../../../hooks/useDarkMode';

const Navbar = () => {
    const [colorTheme, setTheme] = useDarkMode()

    const [navSwitch, setNavSwitch] = useState(false);
    const [userSwitch, setUserSwitch] = useState(false);
    // user information  code {sourav}
    const userStore = useContext(UserStore);
    const currentUser = userStore.user;
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        localStorage.removeItem('accessToken')
        signOut(auth);
        // closed user information menu bar
        setUserSwitch(false)
    }

    //user information
    // const userStore = useContext(UserStore)?.user;

    const closedNavbarAll = () => {
        setUserSwitch(false) //main navbar
        setNavSwitch(false)  // user information navbar
    }

    //navbar active or deActive color style 
    const active = " font-semibold bg-[#1C2880]   text-white dark:text-white dark:rounded-[5px] p-2 dark:bg-[#1F2937] text-[17px]  flex items-center "
    const deActive = " dark:text-[#8C9BB6]  font-semibold text-[#273272] flex items-center text-[17px]   p-2 "

    return (
        <nav className='sticky py-2 bg-[#F3F3F3] top-0 left-0 z-50 dark:bg-[#0C1322] nav-shadow nav-border dark:border-1 dark:border-[#ddd'>
            <div className='container max-w-[1349px] mx-auto relative z-50'>
                <div className='flex justify-between items-center relative'>
                    {/* logo and navbar menu */}
                    <div className='logo flex items-center text-xl font-bold py-3 ml-3'>
                        {/* navbar menu switch */}
                        <div onClick={() => setNavSwitch(!navSwitch)} className='mr-2 text-2xl md:hidden ease-out duration-200 '>
                            {
                                !navSwitch ? <GiHamburgerMenu /> : <BsPlusLg className='rotate-45' />
                            }
                        </div>


                        <Link to='/'>
                            <span className='ml-1 text-[#0D1425] dark:text-white'>Recruit<span className='dark:text-[#38BDF8] text-[#3878DF]'>Hub</span></span>
                        </Link>

                    </div>

                    {/* routes  */}
                    <div className={`routes absolute md:static left-0 z-10 w-full md:w-auto ease-out duration-300 shadow-lg md:shadow-none ${navSwitch ? "navOpen" : "navClosed"}`}>

                        <ul className='md:flex bg-[#F3F3F3] dark:bg-[#0C1322] text-gray-900 dark:text-gray-200 border-x-2 border-b-2 md:border-0 border-gray-200 dark:border-gray-700 pl-3 md:pl-0 py-5 md:py-0 w-full md:w-auto'>

                            <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0 dark:text-[#c6c9d8'> <NavLink to="/findJob" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden text-base mr-2' /> Find Job</NavLink> </li>
                            <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0 dark:text-[#c6c9d8'> <NavLink to="/" className={({ isActive }) => (isActive ? active : deActive)} ><AiFillHome className='md:hidden text-base mr-2 ' />Home</NavLink> </li>
                            <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0 dark:text-[#c6c9d8'> <NavLink to="/freeResource" className={({ isActive }) => (isActive ? active : deActive)} ><BsTools className='md:hidden text-base mr-2' /> Resource</NavLink> </li>
                            <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0 dark:text-[#c6c9d8'> <NavLink to="/developer" className={({ isActive }) => (isActive ? active : deActive)} > <MdDeveloperMode className='md:hidden text-base mr-2 ' /> Developer</NavLink> </li>
                            <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0 dark:text-[#c6c9d8'> <NavLink to="/contactUs" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden text-base mr-2' /> Contact US</NavLink> </li>
                            {
                                userStore?.user?.accountType === 'recruiter' &&
                                <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0 dark:text-[#c6c9d8]'> <NavLink to="/postJob" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden text-base mr-2' /> Post Job</NavLink> </li>
                            }
                            <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0 dark:text-[#c6c9d8]'> <NavLink to="/chat" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden text-base mr-2' /> Chat</NavLink> </li>

                            <li onClick={closedNavbarAll} className='mb-4 md:mb-0 dark:text-[#c6c9d8]'> <NavLink to="/aboutUs" className={({ isActive }) => (isActive ? active : deActive)} > <BsInfoCircleFill className='md:hidden text-base mr-2' /> About US</NavLink> </li>



                            {/* profile routes show only mobile and tablet  */}
                            {!user &&
                                <>
                                    <li onClick={closedNavbarAll} className='mb-4 md:mb-0 md:hidden'> <NavLink to="/login" className={({ isActive }) => (isActive ? active : deActive)} > <RiLoginBoxLine className='md:hidden text-base mr-2' />Login</NavLink> </li>

                                    <li onClick={closedNavbarAll} className='mb-4 md:mb-0 md:hidden'> <NavLink to="/register" className={({ isActive }) => (isActive ? active : deActive)} > <BsFillFileEarmarkMedicalFill className='md:hidden text-base mr-2' />Register</NavLink> </li>
                                </>

                                // <li onClick={() => handleSignOut()} className='mb-4 md:mb-0 md:hidden cursor-pointer font-semibold text-lg flex items-center xs:hidden'>  <ImExit className='md:hidden text-base mr-2' />Logout</li>
                            }


                        </ul>
                    </div>

                    {/* profile  */}
                    <div className='profile flex items-center '>

                        <ul className='flex mr-[10px]'>

                            {
                                !user ?
                                    <>
                                        <li onClick={closedNavbarAll} className='mr-4 mb-4 md:mb-0 hidden md:block'> <NavLink to="/login" className={({ isActive }) => (isActive ? active : deActive)} >Login</NavLink> </li>

                                        <li onClick={closedNavbarAll} className='mr-4 mb-4 md:mb-0 hidden md:block'> <NavLink to="/register" className={({ isActive }) => (isActive ? active : deActive)} >Register</NavLink> </li></> :

                                    // user
                                    <>
                                        {/* user photo  */}
                                        <div className='relative'>
                                            <FaHouseUser onClick={() => setUserSwitch(!userSwitch)} className='text-[#0D1425] text-2xl dark:text-[#c6c9d8] mr-3 cursor-pointer' />
                                        </div>

                                        {/* user details  */}
                                        <div className={`${userSwitch ? "top-[3.5rem]" : "top-[-30rem]"} z-20 absolute right-0 min-w-[22rem]  bg-[#F3F3F3] dark:bg-[#0C1322] text-gray-900 dark:text-gray-200 border-x-2 border-b-2 border-gray-200 dark:border-gray-700  p-5 rounded-b-xl duration-300 ease-out `}>
                                            <div className='text-center'>
                                                <h6 className='text-lg md:text-xl font-[600] mb-1 md:mb-1'>{currentUser?.username}</h6>
                                                <h6 className='text-xs md:text-base font-[500] mb-1 md:mb-1'>{currentUser?.email}</h6>
                                                <h6 className='text-xs md:text-base font-[500] mb-1 md:mb-1'>DE-4562415</h6>
                                            </div>


                                            {/* routes  */}
                                            <ul>
                                                <li onClick={closedNavbarAll} className='mb-4'> <NavLink to="/user-profile/about" className={({ isActive }) => (isActive ? active : deActive)} > <CgProfile className=' text-base md:text-xl mr-2' />Profile</NavLink> </li>
                                                <li onClick={closedNavbarAll} className='mb-4'> <NavLink to="/user-dashboard" className={({ isActive }) => (isActive ? active : deActive)} > <CgProfile className=' text-base md:text-xl mr-2' />Dashboard</NavLink> </li>
                                                <li onClick={() => handleSignOut()} className='mb-4 cursor-pointer font-semibold text-lg flex items-center'> <ImExit className=' text-base md:text-xl mr-2' />Logout</li>

                                            </ul>

                                        </div>


                                    </>
                            }
                        </ul>
                        <span onClick={() => setTheme(colorTheme)} className='mr-[10px]'>
                            {colorTheme === 'light' ?
                                <HiLightBulb className='cursor-pointer text-2xl text-yellow-400' />
                                : <MdDarkMode className='cursor-pointer text-[#0D1425] text-2xl' />
                            }
                        </span>
                    </div>

                </div>
            </div>
        </nav>

    )
};

export default Navbar;
