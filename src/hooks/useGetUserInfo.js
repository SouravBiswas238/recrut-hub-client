import React, { useContext } from 'react';
import { UserStore } from '../stateManagement/UserContext/UserContextStore';

const useGetUserInfo = () => {
    const currentUser = useContext(UserStore);

    return currentUser


};

export default useGetUserInfo;