import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header";
import Card from "../components/card";
import TodoContainer from "../components/TodoContainer";

function Landing() {
  const location = useLocation();
  const user = location.state.user;

  // State variables to store current date and time
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  // Function to update current date and time
  const updateDateTime = () => {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);
    const formattedTime = now.toLocaleTimeString();
    setCurrentDate(formattedDate);
    setCurrentTime(formattedTime);
  };

  // Update date and time when component mounts
  useEffect(() => {
    updateDateTime();
  }, []);

  return (
    <section className="landing w-full h-auto bg-cover bg-center bg-no-repeat">
      <div className="md:p-16 p-8">
        <div className="bg-[#EFEFEF] bg-transparent md:p-10 p-5 border rounded-md">
          {/* Header */}
          <Header username={user} />
          {/* Card */}
          <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card bgcolor={"#75A5DC"} title={currentDate} subtitle={"Date"} />
            <Card bgcolor={"#75A5DC"} title={currentTime} subtitle={"Current Time"} />
            <Card bgcolor={"#75A5DC"} title={"Built Using"} subtitle={"React"} />
          </div>
          {/* Todo Container */}
          <TodoContainer />
        </div>
      </div>
    </section>
  );
}

export default Landing;
