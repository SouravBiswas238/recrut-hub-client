import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const ForgetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    await sendPasswordResetEmail(data?.email);
    toast.success('Password reset email sent if email is registered!');
    reset({ email: '' });
  };

  return (
    <div className={`flex justify-center min-h-[100vh] mt-20 `}>
      <div className="min-w-96 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={`shadow-xl p-8 rounded-xl`}>
            <h1 className="text-xl">Enter Email to reset password</h1>
            <input
              type="email"
              placeholder="Enter Email"
              className="mt-5 input input-bordered text-lg w-full"
              {...register('email')}
            />
            <br />
            <div className={`mt-5`}>
              <button type="submit" className={`btn w-full`}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
