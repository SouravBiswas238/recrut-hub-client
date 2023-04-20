import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { UserStore } from '../../../stateManagement/UserContext/UserContextStore';
import { serverLink } from '../../../utilities/links';
import Loading from '../../Shared/Loading';
import SingleChatModal from './SingleChatModal';

const SingleProfile = ({ chat, setCurrentChat }) => {
  const [chatModalId, setChatModalId] = useState('');

  const [lastMessage, setLastMessage] = useState([]);

  const userStore = useContext(UserStore);
  const currentUser = userStore.user;

  let emailLength = chat.email.slice(0, 15);

  const singleUserSelect = (chat) => {
    if (!chat.email) {
      return <Loading></Loading>;
    }
    setCurrentChat(chat);
    setChatModalId(chat);
  };

  // fetch for last message
  const asyncFetchDailyData = async () => {
    if (chat) {
      const response = await axios.post(`${serverLink}/messages/getmsg`, {
        from: currentUser._id,
        to: chat._id,
      });
      setLastMessage(response.data);
    }
  };
  useEffect(() => {
    asyncFetchDailyData();
  }, []);

  let lastOne = lastMessage?.slice(-1);
  let lastMsg = lastOne[0]?.message;
  let lastMsgLength = lastMsg?.slice(0, 15);

  return (
    <div for="my-modal-3" className=" ">
      <div className="my-2 flex justify-between rounded my-border bg-sky-50 hover:bg-sky-100">
        <div className="flex justify-start">
          <div className="avatar p-2">
            <div className="w-[50px] rounded-full">
              {/* <img src="https://placeimg.com/192/192/people" alt="Tailwind-CSS-Avatar-component" /> */}
              <FaUserCircle className="text-4xl mr-2 cursor-pointer" />
            </div>
          </div>
          <div className="mx-2 my-auto">
            <h2 className="py-0">
              {' '}
              {emailLength} {chat.email.length > 15 ? '...' : ''}
            </h2>
            <p className="font-bold text-sm">
              {chat?.username ? chat?.username : 'UserName'} :
              <span className="font-normal">
                {' '}
                {lastMsgLength}
                {lastMsg?.length > 15 ? '.....' : ''}
              </span>{' '}
            </p>
          </div>
        </div>

        <div className="lg:mx-2 my-auto">
          {/* <label for="my-modal-3" className=" btn btn-sm btn-primary modal-button"> Add </label> */}
          <label
            onClick={() => singleUserSelect(chat)}
            className="focus:outline-none btn btn-sm text-white border-0 bg-sky-500 hover:bg-sky-400 outline-none modal-button"
          >
            {' '}
            Message{' '}
          </label>
        </div>
      </div>

      {/* modal for join chat start*/}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <SingleChatModal key={chat._id} chat={chat}></SingleChatModal>
        </div>
      </div>
      {/* modal for join chat end*/}
    </div>
  );
};

export default SingleProfile;
