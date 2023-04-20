import { faCircle, faCircleDot, faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightBracket, faArrowUpRightSquare, faDivide, faListDots, faArrowLeft, faArrowUpRightFromSquare, faEllipsisVertical, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { formatDistanceStrict } from 'date-fns';
import { faDashcube, faLine } from '@fortawesome/free-brands-svg-icons';
import { UserStore } from '../../../stateManagement/UserContext/UserContextStore';
import { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { serverLink } from './../../../utilities/links';
import checkTokenExpired from './../../../utilities/checkTokenExpired';
import { useNavigate, useLocation } from 'react-router-dom';

const JobDetail = ({ selectedJob, setShowJobDetail }) => {
    const { recruitersName, jobTitle, companyName, companySize, vacancies, jobNature, educationalQualification, jobRequirements, tags, applicationDeadline, payRange, companyLocation, publishedDate, applicantCount, _id } = selectedJob
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const currentUser = useContext(UserStore)?.user;
    const navigate = useNavigate()
    const handleAddToWishlist = async (id) => {
        await axios.post(`${serverLink}/user/wishList`, { id }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(function (res) {
                console.log(res)
                if (res?.data?.response?.modifiedCount === 1) {
                    toast.success('Added to wishlist')
                }
                else if (res?.data?.response?.modifiedCount === 0) {
                    toast.error('Item already added!')
                }
                else {
                    console.log('ok')
                }
            }
            )
            .catch(function (err) {
                checkTokenExpired(err) === true && navigate('/login')
            })
    }
    const url = useLocation();

    const handleApplyJob = async (id) => {
        await axios.post(`${serverLink}/job/apply/${id}`, {}, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(function (res) {
                console.log(res?.data?.response)
            })
            .catch(function (err) {
                checkTokenExpired(err) === true && navigate('/login')
            })
    }
    return (
        <div className='mt-5 shadow-lg min-h-[100vh]  overflow-y-auto p-5 rounded-lg pb-10 '>
            {
                url?.pathname !== '/profile'
                    ?
                    <p onClick={() => setShowJobDetail(false)} className={`md:hidden w-full bg-primary text-white py-2 p-5 rounded-full`}><FontAwesomeIcon icon={faArrowLeft} /> Go back</p>
                    :
                    <p onClick={() => setShowJobDetail(false)} className={` w-full bg-primary text-white py-2 p-5 rounded-full cursor-pointer`}><FontAwesomeIcon icon={faClose} /> Close</p>
            }
            <div className={`flex flex-row items-center justify-between justify-items-center mt-10 px-2`}>
                <h1 className='text-3xl '>{jobTitle}</h1>
                <p><FontAwesomeIcon icon={faEllipsisVertical} className={`text-2xl`} /></p>
            </div>
            <div className='flex flex-col gap-1 mt-5'>
                {
                    companyName &&
                    <p><span className={`font-bold`}>Organization:</span> {companyName} </p>
                }
                {
                    companyLocation &&
                    <p><span className={`font-bold`}>Location:</span> {companyLocation || ""}</p>
                }
                {
                    companySize &&
                    <p><span className={`font-bold`}>Organization size:</span> {companySize} Employees</p>
                }
                {
                    recruitersName &&
                    <p><span className={`font-bold`}>Recruiter:</span> {recruitersName} </p>
                }
                {
                    publishedDate &&
                    <p><span className={`font-bold`}>Posted:</span> {formatDistanceStrict(new Date(publishedDate), new Date()) + " ago" || ""} </p>
                }
                {

                    <p><span className={`font-bold`}>Applied:</span> {applicantCount || 0} Applicants</p>
                }
                {
                    jobNature &&
                    <p><span className={`font-bold`}>Job Type:</span> {jobNature}</p>

                }
                {
                    vacancies &&
                    <p><span className={`font-bold`}>Vacancies:</span> {vacancies}</p>
                }

            </div>
            {/* Apply Job section */}
            {
                currentUser?.accountType === "developer" &&
                <div className={`mt-10 flex gap-5 flex-col md:flex-row`}>
                    <button onClick={() => handleApplyJob(_id)} className={` btn-primary text-white px-8 py-3 rounded-full`}>Apply Now &nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>

                    <button onClick={() => handleAddToWishlist(_id)} className={` btn-primary text-white px-8 py-3 rounded-full `}>Add to whishlist &nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>

                </div>

            }


            {/* Job Requirements */}
            <div>
                <p className={`underline text-xl mt-20 mb-5`}>Job Requirements</p>
                <p>{jobRequirements}</p>
            </div>

            {/* Educational Requirements */}
            <div>
                <p className={`underline text-xl mt-20 mb-5`}>Educational Qualifications</p>
                <p>{educationalQualification}</p>
            </div>

            {/* Pay Range */}
            <div>
                <p className={`underline text-xl mt-10 mb-5`}>Pay Range</p>
                <p><span className={`font-bold`}>${payRange}</span> Per Month</p>
            </div>

            {/* Pay Range */}
            <div>
                <p className={` text-xl mt-10 mb-5`}>Application Deadline:  <span className={`font-bold`}>{applicationDeadline?.deadlineDay}-{monthName[applicationDeadline?.deadlineMonth - 1]}-{applicationDeadline?.deadlineYear}</span></p>

            </div>

        </div >
    );
};

export default JobDetail;