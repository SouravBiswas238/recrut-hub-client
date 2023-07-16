import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chatinput from './Chatinput';
import { FaUserCircle } from 'react-icons/fa';
import { serverLink } from './../../../utilities/links';
import Lottie from 'lottie-web';
import lottieData from './27649-lets-chat.json';
import Loading from '../../Shared/Loading';

const ChatContainer = ({ currentChat, currentUser, socket }) => {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [msgLoading, setMsgLoading] = useState(false);
  const scrollRef = useRef();
  const anime = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: anime.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: lottieData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const asyncFetchDailyData = async () => {
    if (currentChat) {
      setMsgLoading(true);
      try {
        const response = await axios.post(`${serverLink}/messages/getmsg`, {
          from: currentUser._id,
          to: currentChat._id,
        });
        setMessages(response?.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setMsgLoading(false);
      }
    }
  };

  useEffect(() => {
    asyncFetchDailyData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('msg-transfer', (msg) => {
        setArrivalMessage({
          fromSelf: true,
          message: msg.msg,
        });
      });
      return () => {
        socket.off('msg-transfer');
      };
    }
  }, [socket]);

  const handleSendMsg = async (msg) => {
    try {
      await axios.post(`${serverLink}/messages/addmsg`, {
        from: currentUser._id,
        to: currentChat._id,
        message: msg,
      });

      if (socket) {
        socket.emit('send-msg', {
          to: currentChat._id,
          from: currentUser._id,
          msg,
        });
      }

      const updatedMessages = [...messages, { fromSelf: true, message: msg }];
      setMessages(updatedMessages);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="w-100">
      {currentChat && (
        <div>
          <div className="flex bg-sky-500 p-2 px-3 my-border rounded items-center">
            <div className="avatar">
              <div className="w-[50px] rounded-full">
                <FaUserCircle className="text-4xl mr-2 cursor-pointer" />
              </div>
            </div>
            <div className="text-white px-2 uppercase">
              <h3 className="lg:text-2xl text-sm">
                {currentChat?.username || currentChat.email}
              </h3>
            </div>
          </div>
          {msgLoading ? (
            <Loading />
          ) : (
            <>
              <div className="message-body overflow-x-hidden  overflow-y-auto h-[calc(100vh-280px)]">
                {messages?.map((message, index) => (
                  <div key={index}>
                    <div
                      className={`message ${message?.fromSelf ? 'sended' : 'recieved'
                        }`}
                    >
                      <div className="content">
                        <p>{message.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={scrollRef} />
              </div>
            </>
          )}
          <Chatinput handleSendMsg={handleSendMsg} />
        </div>
      )}
      {!currentChat && (
        <>
          <h2 className="text-center text-3xl my-5 font-bold">
            Select your Chat
          </h2>
          <div
            className="overflow-hidden mx-auto lg:h-[400px] lg:w-[600px] h-[200px] w-[300px]"
            ref={anime}
          ></div>
        </>
      )}
    </div>
  );
};

export default ChatContainer;
