// src/ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 bg-[#161c27]">
      <div className="w-full max-w-5xl bg-black p-8 rounded-lg shadow-md mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Contact Us</h2>
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
            <img src="https://s3-alpha-sig.figma.com/img/be51/0875/9c911ca4eba4a637cc0fd3676820b532?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4--oscoIXShzLgASbUp3RrtyDrdLxE~gmlpHQ-rGpThdmz6s4seqipWntK1Eq8iXA6UB4dvDOcodfYoRhGue30YwF-O7Odsmt2iVBnnUfMM6q2MLGqcTiYNZ-cAfgKwnrmM-E4k0AQdwyYtcquprJMSnxTfGTwfgzqx1i7zYbdBcJjJSgVQmwdzLQ1bh6jA2bEJup7mdJaPC1yYVWB7Syi1u6OijiRgCxokjqB9d0NkrSn~wNDx34ZkrAp45Gs9Lj1vnWRFjiKeRcJnL~fobaqlo5Tc15HckW31N8BIW8IxNVUETaFdHRq8hssGaNPXKmeB91qa4BODeDJCPmU2cg__" alt="Contact Support" className="rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <form>
              <div className="mb-4">
                <input className="w-full px-3 py-2  bg-black rounded-lg focus:outline-none border" id="company-name" type="text" placeholder="Company Name" />
              </div>
              <div className="mb-4">
                <input className="w-full px-3 py-2  bg-black rounded-lg focus:outline-none border" id="email-address" type="email" placeholder="E-Mail Address" />
              </div>
              <div className="mb-4">
                <input className="w-full px-3 py-2  bg-black rounded-lg focus:outline-none border" id="company-address" type="text" placeholder="Company's Address" />
              </div>
              <div className="mb-4">
                <textarea className="w-full px-3 py-2  bg-black  rounded-lg focus:outline-none border" id="message" rows="4" placeholder="Message"></textarea>
              </div>
              <div className="text-center">
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-10 rounded-lg">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ContactForm;
