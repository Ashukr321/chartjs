import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className=" p-10 flex h-screen flex-col justify-center items-center bg-black text-white">
      <h1 className="text-white text-3xl ">welcome learning the chart js </h1>
      <div className="p-5 rounded-xl flex flex-wrap gap-5 w-1/2 mt-10  border ">
        <Link
          to={"/chart1"}
          className="text-white p-4 border px-10 text-xl hover:bg-white hover:text-blue-600"
        >
          chart1
        </Link>
      </div>
    </div>
  );
};

export default Home;