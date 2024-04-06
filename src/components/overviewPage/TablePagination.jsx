import React, { useState } from "react";
import { payData } from "../../dummyDatas/paymentData";
import { calculateNumberOfPages, cn } from "../../lib/utils";

const TablePagination = ({
  currentPage,
  setCurrentPage,
  setSlice2,
  setSlice1,
  slice1,
  slice2,
  newArray,
}) => {
  const arrayLength = payData?.length; // Example array length
  const itemsPerPage = 10; // Number of items per page
  const numberOfPages = calculateNumberOfPages(arrayLength, itemsPerPage);
  // const [currentPage, setCurrentPage] = useState(1);

  // console.log({ numberOfPages, currentPage });

  return (
    <div className='flex items-center justify-between mt-[26px]'>
      <p className='text-[13px] text-black '>
        Showing {Number(slice1) + 1} to{" "}
        {Number(slice1) + (newArray?.length > 10 ? 10 : newArray?.length)} of{" "}
        {payData?.length} entries
      </p>
      <div className='flex items-center'>
        <div
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage((prev) => prev - 1);
            }
          }}
          className='h-29px hover:bg-gray-100 duration-300 py-[6px] px-[12px] border-[#CED0DA] border-[1.5px] rounded-tl-[2px] rounded-bl-[2px] cursor-pointer'
        >
          <p className='text-black text-[13px] select-none'>Previous</p>
        </div>
        {new Array(numberOfPages).fill(null).map((_, index) => {
          return (
            <div
              key={index}
              className={cn(
                "h-29px py-[6px] px-[12px] border-[#CED0DA]  border-[1.5px]  cursor-pointer select-none",
                currentPage === index + 1 && "border-primary  bg-primary"
              )}
            >
              <p
                className={cn(
                  "text-black text-[13px]",
                  currentPage === index + 1 && " text-white"
                )}
              >
                {index + 1}
              </p>
            </div>
          );
        })}

        <div
          onClick={() => {
            if (currentPage < numberOfPages) {
              setCurrentPage((prev) => prev + 1);
              setSlice1(Number(slice2) + 1);
              setSlice2(Number(slice2) + 10);
            }
          }}
          className='h-29px py-[6px] px-[12px] border-[#CED0DA] hover:bg-gray-100 duration-300 border-[1.5px] rounded-tr-[2px] rounded-br-[2px] cursor-pointer'
        >
          <p className='text-black text-[13px] select-none'>Next</p>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
