import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const handelSubmitFrom = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zfas5t4', 'template_avdzucg', form.current, '-GadOP902CSrhXbuy')
            .then((result) => {
                console.log(result.text);
                console.log('successfull');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }
    return (


        <div className="hero min-h-screen bg-base-100 my-20">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/17y5Fxd/contact-1.jpg" className="max-w-sm w-full rounded-full shadow-2xl" alt='' />
                <div>
                    <h1 className="md:text-7xl text-3xl font-bold">Have Any on <span className='text-slate-400'>Project</span>  Mind! <span className='text-slate-400'>Contact</span>  Us</h1>
                    <p className="py-6">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem</p>

                    {/* email and phone for contact */}
                    <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2 mx-4 my-10'>
                        <div>
                            <h3 className='text-primary text-xl'>Email Us</h3>
                            <p className='text-2xl font-bold'>thecreativegang503@gmail.com</p>
                        </div>

                        <div>
                            <h3 className='text-primary text-xl'>Phone Us</h3>
                            <p className='text-2xl font-bold'>+88012 (345) 67 89</p>
                        </div>

                    </div>
                    {/* input fields */}
                    <form ref={form} onSubmit={handelSubmitFrom}>
                        <input type="text" name="user_name" placeholder="Full Name" className="input input-bordered w-full max-w-xs mb-5 md:mx-2  " />
                        <input type="text" name='user_email' placeholder="Email Address" className="input input-bordered w-full max-w-xs  " />
                        <br />
                        <textarea name='message' className="textarea textarea-bordered w-full max-w-2xl   my-5" placeholder="Write message"></textarea>
                        <br />
                        <button type="submit" className="  btn btn-primary text-white  ">Send Us Message</button>

                    </form>
                </div>
            </div>
        </div>



    )
};

export default Contact;