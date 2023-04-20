import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { UserStore } from '../../stateManagement/UserContext/UserContextStore';
import { serverLink } from '../../utilities/links';

const PostBlogs = () => {
  const userStore = useContext(UserStore);
  const currentUser = userStore.user;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    await axios
      .post(`${serverLink}/blogs/post`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(function (res) {
        if (res?.data?.updateCount === '1') {
          toast.success('Post database successfully');
        } else {
          console.log('Failed to post data');
        }
      });

    e.target.reset();
  };

  return (
    <div>
      <div className="min-h-screen bg-sky-100">
        <div className="lg:w-[40%]  mx-auto flex-col lg:flex-row-reverse">
          <div className="text-center py-3 lg:py-6">
            <h1 className="text-5xl font-bold">Post a blog!</h1>
          </div>
          <div className="card w-[100%] shadow-2xl bg-base-100">
            <div className="card-body w-[100%]">
              {/* post review form start here */}
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Your Email</span>
                  </label>

                  <input
                    type="text"
                    placeholder={currentUser?.email}
                    className="input input-bordered  font-bold"
                    disabled
                    {...register('email')}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Blog Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter title"
                    className="input input-bordered"
                    {...register('title', { required: true })}
                  />

                  {errors.link && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Subject</span>
                  </label>
                  <textarea
                    placeholder="Enter Subject"
                    className="input input-bordered"
                    {...register('subject', { required: true })}
                  />

                  {errors.subject && (
                    <span className="text-red-500">
                      Please provide subject, it is required
                    </span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sky-500 "
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBlogs;
