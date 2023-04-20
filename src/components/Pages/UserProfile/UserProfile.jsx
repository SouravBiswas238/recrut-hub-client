import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Outlet,
  NavLink,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
import auth from "../../../firebase.init";
import { serverLink } from "../../../utilities/links";
import SpinLoading from "../../Shared/SpinLoading/SpinLoading";
import "./UserProfile.css";

const UserProfile = () => {
  const [userInfo, serUserInfo] = useState({});
  const [loading, serLoading] = useState(true);

  const [user] = useAuthState(auth);
  const userEmail = user?.email;
  const { email } = useParams();

  useEffect(() => {
    axios
      .get(`${serverLink}/user/email/${email || userEmail}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        if (res?.data) {
          serUserInfo(res?.data);
          serLoading(false);
        }
      });
  }, [email ? email : userEmail]);

  const emptyCoverPhoto =
    "https://frg.berkeley.edu/wp-content/plugins/content-cards/skins/default/content-cards-placeholder.png";
  const emptyProfilePhoto =
    "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png";

  return loading ? (
    <SpinLoading />
  ) : (
    <section>
      <div className=" bg-white">
        <div className="user-profile-shadow pb-1">
          {/* User Hero section  */}
          <section className="container border-b-2 border-gray-200 pb-5">
            {/* user cover photo and profile photo  */}
            <div className="w-full mb-[6rem]">
              <div className="w-full h-[15rem] md:h-[20rem] relative">
                <img
                  className="w-full h-full object-cover object-center"
                  src={
                    userInfo?.coverPhoto
                      ? userInfo?.coverPhoto
                      : emptyCoverPhoto
                  }
                  alt="User-cover-images"
                />
                <div className="w-[10rem] h-[10rem] absolute left-[3rem] bottom-0 translate-y-2/4">
                  <img
                    className="w-full h-full object-contain object-center overflow-hidden rounded-full border-[.3rem] border-gray-200 bg-white dark:bg-black"
                    src={
                      userInfo?.profilePhoto
                        ? userInfo?.profilePhoto
                        : emptyProfilePhoto
                    }
                    alt="User-profile-images"
                  />
                </div>
              </div>
            </div>

            {/* User basic information */}
            <div className="flex justify-between ">
              <div className="ml-3 text-left md:w-1/2 md:max-w-[30rem] ">
                <h2 className="text-3xl font-[700] text-[#050505] uppercase font-segoeUi">
                  {userInfo?.name}
                </h2>

                <p className="w-full text-base md:text-lg font-normal mt-3 ">
                  {userInfo?.bio}
                </p>
                <p className="w-full text-base md:text-lg font-normal text-gray-500 mt-3 capitalize ">
                  {userInfo?.state + ", " + userInfo?.country}
                </p>
              </div>
              <div className="mr-10">
                {email ? (
                  <Link
                    to="/chat"
                    className="px-5 py-2 rounded-3xl outline-none font-bold bg-[#287eff] text-white ml-3"
                  >
                    Message
                  </Link>
                ) : (
                  <Link
                    to="/user-dashboard"
                    className="px-5 py-2 rounded-3xl outline-none font-bold bg-[#3a4d6a] text-white ml-3"
                  >
                    Edit
                  </Link>
                )}
              </div>
            </div>
          </section>
          {/* Nested Routes menu */}
          <div className="container">
            <div className="py-2 ">
              <ul className="flex">
                <NavLink
                  to={
                    email
                      ? `/developer/${email}/profile`
                      : `/user-profile/about`
                  }
                  className={({ isActive }) =>
                    isActive && "border-b-2 border-blue-600"
                  }
                >
                  <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                    About
                  </li>
                </NavLink>
                <NavLink
                  to={
                    email
                      ? `/developer/${email}/skills`
                      : `/user-profile/skills`
                  }
                  className={({ isActive }) =>
                    isActive && "border-b-2 border-blue-600"
                  }
                >
                  <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                    Skills
                  </li>
                </NavLink>

                <NavLink
                  to={
                    email
                      ? `/developer/${email}/featured`
                      : `/user-profile/featured`
                  }
                  className={({ isActive }) =>
                    isActive && "border-b-2 border-blue-600"
                  }
                >
                  <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                    Featured
                  </li>
                </NavLink>

                <NavLink
                  to={
                    email
                      ? `/developer/${email}/experience`
                      : `/user-profile/experience`
                  }
                  className={({ isActive }) =>
                    isActive && "border-b-2 border-blue-600"
                  }
                >
                  <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                    Experience
                  </li>
                </NavLink>

                <NavLink
                  to={
                    email
                      ? `/developer/${email}/courses`
                      : `/user-profile/courses`
                  }
                  className={({ isActive }) =>
                    isActive && "border-b-2 border-blue-600"
                  }
                >
                  <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                    Courses
                  </li>
                </NavLink>

                <NavLink
                  to={
                    email
                      ? `/developer/${email}/projects`
                      : `/user-profile/projects`
                  }
                  className={({ isActive }) =>
                    isActive && "border-b-2 border-blue-600"
                  }
                >
                  <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                    Projects
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#F0F2F5] pt-6">
        <div className="container">
          <div className="bg-white rounded-lg">
            <Outlet />
          </div>
        </div>
      </section>
    </section>
  );
};

export default UserProfile;
