import React, { useContext } from 'react';
import SingleProfile from './SingleProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../Shared/Loading';
import { FaUserCircle } from 'react-icons/fa';
import { UserStore } from '../../../stateManagement/UserContext/UserContextStore';

const MyChat = ({ setCurrentChat }) => {
  const userStore = useContext(UserStore);

  const { user, allUser, allAdmin } = userStore;

  return (
    <div className="lg:mx-2 pt-2">
      {/* My chat header start*/}

      <div className="flex justify-between  my-border rounded">
        <h2 className="text-3xl lg:px-2 mt-1 font-bold ">My Chats</h2>
        <div className="drawer-content text-right text-black">
          <label
            for="my-drawer"
            className="m-2 btn-sm btn my-border hover:bg-sky-400  bg-sky-500 text-white"
          >
            <FontAwesomeIcon icon={faSearch} />{' '}
            <span className=" px-2"> Search Chat</span>
          </label>
        </div>
      </div>
      <div className="bg-sky-500 rounded p-2 my-2 text-white flex items-center justify-between">
        <h2 className="px-3 text-2xl">
          User Name: {user?.username ? user?.username : user?.email}
        </h2>
        <div className="avatar">
          <div className="w-[50px] rounded-full">
            <FaUserCircle className="text-4xl mr-2 cursor-pointer" />
          </div>
        </div>
      </div>
      {/*My chat header end*/}

      {/* admin chat list start*/}
      <div className="collapse collapse-arrow  my-border">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-primary font-2xl">Admins</div>
        <div className="collapse-content px-1 peer-checked:bg-sky-200">
          <div className="overflow-x-hidden   overflow-y-auto ">
            {allAdmin && allAdmin ? (
              allAdmin?.map((chat) => (
                <SingleProfile
                  key={chat?._id}
                  setCurrentChat={setCurrentChat}
                  chat={chat}
                />
              ))
            ) : (
              <Loading></Loading>
            )}
          </div>
        </div>
      </div>

      {/* admin chat list end*/}

      {/* useer */}
      <div className="overflow-x-hidden  overflow-y-auto ">
        {allUser && allUser ? (
          allUser?.map((chat) => (
            <SingleProfile
              key={chat?._id}
              setCurrentChat={setCurrentChat}
              chat={chat}
            />
          ))
        ) : (
          <Loading></Loading>
        )}
      </div>
    </div>
  );
};

export default MyChat;
