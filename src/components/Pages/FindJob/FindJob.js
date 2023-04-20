import React, { useState } from 'react';
import FilteringOptions from './FilteringOptions';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from '../../Shared/Loading';
import { toast } from 'react-toastify';
import SingleJobInList from './SingleJobInList';
import JobDetail from './JobDetail';
import NoResultFoundWarning from '../../Shared/WarningAndInfo/NoResultFoundWarning';
import ShowingSearchResultInfo from '../../Shared/WarningAndInfo/ShowingSearchResultInfo';
import { serverLink } from './../../../utilities/links';

const FindJob = () => {
    const [refetch, setRefetch] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState([]);
    const [filteringOn, SetfilteringOn] = useState(false);
    const [searchedResults, setSearchedResults] = useState([]);
    const [noResultFound, setNoResultFound] = useState(false);
    const [showJobDetail, setShowJobDetail] = useState(false);
    const searchElements = {
        searchText: [],
        jobNature: "",
        companySize: "",
        payRange: ""
    }
    useEffect(() => {
        axios.get(`${serverLink}/job`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(function (res) {
                console.log(res.data.jobs)
                setJobs(res?.data?.jobs)
            })
            .then(function (err) {
                toast.error(err?.message)
            })
    }, [])


    return (
        <div className='min-h-[100vh] container mx-auto mt-5 relative'>
            {/* Top section */}
            <div>
                <FilteringOptions
                    setSearchedResults={setSearchedResults}
                    searchedResults={searchedResults}
                    SetfilteringOn={SetfilteringOn}
                    setJobs={setJobs}
                    searchElements={searchElements}
                    setNoResultFound={setNoResultFound}
                />
            </div>

            <div className='grid md:grid-cols-[2fr,3fr] grid-col-1 gap-5 '>
                <div>
                    <div className='h-[100vh] overflow-y-scroll shadow-md mt-10 p-3  '>
                        {/* All jobs will be listed down below */}
                        {/* Warning section */}
                        {
                            noResultFound
                                ?
                                <div >
                                    <NoResultFoundWarning />
                                </div>
                                :
                                <div>
                                    <ShowingSearchResultInfo searchedResults={searchedResults} />
                                </div>
                        }
                        {
                            <div className={`w-full ${showJobDetail ? 'xs:hidden' : ''}`}>
                                {
                                    (!filteringOn ? jobs : searchedResults?.result || jobs).map((job, index) => <SingleJobInList
                                        index={index}
                                        key={job._id}
                                        job={job}
                                        setSelectedJob={setSelectedJob}
                                        selectedJob={selectedJob}
                                        setShowJobDetail={setShowJobDetail}
                                    ></SingleJobInList>

                                    )
                                }
                            </div>



                        }

                        {/* Job details will be shown here */}
                    </div >
                </div>
                <div className={`${showJobDetail ? 'xs:absolute top-0 bg-white block ' : 'xs:hidden'} `}>
                    {
                        selectedJob?.jobTitle &&
                        <JobDetail
                            selectedJob={selectedJob}
                            setShowJobDetail={setShowJobDetail}
                        />
                    }
                </div>
            </div >
        </div>
    );
};

export default FindJob;