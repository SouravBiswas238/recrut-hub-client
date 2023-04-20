import React from 'react';
import { AiFillCode, AiFillFileText, AiOutlineConsoleSql, AiOutlinePicture, AiOutlineProfile, AiTwotoneEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';

const UserDashboardSidebar = ({ dashboardSwitch }) => {
    // dashboard open and closed switch
    const { dbSwitch, setDbSwitch } = dashboardSwitch;

    // dashboard link style
    const dashboardLinkStyle = `my-2 text-gray-400 hover:text-gray-50 hover:bg-[#3a3f51] flex items-center rounded-lg ${dbSwitch ? 'p-3 text-base ' : 'p-1 text-2xl justify-center'
        } font-semibold cursor-pointer`;

    return (
        <div className="px-2 relative ">
            {/* dashboard open and closed button  */}
            <button
                onClick={() => setDbSwitch(!dbSwitch)}
                className="text-2xl  bg-[#0F172A]  dark:bg-[#f3f3f3] dark:text-[#1C2880] text-[#E2E8F0] rounded-full absolute top-2 right-[-1rem] duration-300 ease-out outline-none"
            >
                {dbSwitch ? <FaAngleLeft /> : <FaAngleRight />}
            </button>

            {/* dashboard Link */}
            <ul className="pt-9 text-[#1C2880] dark:text-[#E2E8F0]">
                <Link to="profile">
                    <li className={dashboardLinkStyle}>
                        <FcAbout className="mr-2" />
                        <span className={`${!dbSwitch && 'hidden'}`}> Profile</span>
                    </li>
                </Link>
                <Link to="about">
                    <li className={dashboardLinkStyle}>
                        <AiOutlineProfile className="mr-2" />
                        <span className={`${!dbSwitch && 'hidden'}`}> About</span>
                    </li>
                </Link>

                <Link to="skills">
                    <li className={dashboardLinkStyle}>
                        <AiFillCode className="mr-2" />
                        <span className={`${!dbSwitch && 'hidden'}`}> Skills</span>
                    </li>
                </Link>
                <Link to="featured">
                    <li className={dashboardLinkStyle}>
                        <AiOutlinePicture className="mr-2" />
                        <span className={`${!dbSwitch && 'hidden'}`}>Featured</span>
                    </li>
                </Link>
                <Link to="experience">
                    <li className={dashboardLinkStyle}>
                        <AiOutlineConsoleSql className="mr-2" />
                        <span className={`${!dbSwitch && 'hidden'}`}>Add Experience</span>
                    </li>
                </Link>
                <Link to="courses">
                    <li className={dashboardLinkStyle}>
                        <AiTwotoneEdit className="mr-2" />
                        <span className={`${!dbSwitch && 'hidden'}`}>Add Courses</span>
                    </li>
                </Link>
                <Link to="projects">
                    <li className={dashboardLinkStyle}>
                        <AiFillFileText className="mr-2" />
                        <span className={`${!dbSwitch && 'hidden'}`}> Add Projects</span>
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default UserDashboardSidebar;
