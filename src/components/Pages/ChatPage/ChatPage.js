import React, { useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { UserStore } from '../../../stateManagement/UserContext/UserContextStore';
import Loading from '../../Shared/Loading';
import ChatContainer from './ChatContainer';
import MyChat from './MyChat';
import SingleProfile from './SingleProfile';
import { checkTokenExpired } from './../../../utilities/checkTokenExpired';
import { useNavigate } from 'react-router-dom';
import { serverLink } from './../../../utilities/links';
import axios from 'axios';

const ChatPage = () => {
    const [currentChat, setCurrentChat] = useState('');
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();
    const userStore = useContext(UserStore);
    const currentUser = userStore.user;
    const socket = io.connect(serverLink);

    useEffect(() => {
        const cleanupSocket = () => {
            socket.disconnect();
        };

        return cleanupSocket;
    }, [socket]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `${serverLink}/user/search-user?search=${search}`,
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }
            );
            setSearchResult(response?.data);
        } catch (err) {
            if (checkTokenExpired(err)) {
                navigate('/login');
            }
        }
    };

    return (
        <div>
            <div className="drawer h-[calc(100vh-110px)]">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">
                    <div className="grid lg:grid-cols-3 py-1 chat-background ]">
                        <div className="h-[calc(100vh-130px)] carousel carousel-vertical ">
                            <div className="">
                                <MyChat setCurrentChat={setCurrentChat}></MyChat>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <ChatContainer
                                currentChat={currentChat}
                                currentUser={currentUser}
                                socket={socket}
                            />
                        </div>
                    </div>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto lg:w-[30%] w-[90%] bg-base-100 text-base-content">
                        <li className="text-center p-2 font-bold">Search User</li>

                        <div className="flex items-center">
                            <input
                                type="text"
                                className="my-border p-1 mx-2 my-auto w-[70%]"
                                placeholder="name or email"
                                onChange={(event) => {
                                    setSearch(event.target.value);
                                }}
                                onKeyPress={(event) => {
                                    event.key === 'Enter' && handleSearch();
                                }}
                            />
                            <span onClick={handleSearch} className="btn-sm btn my-auto">
                                Search
                            </span>
                        </div>

                        <div>
                            {searchResult.length > 0 ? (
                                searchResult.map((chat) => (
                                    <SingleProfile
                                        key={chat?._id}
                                        setCurrentChat={setCurrentChat}
                                        chat={chat}
                                    />
                                ))
                            ) : (
                                <span>Search your Chat</span>
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
