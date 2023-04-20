import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useAuthState,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from './../../../firebase.init';
import Loading from './../../Shared/Loading';
import useToken from './../../../hooks/useToken';
import googleLogo from '../../../images/google.png';
import { UserStore } from '../../../stateManagement/UserContext/UserContextStore';
import Lottie from 'lottie-web';
import loginLottie from './login2.json';
// import { AiFillEye } from 'react-icons/ai'
import './Login.css';


const Login = () => {
  // for lottie
  const anime = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: anime.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loginLottie,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });
    // More logic goes here
  }, []);

  const [globalUser] = useAuthState(auth);
  const [passwordError, setPasswordError] = useState('');
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  let currentUser;
  let username = '';
  const currentUserinfo = useContext(UserStore)?.user;

  // React hook forms element
  // React hook forms element
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // Error State
  const navigate = useNavigate();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // globalUser is [user]= useAuthState(auth)
  const [showPassword, setShowPassword] = useState(false);
  const tokenInLStorage = localStorage.getItem('accessToken');

  if (globalUser) {
    currentUser = {
      email: globalUser?.email,
      username: username,
      accountType: tokenInLStorage,
    };
  }

  const token = useToken(currentUser);

  useEffect(() => {
    if (!globalUser && (tokenInLStorage + '').length > 4) {
      localStorage.removeItem('accessToken');
    } else {
      if ((tokenInLStorage + '').length > 4) {
        navigate(from, { replace: true } || '/');
      }
    }
  }, [
    token,
    navigate,
    globalUser,
    from,
    tokenInLStorage,
    currentUserinfo.accountType,
  ]);

  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="min-h-[100vh] py-10 dark:bg-[#0D1425] bg-[#F3F3F3]">
      <div className="conatiner container max-w-[1349px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card flex-shrink-0 w-full order-last md:order-first">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-[2.5rem] font-bold text-center text-[#0D1425] dark:text-white">
                  {' '}
                  <span className="text-[#3878DF] dark:text-[#38BDF8]">
                    Login
                  </span>{' '}
                  Here
                </h1>
                <p className="text-[#334155] dark:text-[#8C9BB6] font-semibold text-center  text-[1.25rem]">
                  Don't share your login credentials with others
                </p>
                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input-customize dark:border-[#0D1425]  
                                    dark:bg-[#1E293B] dark:text-white dark:outline-0"
                    {...register('email', { required: true })}
                  />
                  <label className="label">
                    {errors?.email?.type === 'required' && (
                      <span className="label-text-alt text-lg">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text dark:text-[#8C9BB6] text-[#334155] font-semibold">
                      Password
                    </span>
                  </label>

                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    name="password"
                    className="input-customize dark:border-[#0D1425] dark:bg-[#1E293B] dark:text-white"
                    {...register('password', {
                      required: true,
                    })}
                  ></input>

                  <div className="mt-6 flex justify-between items-center">
                    {/* <div>
                                            <label className="my-2">
                                                <Link to="/forgetPassword" className=" hover:text-primary"><span >Forgot password?</span></Link>
                                            </label>
                                        </div> */}

                    {loading ? (
                      <button
                        type="submit"
                        className=" font-bold  text-white btn-login loading uppercase dark:bg-[#0284C7] bg-[#0F172A]"
                      >
                        Login
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="bg-[#0F172A] dark:bg-[#0284C7] font-bold btn-login text-white  uppercase"
                      >
                        Login
                      </button>
                    )}
                    {/* <label className="label cursor-pointer">
                                            <span className="label-text">&nbsp; Show Password &nbsp;</span>
                                            <input onChange={() => setShowPassword(!showPassword)} type="checkbox" checked={showPassword} className="checkbox" />
                                        </label> */}

                    <div>
                      <label className="my-2">
                        <Link
                          to="/forgetPassword"
                          className=" text-[#3878DF] dark:text-[#38BDF8]"
                        >
                          <span>Forgot password?</span>
                        </Link>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Error Shows here */}
                <div>
                  {passwordError && (
                    <p className="text-red-500">{passwordError}</p>
                  )}
                  {gError && (
                    <p value={gError} className="text-red-500 font-bold">
                      {gError.message.slice(9)}
                    </p>
                  )}
                  {error && (
                    <p className="text-red-500 font-bold">
                      {error?.message?.slice(9)}
                    </p>
                  )}
                </div>
                {/* <div className="form-control mt-6">
                                    <p className={`hover:underline`}><Link to="/register">New here? Create an account</Link></p>
                                    {
                                        loading
                                            ?
                                            <button type='submit' className="btn btn-primary font-bold text-lg text-white loading uppercase">Login</button>
                                            :
                                            <button type='submit' className="btn btn-primary font-bold text-lg text-white  uppercase">Login</button>
                                    }
                                </div> */}
              </form>
              <div className="flex flex-col w-full dark:text-[#8C9BB6] border-opacity-50 mt-4">
                <div className="divider dark:text-[#8C9BB6]">OR</div>
              </div>
              <div className="form-control mt-4 ">
                <button
                  onClick={() => signInWithGoogle()}
                  className=" py-2 flex justify-center items-center input-border dark:border-0 font-semibold bg-transparent text-[#334155] dark:text-[#8C9BB6] dark:bg-[#1E293B] w-full "
                >
                  <img src={googleLogo} alt="" />
                  <span className="text-[#334155] dark:text-[#8C9BB6]  ml-2">
                    Continue With Google
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-fit mx-auto">
              <div
                className="overflow-hidden"
                style={{
                  height: '500px',
                  width: '100%',
                  overflow: 'hidden',
                  outline: 'none',
                  margin: '0 auto',
                }}
                ref={anime}
              ></div>
              ;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
