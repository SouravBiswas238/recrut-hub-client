import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Register from './Register';
import { useNavigate } from 'react-router-dom';

const AccountTypePage = ({ type }) => {
    const [selectedOptionDev, setSelectedOptionDev] = useState('border-2');
    const [selectedOptionRecruiter, setSelectedOptionRecruiter] =
        useState('border-2');

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [errorStyle, setErrorStyle] = useState('');
    useEffect(() => {
        localStorage.setItem('accountType', '')
    }, [])


    const handleBgColor = (type) => {
        if (type === 'developer') {

            setSelectedOptionDev('bg-[#3878df] text-[#fff] dark:text-[#fff]')
            setSelectedOptionRecruiter('border-2');
            localStorage.setItem('accountType', 'developer')
            setError('');
            setErrorStyle('')
        }
        else if (type === 'recruiter') {
            setSelectedOptionDev('border-2')
            setSelectedOptionRecruiter('bg-[#3878df] text-[#fff] dark:text-[#fff]')
            localStorage.setItem('accountType', 'recruiter')
            setError('');
            setErrorStyle('')
        }

    };
    // 
    const handleNavigateLogin = () => {
        if (localStorage.getItem('accountType') !== '') {
            if (type !== 'googleSignIn') {
                navigate(`/register/${localStorage.getItem('accountType')}`);
            }
        } else {
            setError('Select an Option');
            setErrorStyle('border-2 border-red-500 p-2  rounded-lg');
        }
    };
    const handleNavigateToRegister = () => {
        if (localStorage.getItem('accountType') !== '') {
            navigate(`/register`);
        } else {
            setError('Select an Option');
            setErrorStyle('border-2 border-red-500 p-2  rounded-lg');
        }
    }

    return (
        <div className='h-[100vh] dark:bg-[#0b1120] bg-[#fff]'>
            <div className='flex justify-center   justify-items-center pt-20'>
                <div class="card  md:w-1/5 w-full dark:text-[#0b1120] my-border dark:bg-transparent bg-[#fff] shadow-xl h-fit">

                    <div class="card-body ">
                        <h2 class="card-title dark:text-[#8C9BB6] text-[#273272] text-2xl text-center font-semibold ">Are you a Developer? or Recruiter</h2>
                        <div className={`flex flex-col gap-5 mt-10 ${errorStyle}`}>
                            <div onClick={() => handleBgColor('developer')} className={`text-[#273272] dark:text-[#8C9BB6] my-border p-2 text-xl text-center rounded-lg ${selectedOptionDev} cursor-pointer`}>
                                <p>Join As a Developer</p>
                            </div>
                            <div onClick={() => handleBgColor('recruiter')} className={`text-[#273272] dark:text-[#8C9BB6] my-border p-2 rounded-lg ${selectedOptionRecruiter} text-xl text-center  cursor-pointer`}>
                                <p>Join As a Recruiter</p>
                            </div>
                            {
                                error && <p className='text-red-500 text-xl'>{error}</p>
                            }
                        </div>
                        {
                            type !== 'googleSignIn'
                                ?
                                <div className='mt-10'>
                                    <button onClick={() => handleNavigateLogin()} className=' btn-primary-blue w-full text-white'>Next <FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                                :
                                <div className='mt-10'>
                                    <button onClick={() => handleNavigateToRegister()} className=' btn-primary-blue text-white'>Next <FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </div>

    );
};

export default AccountTypePage;
