import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'lottie-web';
import contactLottie from './36431-support.json';
import { ImLocation2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
const Contact = () => {


    const form = useRef();
    const handelSubmitFrom = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6mzq55e', 'template_ahh4rmj', form.current, 'G4pUWrkcEvylNHp85')
            .then((result) => {
                console.log(result.text);
                console.log('successfull');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    //lottie
    const anime = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: contactLottie,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        });
        // More logic goes here
    }, []);
    return (
        <div>
            <div class=" bg-[#f3f3f3] dark:bg-[#0b1120]">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-[80%] mx-auto bg-white dark:bg-[#0b1120]">
                    <div>

                        <form ref={form} onSubmit={handelSubmitFrom}>
                            <div class="card-body w-full">
                                <div>
                                    <h1 className="text-[#1C2880] dark:text-[#E2E8F0] text-[2rem] md:text-[2rem] leading-[3.2rem]  font-semibold mb-2">Get In Touch </h1>
                                    <p className='mb-[20px] para-color text-[17px] font-semibold dark:text-[#38BDF8]'>Where are you from ? how can we help you ?</p>
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">Name</span>
                                    </label>
                                    <input type="text" name="user_name" placeholder="Your name" class="input-customize dark:border-[#0D1425] dark:bg-[#1E293B] dark:text-white" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">Email</span>
                                    </label>
                                    <input type="email" name='user_email' placeholder="Your email" class="input-customize dark:border-[#0D1425] dark:bg-[#1E293B] dark:text-white" required />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">Subject</span>
                                    </label>
                                    <input type="text" name='user_subject' placeholder="Subject" class="input-customize dark:border-[#0D1425] dark:bg-[#1E293B] dark:text-white" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">Message</span>
                                    </label>
                                    <textarea name='message' placeholder="Your message...." class="input-customize-textarea dark:border-[#0D1425] dark:bg-[#1E293B] dark:text-white " />
                                </div>
                                <div class="form-control mt-6">
                                    <button className=" font-bold  text-white btn-login loading uppercase dark:bg-[#0284C7] bg-[#0F172A]"
                                    ><input type="submit" value='Send' /></button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div>
                        <div className='md:flex justify-center items-center hidden'>
                            <div className='w-fit mx-auto'>
                                <div className="overflow-hidden" style={{ "height": "400px", "width": "100%", "overflow": "hidden", "outline": "none", "margin": "0 auto" }} ref={anime}>
                                </div>;
                            </div>
                        </div>
                        <ul>
                            <li className='flex items-center mb-8  para-color text-[17px] font-semibold dark:text-[#38BDF8]'>


                                <div className='w-[40px] h-[40px]  mr-3 rounded-full flex justify-center items-center border border-indigo-600'>
                                    <ImLocation2 className='text-xl dark:text-[#38BDF8] text-[#0F172A]' />
                                </div>
                                502 Washington Aveneo</li>


                            <li className='flex items-center mb-8  para-color text-[17px] font-semibold dark:text-[#38BDF8]'>
                                <div className='w-[40px] h-[40px]  mr-3 rounded-full flex justify-center items-center border border-indigo-600'>
                                    <MdEmail className='text-xl text-[#0F172A] dark:text-[#38BDF8] ' />
                                </div>

                                thecreativeganag@gmail.com</li>

                            <li className='flex items-center mb-8 para-color text-[17px] font-semibold dark:text-[#38BDF8] text-[#38BDF8] '>
                                <div className='w-[40px] h-[40px]  mr-3 rounded-full flex justify-center items-center border border-indigo-600'>
                                    <FaPhoneAlt className='text-xl text-[#0F172A] dark:text-[#38BDF8]' />

                                </div>

                                +88018907908390</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;