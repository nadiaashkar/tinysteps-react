import React, { useState } from "react";
import ParentHome from '../components/ParentHome';
import AdminHome from '../components/AdminHome';

// Define button types as constants
const SelectedButton = {
  Admin: "Admin",
  Parent: "Parent",
};

const Home = () => {
  const [selectedButton, setSelectedButton] = useState(SelectedButton.Parent);

  // Handle button selection
  const handleSelectButton = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="px-[8%] py-[2%]">
      {/* Header */}
      <div className="flex lg:justify-start sm:justify-center">
        <h1 className="md:text-6xl text-3xl font-extrabold italic font-poppins text-teal-950">
          Tiny
        </h1>
        <h1 className="md:text-6xl text-3xl font-extrabold italic font-poppins gradient-text">
          Steps
        </h1>
      </div>

      {/* Description */}
      <p className="sm:text-center lg:text-start text-[12px] md:text-base py-3 text-base font-light font-poppins text-gray-500">
        Welcome to Tiny Steps! This platform helps parents track their child’s growth and developmental milestones from birth to 3 years old.
        <br />
        <span className="text-lg font-semibold text-teal-700 text-[12px] md:text-base">
          Explore detailed insights on your child’s progress and stay updated with reminders for feeding, vaccinations, sleep tracking, and more!
        </span>
      </p>

      {/* Buttons for selecting role */}
      <div className="py-8 justify-center grid gap-x-2 grid-cols-2">
        <button
          onClick={() => handleSelectButton(SelectedButton.Admin)}
          className={`${
            selectedButton === SelectedButton.Admin
              ? "select-button-selected"
              : "select-button-not-selected"
          }`}
        >
          Browse as Admin
        </button>

        <button
          onClick={() => handleSelectButton(SelectedButton.Parent)}
          className={`${
            selectedButton === SelectedButton.Parent
              ? "select-button-selected"
              : "select-button-not-selected"
          }`}
        >
          Browse as Parent
        </button>
      </div>

      {/* Conditional rendering based on the selected role */}
      {selectedButton === SelectedButton.Admin ? <AdminHome /> : <ParentHome />}
    </div>
  );
};

export default Home;
