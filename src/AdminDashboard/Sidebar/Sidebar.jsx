import React from 'react';
import { AiFillFileText, AiOutlineHome, AiOutlineUpload } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { RiFindReplaceLine } from 'react-icons/ri';
import { FcManager } from 'react-icons/fc';

const Sidebar = ({ dashboardSwitch }) => {
  // dashboard open and closed switch
  const { dbSwitch, setDbSwitch } = dashboardSwitch;

  // dashboard link style
  const dashboardLinkStyle = `my-2 text-gray-400 hover:text-gray-50 hover:bg-[#3a3f51] flex items-center rounded-lg ${
    dbSwitch ? 'p-3 text-base ' : 'p-1 text-2xl justify-center'
  } font-semibold cursor-pointer`;

  return (
    <div className="px-2 relative">
      {/* dashboard open and closed button  */}
      <button
        onClick={() => setDbSwitch(!dbSwitch)}
        className="text-2xl text-gray-600 border-2 bg-white border-white rounded-full absolute top-2 right-[-1rem] duration-300 ease-out outline-none"
      >
        {dbSwitch ? <FaAngleLeft /> : <FaAngleRight />}
      </button>

      {/* dashboard Link */}
      <ul className="pt-9">
        <Link to="/admin">
          <li className={dashboardLinkStyle}>
            <AiOutlineHome className="mr-2" />
            <span className={`${!dbSwitch && 'hidden'}`}> Dashboard</span>
          </li>
        </Link>

        <Link to="notifications">
          <li className={dashboardLinkStyle}>
            <IoIosNotifications className="mr-2" />
            <span className={`${!dbSwitch && 'hidden'}`}> Notifications</span>
          </li>
        </Link>

        <Link to="findJob">
          <li className={dashboardLinkStyle}>
            <RiFindReplaceLine className="mr-2" />
            <span className={`${!dbSwitch && 'hidden'}`}> Find Job</span>
          </li>
        </Link>
        <Link to="postResource">
          <li className={dashboardLinkStyle}>
            <AiOutlineUpload className="mr-2" />
            <span className={`${!dbSwitch && 'hidden'}`}> Post Resource</span>
          </li>
        </Link>
        <Link to="admins">
          <li className={dashboardLinkStyle}>
            <FcManager className="mr-2" />
            <span className={`${!dbSwitch && 'hidden'}`}> Admins</span>
          </li>
        </Link>
        <Link to="postBlogs">
          <li className={dashboardLinkStyle}>
            <AiFillFileText className="mr-2" />
            <span className={`${!dbSwitch && 'hidden'}`}> Post Blogs</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
