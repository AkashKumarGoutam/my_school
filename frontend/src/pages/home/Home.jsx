import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-900 text-white ">
      <div className="flex justify-between p-36">
        <div>
          <div className="w-1/2">
            <h1 className="text-4xl py-6">Welcome to School</h1>
            <h1>
              Welcome to Get In Touch, a revolutionary E-learning platform
              designed to bring quality education to your fingertips. Whether
              you are a student, professional, or lifelong learner, our platform
              offers a wide range of courses tailored to meet your educational
              need
            </h1>
          </div>
          <div className="py-8 ">
            <Link to="/dashboard" className="bg-blue-800 py-2 px-6 rounded-xl">
              Get Start
            </Link>
          </div>
        </div>
        <div>
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-school-season-teaching-building-background-material-buildingteachers-daycampusbuildingclassroomopening-season-image_66055.jpg"
            className="rounded-xl"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
