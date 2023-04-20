import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';

const Footer = () => {


  return (

    <div className='bg-[#061835] dark:bg-[#0F172A] py-10'>
      <footer className="container  max-w-[1349px] mx-auto flex flex-col md:flex-row gap-20">
        <div className='md:w-[25%] w-full'>
          <Link to='/' className='text-xl font-bold'>
            <span className='ml-1 text-white'>Recruit<span className='dark:text-[#38BDF8] text-[#3878DF]'>Hub</span></span>
          </Link>
          <p className='inline-block mt-4 text-white'>Recruithub is growing hiring agency .
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sint.
            Its working all over the world . There have over 10k recruiter</p>

          <div className='flex text-white mt-4'>
            <div className='bg-[#364B60] w-[40px] h-[40px] mr-3 flex justify-center items-center'>
              <FaFacebookF className='cursor-pointer' />
            </div>
            <div className='bg-[#364B60] w-[40px] h-[40px] mr-3 flex justify-center items-center'>
              <AiOutlineTwitter className='cursor-pointer' />
            </div>
            <div className='bg-[#364B60] w-[40px] h-[40px] mr-3 flex justify-center items-center'>
              <AiOutlineInstagram className='cursor-pointer' />
            </div>
            <div className='bg-[#364B60] w-[40px] h-[40px] mr-3 flex justify-center items-center'>
              <GrLinkedinOption className='cursor-pointer' />
            </div>
          </div>
        </div>

        <div className='md:w-[75%] w-full flex flex-col md:flex-row justify-between'>
          <div className='text-white mt-2 md:mt-0'>
            <h1 className='font-semibold text-xl'>Services</h1>
            <ul className='mt-2 md:mt-4'>
              <li>Home</li>
              <li>About</li>
              <li>Developer</li>
              <li>Hire</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='text-white mt-2 md:mt-0'>
            <h1 className=" text-xl font-semibold">Useful Links</h1>
            <ul className='mt-2 md:mt-4'>
              <li>Home</li>
              <li>About</li>
              <li>Developer</li>
              <li>Hire</li>
              <li>Contact Us</li>
            </ul>

          </div>
          <div className='text-white text-[14px] mt-2 md:mt-0'>
            <h1 className=" text-xl font-semibold ">Adress</h1>
            <p className='mt-4'>101, park street  <br /> Das sps idf, <br /> uk london</p>
          </div>
        </div>

      </footer>

    </div >
  );
};

export default Footer;