import React from "react";

import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import auth from "../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import axios from "axios";
import { serverLink } from "../../../../utilities/links";
import SpinLoading from "../../../Shared/SpinLoading/SpinLoading";
import { useParams } from "react-router-dom";

const Projects = () => {
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
      <h2 className="user-title">Our Bests Projects</h2>

      {/* Section content */}
      <div className="px-5 pb-5">
        {userInfo?.projects.map((project, index) => (
          <div
            key={index}
            className="md:flex user-card-shadow rounded-lg mb-10"
          >
            {/* Projects left  */}
            <div className="md:w-1/2 min-w-[18.7rem]">
              <img
                className="p-5 w-full h-full object-cover object-center rounded-lg overflow-hidden"
                src={project?.project_photo}
                alt="Projects Images"
              />
            </div>

            {/* Projects right  */}
            <div className="md:w-1/2 min-w-[18.7rem] p-5">
              <h3 className="text-xl text-gray-700 font-medium text-left capitalize">
                {project?.project_title}
              </h3>
              <span className="inline-block text-lg text-gray-600 font-medium text-left mt-2">
                Description
              </span>
              <p className="text-justify">{project?.project_description}</p>
              {/* Projects link  */}
              <ul className="flex items-center justify-start mt-6">
                <a
                  href={project?.projectsLink?.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center justify-start text-lg text-blue-600 hover:text-gray-700 duration-150 ease-in-out mr-8">
                    <TbWorld className="mr-1" />
                    Live Site
                  </li>
                </a>

                <a
                  href={project?.projectsLink?.client_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center justify-start text-lg text-blue-600 hover:text-gray-700 duration-150 ease-in-out mr-8">
                    <FaGithub className="mr-1" />
                    Client Site
                  </li>
                </a>
                <a
                  href={project?.projectsLink?.server_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center justify-start text-lg text-blue-600 hover:text-gray-700 duration-150 ease-in-out mr-8">
                    <FaGithub className="mr-1" />
                    Server Site
                  </li>
                </a>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
