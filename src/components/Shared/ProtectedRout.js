import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { checkTokenExpired } from './../../utilities/checkTokenExpired';
import { serverLink } from './../../utilities/links';

const ProtectedRout = ({ children }) => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    if (!user) {
        return navigate('/login');
    }
    else {
        return children;
    }


};

export default ProtectedRout;