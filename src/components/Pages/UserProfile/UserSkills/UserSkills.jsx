import React from "react";
import "./UserSkills.css";

import { FaHtml5 } from "react-icons/fa";
import { BiMessageSquareError } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import auth from "../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import axios from "axios";
import { serverLink } from "../../../../utilities/links";
import SpinLoading from "../../../Shared/SpinLoading/SpinLoading";

const UserSkills = () => {
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
      <h2 className="user-title">Programing Learning Skills</h2>
      <div className="px-5 pb-5">
        {/* all skills box */}
        <div>
          {userInfo?.skills.map((skill, index) => (
            <div
              key={index}
              className="max-w-[25rem] w-full px-8 py-6 user-card-shadow rounded mb-10"
            >
              <p className="text-xl font-bold text-gray-600 flex justify-start items-center">
                <FaHtml5 className="mr-2" />
                {skill}
              </p>
              {parseInt(skill?.skillTest) >= 80 ? (
                <p className="text-base font-medium text-green-600 flex justify-start items-center pt-2">
                  <BsCheckCircle className="mr-2" />
                  VERIFIED BY RECRUIT HUB
                </p>
              ) : (
                <>
                  <p className="text-base font-medium text-yellow-500 flex justify-start items-center pt-2 mb-3">
                    <BiMessageSquareError className="mr-2" /> NO VERIFIED YET
                  </p>
                  <Link
                    to="#"
                    className="px-3 py-[3px] rounded-3xl outline-none font-medium bg-yellow-500 text-white ml-3"
                  >
                    TEST NOW
                  </Link>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserSkills;
