import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#161c27]">
      <footer className="w-full mt-12 bg-black text-gray-400 flex flex-col md:flex-row p-10 relative">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-4xl">
            <span className="text-[#DC84F3]">Go</span>
            <span className="text-[#1679AB]">CPT</span>
          </h2>
          <p className="mb-2">
            We are not here to sell you products, we sell value <br /> through our
            expertise.
          </p>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:info@gocpt.ai"
              className="text-[#1679AB] hover:underline"
            >
              info@gocpt.ai
            </a>
          </p>
          <p className="mb-4">© 2024 All rights reserved gocpt.ai</p>
        </div>
        <div className="md:w-1/2 flex flex-col text-right">
          <a href="#" className="hover:underline mb-2 md:mb-0 md:ml-4">
            Home
          </a>
          <a href="#" className="hover:underline mb-2 md:mb-0 md:ml-4">
            Features
          </a>
          <a href="#" className="hover:underline mb-2 md:mb-0 md:ml-4">
            About Us
          </a>
          <a href="#" className="hover:underline mb-2 md:mb-0 md:ml-4">
            Contact Us
          </a>
          <a href="#" className="hover:underline mb-2 md:mb-0 md:ml-4">
            Terms & Conditions
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
