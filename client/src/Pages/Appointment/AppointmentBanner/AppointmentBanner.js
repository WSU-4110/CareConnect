import React from "react";
import prangon from "../../../assets/images/CS3U.gif";
import { DayPicker } from "react-day-picker";
import Main from "../../../components/Main"; // Import Main component

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <Main> {/* Wrap the content with Main */}
      <header className="my-6">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={prangon}
              alt="dentist chair"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="mr-6 sm:w-full">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
              />
            </div>
          </div>
        </div>
      </header>
    </Main>
  );
};

export default AppointmentBanner;
