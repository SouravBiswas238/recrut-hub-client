import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../../firebase.init";
import { serverLink } from "../../../../utilities/links";
import SpinLoading from "../../../Shared/SpinLoading/SpinLoading";

const Featured = () => {
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

  console.log(userInfo);
  return loading ? (
    <SpinLoading />
  ) : (
    <section>
      {/* section title  */}
      <h2 className="user-title">Featured</h2>

      {/* Section content */}
      <div className="px-5 pb-5">
        {userInfo?.featured.map((singleFeatured) => (
          <div className="md:flex user-card-shadow rounded-lg mb-10">
            {/* featured left  */}
            <div className="md:w-1/2 min-w-[18.7rem]">
              <img
                className="p-5 w-full h-full object-cover object-center rounded-lg overflow-hidden"
                src={singleFeatured?.featured_photo}
                alt="Featured Images"
              />
            </div>

            {/* featured right  */}
            <div className="md:w-1/2 min-w-[18.7rem] p-5">
              <h3 className="text-xl text-gray-700 font-medium text-left capitalize">
                {singleFeatured?.featured_title}
              </h3>
              <span className="inline-block text-lg text-gray-600 font-medium text-left mt-2">
                Description
              </span>
              <p className="text-justify">
                {singleFeatured?.featured_description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
