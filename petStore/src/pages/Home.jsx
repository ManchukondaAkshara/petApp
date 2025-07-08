import React from "react";
import logo from "../assets/logo.jpg"; // Adjust the path to your logo image

const Home = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section: Logo & Name */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-50">
        {/* Logo Placeholder */}
        <div className="mb-4">
          {/* Replace src with your logo */}
          <img
            src={logo}
            alt="Petique Logo"
            className="w-128 h-128 object-contain"
          />
        </div>
        {/* <h1 className="text-5xl font-serif text-gray-900">Petique</h1> */}
      </div>

      {/* Right Section: Nav & Content */}
      <div className="w-1/2 flex flex-col justify-between bg-[#0a0a23] text-white p-12">
        {/* Navigation */}
        <nav className="flex justify-end space-x-8 text-sm mb-12">
          <a href="#" className="hover:underline">HOME</a>
          <a href="#" className="hover:underline">ABOUT US</a>
          <a href="#" className="hover:underline">OUR SERVICES</a>
          <a href="#" className="hover:underline">CONTACT</a>
        </nav>

        {/* Content */}
        <div className="flex-grow flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
          <p className="max-w-md leading-relaxed text-gray-300">
            Since our opening, we have become masters of our craft.
            Our commitment to quality products, exceptional services
            and incomparable customer care keep our community coming
            back again and again.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12">
          <p className="mb-1">info@mysite.com</p>
          <p className="mb-4">123-456-7890</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
