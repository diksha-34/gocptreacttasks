import React from "react";

const About = () => {
  return (
    <div className="px-10">
      <section className="p-8 md:p-12 md:px-20 rounded-md text-center md:text-right">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="px-4 md:px-20">
            <img
              src="https://www.asaarmedical.com/wp-content/uploads/2023/04/asaar_aco_reach_group.png"
              alt=""
              className="w-full"
            />
          </div>
          <div>
            <p className="mb-4 text-lg md:text-xl">
              Empowering Mental Health Professionals with <br /> Simplified CPT Coding
            </p>
            <p className="mb-4 text-sm md:text-md">
              Welcome to GoCPT, where the journey of <br /> revolutionizing the medical coding and billing <br />
              landscape began with a single idea - to make <br />
              mental health care more accessible to everyone. <br /><br />
              Join us on this transformative journey as we <br /> continue to innovate and evolve, breaking down <br />
              barriers and making mental health care accessible <br /> to all. Together, we can shape a future where <br />
              healthcare providers are empowered, and quality <br /> mental health care knows no boundaries.
            </p>
          </div>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <button className="bg-purple-400 text-gray-900 text-lg font-bold py-2 px-8 md:px-14 rounded-md hover:bg-purple-500">
            Sign Up Today!
          </button>
        </div>
      </section>
      <section className="p-8 text-center text-white font-jura grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="p-6 col-span-1 md:col-start-1 md:col-span-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h3>
          <p className="text-base md:text-lg">
            GoCPT was conceived by a passionate psychiatric nurse practitioner who, as a new graduate, felt overwhelmed
            by the complexities of CPT coding. Faced with the daunting task of mastering medical coding while juggling the
            demands of patient care, it became clear that a solution was needed to bridge the gap between clinical expertise
            and administrative challenges. Time constraints and the intricate nature of CPT coding posed significant hurdles
            for healthcare providers looking to venture into private practice. Recognizing that coding and billing are formidable
            obstacles standing in the way of many talented providers, the idea for GoCPT was born.
          </p>
        </div>
        <div className="p-6 col-span-1 md:col-end-7 md:col-span-3">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-base md:text-lg">
            At GoCPT, our mission is simple yet profound - to empower mental health professionals and remove the barriers that
            hinder them from providing quality care and pursuing their dreams of private practice. We believe that every single
            individual should have access to exceptional mental health care, and that starts with simplifying the coding and billing
            process.
          </p>
        </div>
        <div className="p-6 col-span-1 md:col-start-1 md:col-span-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
          <p className="text-base md:text-lg">
            We envision a future where mental health care is more accessible, where providers can focus on what they do best - helping
            individuals on their path to wellness. By harnessing the power of technology, our aim is to streamline the complexities of
            CPT coding, enabling providers to dedicate more time to patient care and less to administrative burdens.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
