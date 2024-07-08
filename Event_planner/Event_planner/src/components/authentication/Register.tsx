import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    const role = isAdmin ? 'admin' : 'user';
    const name = 'register name';
    const email = 'register email';

    dispatch(register({ name, email, role }));
    navigate('/profile');
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAdmin(event.target.checked);
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-20">
      <h2 className="text-center text-2xl font-bold mb-6">Register</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center text-sm">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <span className="text-gray-700">Register as Admin</span>
        </label>
      </div>
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
