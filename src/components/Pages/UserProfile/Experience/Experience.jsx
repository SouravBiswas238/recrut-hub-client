import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../../firebase.init";
import { serverLink } from "../../../../utilities/links";
import SpinLoading from "../../../Shared/SpinLoading/SpinLoading";
import "./Experience.css";

const Experience = () => {
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
      <h2 className="user-title">Our Experience</h2>
      <div className="px-5 pb-5">
        {/* all Experience box */}
        <div>
          {userInfo?.experience.map((singleExperience, index) => (
            <div
              key={index}
              className="max-w-[25rem] w-full px-2 py-2 user-card-shadow rounded mb-10 flex justify-start gap-3 align-top"
            >
              <div>
                <img
                  className="w-12 h-12 object-cover border-2 border-gray-200"
                  src={singleExperience?.experience_photo}
                  alt="Experience Images"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium capitalize">
                  {singleExperience?.experience_title}
                </h3>
                <p className="">{singleExperience?.jobType}</p>
                <p className="">{singleExperience?.duration}</p>
                <p className="font-medium text-gray-600 mt-1">
                  Skills:{" "}
                  {singleExperience?.skills.map((skill, index) => (
                    <span key={index}> {skill}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
