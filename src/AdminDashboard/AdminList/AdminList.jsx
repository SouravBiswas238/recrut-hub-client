import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { serverLink } from '../../utilities/links';
import AdminRow from './AdminRow';

const AdminList = () => {
  const [developers, setDevelopers] = useState([]);

  const getAllDevelopers = () =>
    axios
      .get(`${serverLink}/user/developer`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(({ data }) => {
        setDevelopers(data);
      });

  useEffect(() => {
    getAllDevelopers();
  }, []);

  return (
    <div className="min-h-screen bg-sky-100">
      <h2 className="my-3 md:my-7 text-center font-semibold text-3xl md:text-5xl text-black">
        Managers
      </h2>

      <div className="overflow-x-auto mx-3 md:mx-7">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Admin Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {developers.map((dev, i) => (
              <AdminRow key={dev._id} i={i} dev={dev} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminList;
