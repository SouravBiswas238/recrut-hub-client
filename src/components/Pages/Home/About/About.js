import React from 'react';
import aboutimg from '../../../../images/about-1.jpg';
import './About.css'
const About = () => {
    return (
        <div className=' py-[10rem] bg-[#ffff] dark:bg-[#0F172A]'>
            <div className='w-[85%] mx-auto'>
                <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
                    <div className='flex justify-center'>
                        <img className='about-img' src={aboutimg} alt="" />
                    </div>
                    <div className='mt-[3rem] md:m-0'>
                        <h1 className='section-tittle relative color-blue-dark font-semibold inline-block dark:text-[#38BDF8]'>About Us</h1>
                        <h1 className='text-[37px] md:text-[55px] leading-[45px]  md:leading-[60px] mb-[15px] font-semibold text-[#1C2880] dark:text-[#E2E8F0]'>We’re Hiring Agency Since 2020</h1>
                        <p className='text-[22px] font-semibold mb-[20px] text-[#3878DF] dark:text-[#38BDF8]'>Hire The Best developer all over the world</p>
                        <p className='mb-[20px] para-color text-[18px] dark:text-[#8C9BB6]'>On the other hand denounce with righteous
                            and dislike men who beguile and demoralizes
                            by the charms of pleasure thes moment, so blinded by
                            desire that they cannot</p>

                        <ul className='heading-color font-semibold text-[20px]'>
                            <li className='mb-[15px] dark:text-[#8C9BB6]'><i className="fa-solid mr-[12px] text-[22px] fa-circle-check color-blue-dark dark:text-[#38BDF8]"></i>Digital Creative Agency</li>
                            <li className='mb-[15px] dark:text-[#8C9BB6]'><i className="fa-solid mr-[12px] text-[22px] fa-circle-check color-blue-dark dark:text-[#38BDF8]"></i>Professional Problem Solutions</li>
                            <li className='mb-[15px] dark:text-[#8C9BB6]'><i className="fa-solid mr-[12px] text-[22px] fa-circle-check color-blue-dark dark:text-[#38BDF8]"></i>Web Design & Development</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;