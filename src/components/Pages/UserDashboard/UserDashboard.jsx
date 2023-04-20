import React, { useContext } from "react";
import "./UserDashboard.css";
import axios from "axios";

import { BiImageAdd } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SpinLoading from "../../Shared/SpinLoading/SpinLoading";
import { useNavigate } from "react-router-dom";
import { UserStore } from "../../../stateManagement/UserContext/UserContextStore";
import { toast } from "react-toastify";
import { serverLink } from "../../../utilities/links";

const UserDashboard = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const userStore = useContext(UserStore);
  const currentUser = userStore.user;

  const [coverPhoto, setCoverPhoto] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  const [loadingCover, setLoadingCover] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(false);

  const imageBbUrl =
    "https://api.imgbb.com/1/upload?key=46aaf19b4e516e94653488331a5bff32"; //image bb post url

  // upload cover photo image bb
  const upLodeCoverPhoto = (data) => {
    setLoadingCover(true);
    const coverImg = data[0];
    const coverFormData = new FormData();
    coverFormData.append("image", coverImg);

    fetch(imageBbUrl, {
      method: "POST",
      body: coverFormData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.success) {
          setCoverPhoto(result?.data?.url);
          reset()
          setLoadingCover(false);
        }
      });
  };

  // profile photo uplode

  const upLodeProfilePhoto = (data) => {
    setLoadingProfile(true);
    const profileImg = data[0];
    const profileFormData = new FormData();
    profileFormData.append("image", profileImg);

    fetch(imageBbUrl, {
      method: "POST",
      body: profileFormData,
    })
      .then((res) => res.json())
      .then((result) => {
        setProfilePhoto(result?.data?.url);
        setLoadingProfile(false);
      });
  };

  const onSubmit = async (formData) => {
    const profileData = {
      coverPhoto,
      profilePhoto,
      name: formData?.name,
      dio: formData?.bio,
    };

    await axios
      .put(`${serverLink}/user/user-profile/${currentUser._id}`, profileData)
      .then((data) => {
        if (data?.data?.success) {
          toast.success("Update data successfuly");
          navigate("/user-dashboard/about");
        }
      });
  };

  return (
    <>
      <section className=" bg-[#ffff] dark:bg-[#0F172A]  dark:text-[#8C9BB6] py-8 relative">
        <div className="pb-1">
          {/* User Hero section  */}
          <section className="container pb-5">
            <h3 className="dark:text-[#38BDF8] text-[#3878DF] text-3xl font-semibold text-center  mb-8">
              Setup your Profile
            </h3>
            {/* user cover photo and profile photo  */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mb-6 flex flex-col gap-y-2"
            >
              <div className="w-full mb-[6rem]">
                <div className="w-full h-[15rem] md:h-[20rem] relative">
                  <div className="w-full h-full object-cover object-center border-4 border-gray-300 dark:border-gray-100 rounded-sm flex flex-col justify-center items-center">
                    <BiImageAdd className="text-[7rem]" />
                    <p className="text-2xl font-medium">Cover Photo</p>

                    <div className="flex items-center gap-2">
                      <input
                        onChange={(e) => upLodeCoverPhoto(e.target.files)}
                        type="file"
                        id="cover_photo"
                        name="cover_photo"
                        required
                        class="max-w-[30rem] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      />
                      {loadingCover && <SpinLoading />}
                    </div>
                  </div>

                  <div className="w-[10rem] h-[10rem] absolute z-20 left-[3rem] bottom-0 translate-y-2/4">
                    <div className="w-full h-full object-contain object-center overflow-hidden rounded-full border-[.3rem] border-gray-200 flex flex-col justify-center items-center bg-[#fff]">
                      <BiImageAdd className="text-[4rem]" />
                      <p>Profile Photo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* User basic information */}
              <div className="flex justify-start ">
                <div className="ml-3 text-left md:w-1/2 md:max-w-[30rem] ">
                  <div className="mb-3">
                    <label
                      for="profile_photo"
                      class="block mb-2 text-base font-medium text-gray-900 ml-1"
                    >
                      Profile Photo
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        onChange={(e) => upLodeProfilePhoto(e.target.files)}
                        type="file"
                        id="profile_photo"
                        name="profile_photo"
                        required
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      />
                      {loadingProfile && <SpinLoading />}
                    </div>
                  </div>

                  {/* fast name  */}
                  <div>
                    <label
                      for="name"
                      class="block mb-2 text-base font-medium text-gray-900 ml-1"
                    >
                      Name
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Name"
                      required
                    />
                  </div>

                  {/* Bio  */}
                  <div>
                    <label
                      for="bio"
                      class="block mb-2 text-base font-medium text-gray-900 ml-1"
                    >
                      Bio
                    </label>
                    <textarea
                      {...register("bio")}
                      rows="5"
                      name="bio"
                      id="bio"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5"
                      placeholder="Your Bio..."
                      required
                    />
                  </div>
                  {/* Submit button  */}
                  <button
                    type="submit"
                    className={`btn-primary-blue2 dark:bg-[#0284C7] rounded text-white duration-150 ease-in-out mt-3`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};

export default UserDashboard;
