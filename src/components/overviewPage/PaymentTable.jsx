import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { payData } from "../../dummyDatas/paymentData";
import TablePagination from "./TablePagination";
import { formatPrice } from "../../lib/utils";

const PaymentTable = ({
  currentPage,
  setCurrentPage,
  setSlice2,
  setSlice1,
  slice1,
  slice2,
  newArray,
  t1,
t2,
}) => {

  
  // const [slice1, setSlice1] = useState("0");
  // const [slice2, setSlice2] = useState("10");
  // const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className='mt-[19px]'>
      <div className=' overflow-x-auto w-[500px] md:w-[650px] lg:w-full'>
        {/* Table head */}
        <div className='flex items-center h-[42px] bg-[#EAEEF0] pl-[26px] w-full'>
          <p className='text-[14px] flex-[1]'>Item Type</p>
          <p className='text-[14px] flex-[0.3]'>Price</p>
          <p className='text-[14px] flex-[0.5] hidden xl:flex'>
            Transaction No
          </p>
          <p className='text-[14px] flex-[0.3] hidden md:flex'>Time</p>
          <p className='text-[14px] flex-[0.5]'>Status</p>
        </div>
        {/* Table Body */}
        {newArray?.slice(slice1, slice2)?.map((data, i) => {
          const statusType = () => {
            switch (data.status) {
              case "Reconcilled":
                return "text-secondary";
                break;
              case "Pending":
                return "text-accent";
                break;
              case "Un-reconcilled":
                return "text-[#C4C4C4]";
                break;
              case "Settled":
                return "text-secondary/60";
                break;
              case "Unsettled":
                return "text-red-500";
                break;
              default:
                break;
            }
          };
          return (
            <div
              key={i}
              className='flex items-center bg-white border-b border-b-[#CCCFD4] pl-[26px] h-[76px] w-full pr-[10px] md:pr-[0px]'
            >
              <div className='flex-[1] flex items-center xl:space-x-[26px]'>
                <div className='justify-center items-center rounded-[100px] h-[36px] w-[36px] bg-[#7F8FA4] hidden xl:flex'>
                  <p className='text-[12px] text-white'>{data.code}</p>
                </div>
                <p className='text-[14px] '>{data.itemType}</p>
              </div>
              <div className='flex-[0.3]'>
                <p className='text-[14px] '>{formatPrice(data.price)}</p>
              </div>
              <div className='flex-[0.5] hidden xl:flex'>
                <p className='text-[14px] '>{data.transactionNo}</p>
              </div>
              <div className='flex-[0.3] hidden md:flex'>
                <p className='text-[14px] '>{data.time}</p>
              </div>
              <div className='flex-[0.5] flex items-center xl:space-x-[33px]'>
                <div
                  className={`border border-[#CCCFD4] p-[12px] flex items-center justify-start h-[33px] rounded-[30px] space-x-[8px] text-primary  w-[120px]`}
                >
                  <FaCircle className={`${statusType()} text-[10px]`} />
                  <p
                    className={`${statusType()}  text-[12px] whitespace-nowrap`}
                  >
                    {data.status}
                  </p>
                </div>
                <MdKeyboardArrowDown className='text-[28px] text-[#CCCFD4] hidden xl:flex cursor-pointer' />
              </div>
            </div>
          );
        })}
      </div>

      <TablePagination
        newArray={newArray}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        slice1={slice1}
        setSlice2={setSlice2}
        setSlice1={setSlice1}
        setSlice2={setSlice2}
        slice2={slice2}
        t1={t1}
t2={t2}
      />
    </div>
  );
};

export default PaymentTable;
