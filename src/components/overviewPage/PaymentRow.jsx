import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import SelectSearch from "../inputs/SelectSearch";
import { serviceOptions } from "../../dummyDatas/inputData";
import { FaCircle } from "react-icons/fa6";
import { payData } from "../../dummyDatas/paymentData";
import PaymentTable from "./PaymentTable";

const PaymentRow = () => {
  const [selectValue, setSelectValue] = useState("");
  return (
    <div className=' mt-[43px]'>
      <p className='text-[36px] mb-[17px] text-base-300'>Payments</p>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <p className='text-[13px] mr-[20px] text-base-300'>Showing</p>
          <div className='flex items-center text-primary space-x-[7px] mr-[13px]'>
            <p className='text-[13px]'>20 </p>
            <MdKeyboardArrowDown className='16px' />
          </div>
          <p className='text-[13px] mr-[57px] text-base-300 hidden md:flex'>
            out of 500 payments
          </p>
          {/* search input */}
          <div className='lg:items-center hidden xl:flex border-b-[0.5px] border-[#787878] w-[336px]'>
            <img
              src={`/images/search_icon.png`}
              alt=''
              className='w-[12px] h-fit object-cover mr-[-25px] z-[10]'
            />
            <input
              type='text'
              placeholder='Search payments'
              className='input input-ghost text-[11px] w-[336px] h-[30px] outline-none active:outline-none pl-[40px]'
            />
          </div>
        </div>

        <div className='flex items-center space-x-[16px] items justify-end'>
          <p className='text-[13px] text-base-300'>Show</p>
          <div className='w-[150px]'>
            <SelectSearch
              placeholder='What are you moving?'
              options={serviceOptions}
              isSearchable={false}
              name='service'
              defaultValue={serviceOptions[0]}
              setValue={setSelectValue}
            />
            {/* <Selects /> */}
          </div>
        </div>
      </div>

      {/* payment table */}
      <PaymentTable />
    </div>
  );
};

export default PaymentRow;
