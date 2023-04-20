import React from "react";
import "./Developer.css";
import { useContext } from "react";
import { UserStore } from "../../../stateManagement/UserContext/UserContextStore";

//react icon import link
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const Developer = () => {
  const { developer } = useContext(UserStore);
  const [developerData, error, loading] = developer;

  const emptyProfilePhoto =
    "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png";

  console.log(developerData);
  return (
    <div className="min-h-screen bg-[#F3F3F3] ">
      <div className="container">
        {/* section title  */}
        <h2 className="md:text-[32px] font-bold text-center text-gray-700 dark:text-[#38BDF8] mt-10 ">
          Hire the Best Web Developers
        </h2>
        <h5 className="text-[26px] font-medium text-center mt-3">
          Find the most talented web developers in <span>Recruit HUB</span>
        </h5>

        {/* Show developer box  */}
        <section className="my-12 border-t-2 dark:border-[#505050] border-gray-200">
          <div className="mt-6 card-grid ">
            {/* single card no 1  */}

            {developerData.map((singleData) => (
              <div className="w-full card-Shadow p-4 bg-[#f7f7f7] ">
                {console.log(singleData)}
                <div class="text-center">
                  {/* image Box  */}
                  <div className="flex justify-center mt-3">
                    <img
                      className="w-[6rem] h-[6rem] rounded-full border-2 border-gray-600 p-[1px]"
                      src={
                        singleData?.profilePhoto
                          ? singleData?.profilePhoto
                          : emptyProfilePhoto
                      }
                      alt="user"
                    />
                  </div>
                  <h3 className="mt-[.5rem] mb-[.1rem] text-xl font-semibold text-gray-600 dark:text-gray-300 flex justify-center items-center capitalize">
                    {singleData?.name}
                    {singleData?.assessmentTestNumber >= 80 && (
                      <MdVerified className="ml-1 text-[#0285ff] text-xl" />
                    )}
                  </h3>
                  <h6 className="text-base font-medium text-gray-500">
                    @{singleData?.username}
                  </h6>
                  <p className="capitalize">{singleData?.accountType}</p>
                  <div className="buttons">
                    <Link to={`${singleData?.email}/about`}>
                      <button className="card-button-primary">
                        View Profile
                      </button>
                    </Link>
                  </div>
                </div>

                {/* skills */}
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 mb-3">
                    Skills
                  </h6>
                  <ul className="text-base flex gap-2 flex-wrap">
                    {/* {singleData?.skills.map((singleSkills) => (
                      <li className="py-[.1rem] px-2 bg-[#0285ff23] rounded-lg mb-2">
                        {singleSkills}
                      </li>
                    ))} */}
                    <li className="py-[.1rem] px-2 bg-[#ffffff] text-black rounded-lg mb-2">
                      UI / UX
                    </li>
                    <li className="py-[.1rem] px-2 bg-[#ffffff] text-black rounded-lg mb-2">
                      Front End Development
                    </li>
                    <li className="py-[.1rem] px-2 bg-[#ffffff] text-black rounded-lg mb-2">
                      HTML
                    </li>
                    <li className="py-[.1rem] px-2 bg-[#ffffff] text-black rounded-lg mb-2">
                      CSS
                    </li>
                    <li className="py-[.1rem] px-2 bg-[#ffffff] text-black rounded-lg mb-2">
                      JavaScript
                    </li>
                    <li className="py-[.1rem] px-2 bg-[#ffffff] text-black rounded-lg mb-2">
                      React
                    </li>
                    <li className="py-[.1rem] px-2 bg-[#ffffff] text-black rounded-lg mb-2">
                      Node
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Developer;
