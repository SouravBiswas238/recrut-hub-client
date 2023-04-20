import { signOut } from 'firebase/auth';
import auth from './../firebase.init';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
export const checkTokenExpired = (err) => {
    if (err?.response?.status === 403 && (localStorage.getItem('accessToken') + "".length > 4)) {
        localStorage.removeItem('accessToken')
        signOut(auth);
        toast.error("Token Expired!");
        return true;
    }
    else if (err) {
        // toast.error(err.message);
    }
    else {
        return false
    }
};

export default checkTokenExpired;