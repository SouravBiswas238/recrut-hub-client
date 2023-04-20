import React from 'react';
import './Service.css'
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <div className='py-16 bg-[#f3f3f3]  dark:bg-[#0b1120]'>
            <div className='flex justify-center '>
                <div className='text-center'>
                    <h1 className='section-tittle relative text-[#061835] font-semibold inline-block dark:text-[#38BDF8] '>Service</h1>
                    <h1 className='text-[37px] md:text-[55px] leading-[45px]  md:leading-[60px] mb-[15px] font-semibold text-[#1C2880] dark:text-[#E2E8F0]'>Creative Design Solutions</h1>
                    <p className='mb-[20px] para-color text-[22px] font-semibold dark:text-[#38BDF8]'>Professional Design Agency to provide solutions</p>
                </div>
            </div>

            <div className='md:w-[80%] w-[95%] mx-auto mt-8'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                    <div className='service-item  dark:bg-[#182133] transition-all duration-500'>
                        <i className="fa-solid mb-[15px] fa-code-compare text-[75px] text-[#061835] dark:text-[#38BDF8]"></i>
                        <div>
                            <h1 className='text-[24px] heading-color font-semibold mb-[15px] dark:text-[#E2E8F0]'>Strategy</h1>
                            <ul className='text-[18px] mb-4'>
                                <li className='dark:text-[#8C9BB6] text-[#505E6B]'><Link to="/" className="fa-solid mr-[12px] fa-arrow-right dark:text-[#38BDF8]"></Link>Product Management</li>
                                <li className='dark:text-[#8C9BB6] text-[#505E6B]'><Link to="/" className="fa-solid mr-[12px] fa-arrow-right dark:text-[#38BDF8]"></Link>MVP Definition</li>
                                <li className='dark:text-[#8C9BB6] text-[#505E6B]'><Link to="/" className="fa-solid mr-[12px] fa-arrow-right dark:text-[#38BDF8]"></Link>Product Strategy</li>
                            </ul>
                            <Link to="/" className='text-[#061835] dark:text-[#38BDF8] font-bold text-[18px] underline' href="#">Read More <i className="fa-solid ml-[6px] fa-arrow-right-long"></i></Link>
                        </div>
                    </div>
                    <div className='service-item dark:bg-[#182133]  transition-all duration-500'>
                        <i className="fa-solid mb-[15px] fa-database text-[75px] text-[#061835] dark:text-[#38BDF8]"></i>
                        <div>
                            <h1 className='text-[24px] heading-color font-semibold mb-[15px] dark:text-[#E2E8F0]'>Product Design</h1>
                            <ul className='text-[18px] mb-4'>
                                <li className='dark:text-[#8C9BB6]'><i className="fa-solid mr-[12px] fa-arrow-right dark:text-[#38BDF8]"></i>Product Management</li>
                                <li className='dark:text-[#8C9BB6]'><i className="fa-solid mr-[12px] fa-arrow-right dark:text-[#38BDF8]"></i>MVP Definition</li>
                                <li className='dark:text-[#8C9BB6]'><i className="fa-solid mr-[12px] fa-arrow-right dark:text-[#38BDF8]"></i>Product Strategy</li>
                            </ul>
                            <Link to="/" className='text-[#061835] dark:text-[#38BDF8] font-bold text-[18px] underline' href="#">Read More <i className="fa-solid ml-[6px] fa-arrow-right-long"></i></Link>
                        </div>
                    </div>
                    <div className='service-item dark:bg-[#182133]  transition-all duration-500'>
                        <i className="fa-solid mb-[15px] fa-code text-[75px] text-[#061835] dark:text-[#38BDF8]"></i>
                        <div>
                            <h1 className='text-[24px] heading-color font-semibold mb-[15px] dark:text-[#E2E8F0]'>Development</h1>
                            <ul className='text-[18px] mb-4'>
                                <li className='dark:text-[#8C9BB6]'><i className="fa-solid mr-[12px] fa-arrow-right dark:text-[#38BDF8]"></i>Product Management</li>
                                <li className='dark:text-[#8C9BB6]'><i className="fa-solid mr-[12px] fa-arrow-right dark:text-[#38BDF8]"></i>MVP Definition</li>
                                <li className='dark:text-[#8C9BB6]'><i className="fa-solid mr-[12px] fa-arrow-right dark:text-[#38BDF8]"></i>Product Strategy</li>
                            </ul>
                            <Link to="/" className='text-[#061835] dark:text-[#38BDF8] font-bold text-[18px] underline' href="#">Read More <i className="fa-solid ml-[6px] fa-arrow-right-long"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;