import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SpinLoading from "../../../Shared/SpinLoading/SpinLoading";
import { UserStore } from "../../../../stateManagement/UserContext/UserContextStore";
import { toast } from "react-toastify";
import { serverLink } from "../../../../utilities/links";

const UserDashboardProjects = () => {
  const { register, handleSubmit, reset } = useForm();

  const [projectsPhoto, setProjectsPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  const userStore = useContext(UserStore);
  const currentUser = userStore.user;
  const navigate = useNavigate();

  //image bb post url
  const imageBbUrl =
    "https://api.imgbb.com/1/upload?key=46aaf19b4e516e94653488331a5bff32";

  // upload featured photo image bb
  const upLodeProjectsPhoto = (data) => {
    setLoading(true);
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
          setProjectsPhoto(result?.data?.url);
          setLoading(false);
        }
      });
  };

  const onSubmit = async (formData) => {
    console.log(formData);

    const projectsData = {
      projects: [
        {
          project_photo: projectsPhoto,
          project_title: formData?.project_title,
          project_description: formData?.project_description,
          projectsLink: {
            client_link: formData?.client_link,
            live_link: formData?.live_link,
            server_link: formData?.server_link,
          },
        },
      ],
    };

    // put data server
    await axios
      .put(`${serverLink}/user/user-profile/${currentUser._id}`, projectsData)
      .then((data) => {
        if (data?.data?.success) {
          toast.success("Update data successfully");
          reset();
          navigate("/user-dashboard/courses");
        }
      });
  };
  return (
    <div className="min-h-screen ">
      <div className="max-w-[32rem] mx-auto bg-[#edebeb] px-6 py-4 rounded-md mt-12">
        <h2 className="text-xl font-semibold text-[#333] py-3 text-center">
          Add Projects
        </h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="w-full mb-3 ">
                <label
                  for="project_photo"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  Project Photo<span className="text-red-600 ml-[1px]">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    onChange={(e) => upLodeProjectsPhoto(e.target.files)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="file"
                    name="project_photo"
                    id="project_photo"
                  />
                  {loading && <SpinLoading />}
                </div>
              </div>

              <div className="w-full mb-3 ">
                <label
                  for="project_title"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  Project Title<span className="text-red-600 ml-[1px]">*</span>
                </label>
                <input
                  {...register("project_title")}
                  type="text"
                  id="project_title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Project Title"
                  required
                />
              </div>

              <div className="w-full mb-3 ">
                <label
                  for="live_link"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  Live Site Link<span className="text-red-600 ml-[1px]">*</span>
                </label>
                <input
                  {...register("live_link")}
                  type="text"
                  id="live_link"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Live Site link "
                  required
                />
              </div>

              <div className="w-full mb-3 ">
                <label
                  for="client_link"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  GitHub client Link
                </label>
                <input
                  {...register("client_link")}
                  type="text"
                  id="client_link"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="GitHub client Link"
                />
              </div>

              <div className="w-full mb-3 ">
                <label
                  for="server_link"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  GitHub Server Link
                </label>
                <input
                  {...register("server_link")}
                  type="text"
                  id="server_link"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="GitHub Server Link"
                />
              </div>
            </div>

            <div className="w-full mb-3 ">
              <label
                for="project_description"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Project Description
                <span className="text-red-600 ml-[1px]">*</span>
              </label>
              <textarea
                {...register("project_description")}
                rows="5"
                id="project_description"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Project Description"
                required
              />
            </div>

            {/* Submit button  */}
            <div className=" max-w-[30rem] mx-auto">
              <button
                type="submit"
                className="px-3 py-1 btn w-full text-lg font-medium rounded-lg outline-none duration-150 ease-in-out mt-3"
              >
                Done
              </button>
            </div>
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default UserDashboardProjects;
