import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#1C3D5A] py-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <div onClick={() => router.push("/")} className="cursor-pointer text-white text-xl">
          Logo
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex flex-col  md:flex-row w-[60%] md:items-center md:space-x-6 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:w-full md:space-x-12 text-nowrap md:space-y-0">
            <li className="hover:text-gray-400 text-white text-xl cursor-pointer" onClick={() => router.push("/")}>Home</li>
            <li className="hover:text-gray-400 text-white text-xl cursor-pointer" onClick={() => router.push("/contact")}>Contact us</li>
            <li className="hover:text-gray-400 text-white text-xl cursor-pointer" onClick={() => router.push("/signup")}>Sign up</li>
          </ul>
          <button className="px-6 py-2  rounded-md bg-blue-500 text-white focus:outline-none" onClick={() => router.push("/logout")}>Logout</button>
        </div>
      </div>
      <div className={`md:hidden fixed inset-0 bg-gray-600 z-50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex justify-between items-center px-4 py-5">
          <div></div>
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <ul className="flex flex-col items-center space-y-4">
            <li className="hover:text-gray-400 text-white" onClick={() => router.push("/")}>Home</li>
            <li className="hover:text-gray-400 text-white" onClick={() => router.push("/contact")}>Contact Us</li>
            <li className="hover:text-gray-400 text-white" onClick={() => router.push("/signup")}>Sign Up</li>
            <button className="px-6 py-2 rounded-md bg-blue-500 text-white focus:outline-none" onClick={() => router.push("/login")}>Logout</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
