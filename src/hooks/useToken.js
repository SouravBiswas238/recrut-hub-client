import axios from "axios"
import { useState, useEffect } from 'react';
import { serverLink } from './../utilities/links';
const useToken = async (currentUser) => {
    const [token, setToken] = useState('');
    const user = {
        email: currentUser?.email,
        username: currentUser?.username,
        accountType: 'recruiter'
    };
    useEffect(() => {
        if (user.email) {
            const targetUrl = `${serverLink}/user/create`
            axios.post(targetUrl, user)
                .then(function (res) {
                    setToken(res?.data?.accessToken);
                    localStorage.setItem('accessToken', res?.data?.accessToken);
                    localStorage.removeItem('accountType')
                })
                .catch(function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
        }
    }, [user.email])
    return [token];
}

export default useToken;