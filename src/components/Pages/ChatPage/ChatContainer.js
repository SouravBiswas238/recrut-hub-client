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
  // For lottie animation
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
    // More logic goes here
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: 'smooth' });
  }, [messages]);

  const asyncFetchDailyData = async () => {
    if (currentChat) {
      setMsgLoading(true);
      const response = await axios.post(`${serverLink}/messages/getmsg`, {
        from: currentUser._id,
        to: currentChat._id,
      });
      setMessages(response?.data);
      setMsgLoading(false);
    }
  };

  useEffect(() => {
    asyncFetchDailyData();
  }, []);



  const handleSendMsg = async (msg) => {
    await axios.post(`${serverLink}/messages/addmsg`, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });

    if (socket) {
      socket.emit("send-msg", {
        to: currentChat._id,
        from: currentUser._id,
        msg,
      });


      socket.on("msg-transfer", (msg) => {
        setArrivalMessage({
          fromSelf: true,
          message: msg.msg
        });
      });
      return () => {
        socket.disconnect();
      }
    }
    // if (socket) {
    //   socket.on("msg-transfer", (msg) => {
    //     setArrivalMessage({
    //       fromSelf: true,
    //       message: msg.msg
    //     });
    //   });
    //   return () => {
    //     socket.disconnect();
    //   }
    // }
    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };




  return (
    <div className="w-100">
      {currentChat && (
        <div>
          {/* chat header */}
          <div className="flex bg-sky-500 p-2 px-3 my-border rounded items-center">
            <div className="avatar">
              <div className="w-[50px] rounded-full">
                {<FaUserCircle className="text-4xl mr-2 cursor-pointer" />}
              </div>
            </div>
            <div className="text-white px-2 uppercase">
              <h3 className="lg:text-2xl text-sm">
                {currentChat?.username
                  ? currentChat.username
                  : currentChat.email}
              </h3>
            </div>
          </div>
          {msgLoading ? (
            <Loading></Loading>
          ) : (
            <>
              {/* chat body */}
              <div className="message-body overflow-x-hidden  overflow-y-auto h-[calc(100vh-280px)]">
                {messages.map((message) => {
                  return (
                    <div>
                      <div
                        className={`message ${message.fromSelf ? 'sended' : 'recieved'
                          }`}
                      >
                        <div className="content ">
                          <p>{message.message}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          <Chatinput handleSendMsg={handleSendMsg} />
        </div>
      )}

      {currentChat === '' && (
        <>
          <h2 className="text-center text-3xl my-5 font-bold">
            Select your Chat
          </h2>

          <div
            className="overflow-hidden mx-auto lg:h-[400px] lg:w-[600px] h-[200px] w-[300px]"
            // style={{ height: 400, width: 600 }}
            ref={anime}
          ></div>
        </>
      )}
    </div>
  );
};

export default ChatContainer;
