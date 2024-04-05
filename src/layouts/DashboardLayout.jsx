import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import FullSideBar from "../components/sidebar/FullSideBar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='grid grid-cols-[250px_1fr] min-h-screen mt-[60px]'>
        <FullSideBar />
        <div className='pt-[33px] pl-[30px] pr-[80px]'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

// const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
//     return (
//       <div className='grid grid-cols-[250px_1fr] h-screen'>
//         <MainMenu/>
//         <div className='overflow-auto py-2 px-4'>
//           <h1 className='pb-4'>Welcome back, Joe</h1>
//           {children}
//         </div>
//       </div>
//     );
//   };
