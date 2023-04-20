import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { checkTokenExpired } from './../../utilities/checkTokenExpired';
import { serverLink } from './../../utilities/links';

const RequireUsername = ({ children, prop }) => {
    const [hasUsername, setHasUsername] = useState(true);
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    useEffect(() => {

        if (user?.email) {
            axios.get(`${serverLink}/user/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            })
                .then(function (res) {
                    if (res.status === 200) {
                        if (res?.data?.userInfo[0]?.username === '') {
                            setHasUsername(false)
                        }
                    }
                    else {
                        setHasUsername(true);
                    }
                })
                .catch(function (err) {
                    checkTokenExpired(err) === true && navigate('/login')
                })
        }


    }, [user, navigate])

    if (user) {
        if (hasUsername) {
            return children
        }
        else {
            return navigate('/askUsername')
        }
    }
    else {
        return children
    }


};

export default RequireUsername;