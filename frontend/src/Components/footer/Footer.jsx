import React from "react";
import worldPic from "../../assets/world-pic.png";
import emailPic from "../../assets/email-pic.png";

function Footer() {
  return (
    <div>
      <div className="bg-gray-700 text-white flex justify-between gap-28 p-20">
        <div>
          <h1 className="text-4xl font-bold hover:text-orange-400">
            Model School Dalmianager
          </h1>
          <p>
            Developed a full-stack web application to automate administrative
            and academic processes within a school. Utilized MongoDB,
            Express.js, React.js, and Node.js to create a user-friendly platform
            with role-based access control, enabling efficient management of
            student records, teacher assignments, and course schedules.
          </p>
        </div>
        <div className="px-4 py-10 bg-gray-200 flex flex-col gap-4 text-black rounded-xl justify-center items-center">
          <img src={worldPic} className="" alt="img" />
          <h1 className="font-semibold text-sm">akashkumargoutam@gmail.com</h1>
        </div>
        <div className="px-4 py-10 bg-gray-200 flex flex-col gap-4 text-black rounded-xl justify-center items-center">
          <img src={emailPic} className="" alt="img" />
          <h1 className="font-semibold text-sm">akashkumargoutam@gmail.com</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
