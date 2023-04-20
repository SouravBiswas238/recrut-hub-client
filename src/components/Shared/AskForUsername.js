import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import { checkTokenExpired } from './../../utilities/checkTokenExpired';
import { serverLink } from './../../utilities/links';

const AskForUsername = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [usernameAvailable, setUsernameAvailable] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleUserNameValidation = async (username) => {
    username !== '' ? (
      <>
        {setLoading(true)}
        {axios
          .post(`${serverLink}/user/check-username/${username || ''}`)
          .then((data) => {
            if (data.data.isAvailable) {
              setUsernameAvailable(true);
            } else {
              setUsernameAvailable(false);
            }
          })
          .then(function (error) {
            toast.error(error?.message);
          })}
        {setLoading(false)}
      </>
    ) : (
      setUsernameAvailable(null)
    );
  };

  const onSubmit = async (data) => {
    axios
      .post(`${serverLink}/user/username`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(function (res) {
        console.log(res);
        if (res?.data?.userInfo?.acknowledged) {
          toast.success('Username updated');
          navigate('/');
          reset({
            username: '',
          });
          setUsernameAvailable(null);
        }
      })
      .catch(function (err) {
        checkTokenExpired(err) === true && navigate('/login');
      });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="h-[100vh] ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center mt-10"
      >
        <div className="card w-1/5 bg-base-100 shadow-xl ">
          <div className="card-body">
            <div className="form-control mb-">
              <label className="label">
                <span className="label-text text-2xl">Choose a username</span>
              </label>
              <input
                onBlur={(e) => handleUserNameValidation(e.target.value)}
                onKeyUp={(e) => handleUserNameValidation(e.target.value)}
                type="text"
                placeholder="Your Name"
                className="input input-bordered text-xl lowercase"
                {...register('username', {
                  required: true,
                  default: '',
                })}
              />
              {usernameAvailable === true && (
                <p className="text-green-500">Username is available</p>
              )}
              {usernameAvailable === false && (
                <p className="text-red-500">Username is taken! Try another</p>
              )}
            </div>
            <div>
              <button className="uppercase btn btn-primary text-white text-xl w-full mt-10">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AskForUsername;
