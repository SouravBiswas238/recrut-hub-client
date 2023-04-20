import { signOut } from 'firebase/auth';
import auth from './../firebase.init';
import { useNavigate } from 'react-router-dom';
const useSignOutFunction = (trigarSignOut, setTrigarSignOut) => {
    const navigate = useNavigate();
    if (trigarSignOut) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate('/login');
        setTrigarSignOut(false)
        return;
    }
    else {
        return;
    }
}

export default useSignOutFunction;