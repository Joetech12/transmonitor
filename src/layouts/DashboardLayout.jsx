import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import FullSideBar from "../components/sidebar/FullSideBar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='grid grid-cols-[100px_1fr] md:grid-cols-[250px_1fr] min-h-screen mt-[60px]'>
          <FullSideBar />
        <div className='pt-[33px] pl-[20px] md:pl-[30px] pr-[30px] lg:pr-[80px] pb-[50px]'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;


