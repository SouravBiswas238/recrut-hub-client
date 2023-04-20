import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserStore } from "../../../../stateManagement/UserContext/UserContextStore";

import { toast } from "react-toastify";
import { serverLink } from "../../../../utilities/links";

const UserDashboardSkills = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const userStore = useContext(UserStore);
  const currentUser = userStore.user;

  const onSubmit = async (formData) => {
    const skills = [
      formData?.skills1,
      formData?.skills2,
      formData?.skills3,
      formData?.skills4,
    ];

    console.log(skills);

    await axios
      .put(`${serverLink}/user/user-profile/${currentUser._id}`, {
        skills: skills,
      })
      .then((data) => {
        if (data?.data?.success) {
          toast.success("Update data successfully");
          reset();
          navigate("/user-dashboard/featured");
        }
      });
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-[32rem] mx-auto bg-[#edebeb] px-6 py-4 rounded-md mt-12">
        <h2 className="text-xl font-semibold text-[#333] py-3 text-center">
          Add Skills
        </h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full mb-3 ">
              <label
                for="skills1"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Skills
              </label>
              <div className="flex items-center justify-between">
                <input
                  {...register("skills1")}
                  type="text"
                  id="skills1"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Added your Skills"
                />
              </div>
            </div>

            <div className="w-full mb-3 ">
              <label
                for="skills2"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Skills
              </label>
              <div className="flex items-center justify-between">
                <input
                  {...register("skills2")}
                  type="text"
                  id="skills2"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Added your Skills"
                />
              </div>
            </div>

            <div className="w-full mb-3 ">
              <label
                for="skills3"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Skills
              </label>
              <div className="flex items-center justify-between">
                <input
                  {...register("skills3")}
                  type="text"
                  id="skills3"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Added your Skills"
                />
              </div>
            </div>

            <div className="w-full mb-3 ">
              <label
                for="skills4"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Skills
              </label>
              <div className="flex items-center justify-between">
                <input
                  {...register("skills4")}
                  type="text"
                  id="skills4"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Added your Skills"
                />
              </div>
            </div>

            {/* Submit button  */}
            <div className=" max-w-[30rem] mx-auto">
              <button
                type="submit"
                className="px-3 py-1 btn w-full text-lg font-medium rounded-lg outline-none duration-150 ease-in-out mt-3"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardSkills;
