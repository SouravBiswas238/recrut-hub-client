import React, { useEffect, useState } from "react";

//react icons link
import { AiFillHome } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import auth from "../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import { serverLink } from "../../../../utilities/links";
import SpinLoading from "../../../Shared/SpinLoading/SpinLoading";
import { useParams } from "react-router-dom";

const About = () => {
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
    <section className="">
      {/* Basic info  */}
      <h3 className="user-title">Basic Information</h3>
      <div className="inline-block p-5">
        <p className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center cursor-pointer">
          <AiFillHome className="mr-3" />
          Live In
          <span className="font-semibold text-gray-800 capitalize ml-1">
            {userInfo?.state}
          </span>
        </p>
        <p className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center cursor-pointer">
          <MdLocationOn className="mr-3" />
          <span className="font-semibold text-gray-800 capitalize">
            {userInfo?.country}
          </span>
        </p>
        <p className=" text-lg text-gray-500 font-medium mb-3 flex justify-start items-center hover:text-blue-600 duration-100 ease-in-out cursor-pointer lowercase">
          <FaEnvelope className="mr-3" />
          {userInfo?.email}
        </p>
        <p className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center cursor-pointer">
          <FaPhoneAlt className="mr-3" />
          {userInfo?.contactsInfo?.phone}
        </p>
        <a
          href={userInfo?.socialLink?.github}
          target="_blank"
          rel="noopener noreferrer"
          className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center hover:text-blue-600 duration-100 ease-in-out cursor-pointer"
        >
          <FaGithub className="mr-3" />
          github
        </a>
        <a
          href={userInfo?.socialLink?.linkdin}
          target="_blank"
          rel="noopener noreferrer"
          className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center hover:text-blue-600 duration-100 ease-in-out cursor-pointer"
        >
          <FaLinkedinIn className="mr-3" />
          linkdin
        </a>
        <a
          href={userInfo?.socialLink?.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center hover:text-blue-600 duration-100 ease-in-out cursor-pointer"
        >
          <FaFacebook className="mr-3" />
          facebook
        </a>
        <a
          href={userInfo?.socialLink?.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center hover:text-blue-600 duration-100 ease-in-out cursor-pointer"
        >
          <FaInstagram className="mr-3" />
          insatgram
        </a>
      </div>
    </section>
  );
};

export default About;
