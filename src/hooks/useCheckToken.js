import { signOut } from 'firebase/auth';
import auth from './../firebase.init';
import useNavigate from 'react-router-dom';
export const useCheckTokenExpired = (err) => {
    const navigate = useNavigate()
    if (err?.data?.response?.status === 403) {
        localStorage.removeItem('accessToken')
        signOut(auth);
        navigate('/login')
    }
    return 0;
};
