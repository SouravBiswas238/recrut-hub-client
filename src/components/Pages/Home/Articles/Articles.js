import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { serverLink } from '../../../../utilities/links';
import SingleArticle from './SingleArticle';

const Articles = () => {
  const [blogs, setBlogs] = useState([]);
  // fetch blogs
  const fetchBlogs = async () => {
    await axios
      .get(`${serverLink}/blogs`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(function (res) {
        setBlogs(res?.data);
      });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className='py-16 bg-[#f3f3f3] dark:bg-[#0b1120]'>
      <div>
        <div className="text-center">
          <h1 className="text-xl text-primary my-10">Articles News</h1>
          <h1 className=" text-5xl">Latest News & Blogs</h1>
          <p className="my-10 text-2xl text-gray-400">
            Professional Recruit Agency to provide solutions
          </p>
        </div>

        <div className="carousel carousel-center">
          {blogs &&
            blogs?.map((blog) => (
              <SingleArticle key={blog._id} blog={blog}></SingleArticle>
            ))}
        </div>

        <div className="flex lg:justify-between justify-center my-0 mx-5">
          <div className="lg:mx-0 mx-1">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
          </div>
          <div>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
