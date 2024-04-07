import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { serviceOptions } from "../../dummyDatas/inputData";
import MyCustomSelect from "../inputs/MyCustomSelect/MyCustomSelect";
import PaymentTable from "./PaymentTable";
import { payData } from "../../dummyDatas/paymentData";
import { calculateNumberOfPages } from "../../lib/utils";

const PaymentRow = () => {
  const [selectValue, setSelectValue] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [newArray, setNewArray] = useState(payData);
  const [slice1, setSlice1] = useState("0");
  const [slice2, setSlice2] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);

  const arrayLength = newArray?.length; // Example array length
  const itemsPerPage = 10; // Number of items per page
  const numberOfPages = calculateNumberOfPages(arrayLength, itemsPerPage);

  const t1 = Number(slice1) + 1;

  const t2 =
    currentPage === numberOfPages
      ? newArray?.length
      : newArray?.length > 10
      ? Number(slice2)
      : newArray?.length;

  useEffect(() => {
    if (selectValue === "All") {
      setNewArray(payData);
    } else {
      const arr = payData?.filter((ar) => ar.status === selectValue);
      setNewArray(arr);
    }
    setSlice1("0");
    setSlice2("10");
    setCurrentPage(1);
  }, [selectValue]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      // Filtering logic here
      const filteredData = newArray?.filter((item) =>
        item.itemType.toLowerCase().includes(searchValue.toLowerCase())
      );
      if (searchValue) {
        setNewArray(filteredData);
        setSlice1("0");
        setSlice2("10");
        setCurrentPage(1);
      } else {
        setNewArray(payData);
      }
    }, 300); // 300ms debounce delay

    return () => clearTimeout(timerId); // Cleanup function to clear the timeout
  }, [searchValue]);

  

  return (
    <div className=' mt-[43px]'>
      <p className='text-[36px] mb-[17px] text-base-300'>Payments</p>
      {/* search headers */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <p className='text-[13px] mr-[20px] text-base-300'>Showing</p>
          <div className='flex items-center text-primary space-x-[7px] mr-[13px]'>
            <p className='text-[13px]'>{t2 - t1 + 1} </p>
            <MdKeyboardArrowDown className='16px' />
          </div>
          <p className='text-[13px] mr-[57px] text-base-300 hidden md:flex'>
            out of {payData?.length} payments
          </p>
          {/* search input */}
          <div className='lg:items-center hidden xl:flex border-b-[0.5px] border-b-[#787878] w-[336px] rounded-[2px] relative duration-300'>
            <img
              src={`/images/search_icon.png`}
              alt=''
              className='w-[12px] h-fit object-cover z-[10] absolute left-2'
            />
            <input
              type='text'
              placeholder='Search payments'
              className='text-[13px] w-[336px] h-[30px] bg-base-100 outline-none appearance-none active:outline-none pl-[36px]'
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              value={searchValue}
            />
          </div>
        </div>

        <div className='flex items-center space-x-[16px] items justify-end'>
          <p className='text-[13px] text-base-300'>Show</p>
          <div className='w-[150px]'>
            <MyCustomSelect
              value={selectValue}
              setValue={setSelectValue}
              options={serviceOptions}
              defaultValue={serviceOptions[0]}
              icon={
                <MdKeyboardArrowDown className='text-[18px] text-primary' />
              }
              styles=''
            />
          </div>
        </div>
      </div>

      {/* payment table */}
      <PaymentTable
        newArray={newArray}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        slice1={slice1}
        setSlice1={setSlice1}
        slice2={slice2}
        setSlice2={setSlice2}
        t1={t1}
        t2={t2}
      />
    </div>
  );
};

export default PaymentRow;
