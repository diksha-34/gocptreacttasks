import React from "react";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <div className="px-10">
      <main className="flex flex-col mt-8 px-4 md:px-0">
        <h2 className="text-xl md:text-2xl">
          Welcome to <span className="text-[#DC84F3]">Go</span>
          <span className="text-[#1679AB]">CPT</span> BETA{" "}
        </h2>
        <h2 className="text-xl md:text-2xl">Your Path to Effortless CPT Coding!</h2>
        <p className="my-4 max-w-xs md:max-w-sm">
          We're excited to introduce you to the BETA version of GoCPT, your free
          pass to a simplified and efficient CPT coding experience designed
          exclusively for mental health professionals like you.
        </p>
        <button className="bg-purple-400 text-gray-900 text-lg font-bold py-2 px-4 rounded-md hover:bg-purple-500 w-full md:w-44">
          Start Testing
        </button>
      </main>

      <div className="text-center p-5 border border-stone-100 border-opacity-25 mt-8 rounded-lg shadow-2xl">
        <h1 className="text-2xl md:text-3xl">Key Features of GoCPT BETA</h1>
        <section className="m-8 mx-4 md:mx-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-md">
            <h3 className="text-xl md:text-2xl mb-2">User Friendly</h3>
            <p className="px-2 md:px-10">
              The GoCPT app offers a user-friendly feature for determining CPT
              codes based on time alone. To utilize this functionality, simply
              navigate to the designated time button within the app and input
              the total time spent managing the patient during the encounter.
              The app will then generate the appropriate CPT code, considering
              the significant role of time in certain scenarios, such as
              counseling or coordination of care, in determining the level of
              service provided.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-md">
            <h3 className="text-xl md:text-2xl mb-2">
              Medical Complexity Assessment
            </h3>
            <p className="px-2 md:px-10">
              The GoCPT app calculates encounters of varying complexity
              (straightforward/minimal, low, moderate, and high) based on a
              meticulous assessment of Medical Decision-Making (MDM), taking
              into account the number of diagnoses, management options, risk of
              complications or morbidity, and the amount and complexity of data
              reviewed during the encounter.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-md">
            <h3 className="text-xl md:text-2xl mb-2">E&M Code Integration</h3>
            <p className="px-2 md:px-10">
              Seamlessly incorporates the key components influencing E&M code
              selection, such as History of Present Illness (HPI), Examination,
              Medical Decision-Making (MDM), and Time considerations.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-md">
            <h3 className="text-xl md:text-2xl mb-2">
              Streamlined Documentation
            </h3>
            <p className="px-2 md:px-10">
              Facilitates accurate code assignment by providing a user-friendly
              interface for configuring CPT billing codes directly from your
              progress notes. The app emphasizes documentation accuracy to
              capture the true complexity of the services rendered.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
