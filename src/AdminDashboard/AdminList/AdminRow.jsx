import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { serverLink } from '../../utilities/links';

const AdminRow = ({ dev, i }) => {
  const [developer, setDeveloper] = useState(dev);
  const [loading, setLoading] = useState(false);
  const { _id, username, email, accountType, isAdmin } = developer;

  const makeAdmin = async () => {
    setLoading(true);
    await axios
      .put(`${serverLink}/user/developer-admin/${_id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(({ data }) => {
        setLoading(false);
        setDeveloper(data.result);
      });
  };
  const removeAdmin = async () => {
    await axios
      .put(`${serverLink}/user/developer-admin-remove/${_id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(({ data }) => {
        setLoading(false);
        setDeveloper(data.result);
      });
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{username}</td>
      <td>{email}</td>
      <td>{accountType}</td>
      <td>{isAdmin ? 'Admin' : 'Not Admin'}</td>
      <td>
        <button className="focus:outline-none">
          {isAdmin ? (
            <span
              disabled={loading}
              onClick={removeAdmin}
              className="bg-red-500 text-black py-3 px-2 rounded-md text-center"
            >
              {loading ? 'Removing...' : 'Remove Admin'}
            </span>
          ) : (
            <span
              disabled={loading}
              onClick={makeAdmin}
              className="bg-green-500 text-black py-3 px-4 rounded-md text-center"
            >
              {loading ? 'Making...' : 'Make Admin'}
            </span>
          )}
        </button>
      </td>
    </tr>
  );
};

export default AdminRow;
