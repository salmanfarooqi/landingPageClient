import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/signup", {
        name,
        email,
        password,
        confirmPassword
      });

      // Handle success, redirect or show a success message
      console.log(response.data.message);
    } catch (error) {
      // Handle error, show an error message
      console.error(error.response.data.message);
    }
  };
  const Router=useRouter()
  const handleRoute=()=>{
    Router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
      <div className="lg:flex-1 opacity-1 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(signup.jpg)"
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <div className='h-10 flex justify-center text-gray-700 font-semibold text-[40px]'>Sign Up</div>
            <div className="w-full flex-1 mt-8 space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-xs">
                  <label htmlFor="name" className="block text-gray-700">Name:</label>
                  <input
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                  <label htmlFor="email" className="block text-gray-700 mt-4">Email:</label>
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                  <label htmlFor="password" className="block text-gray-700 mt-4">Password:</label>
                  <input
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                  <label htmlFor="confirmPassword" className="block text-gray-700 mt-4">Confirm Password:</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="submit"
                    className="mt-8 tracking-wide font-semibold bg-green-400 text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-">Sign Up</span>
                  </button>
                </div>
              </form>
              <p className="mt-6 text-base text-gray-600 text-center hover:text-blue-600 cursor-pointer" onClick={handleRoute}>
                Already have an account?
              </p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default SignUpPage;
