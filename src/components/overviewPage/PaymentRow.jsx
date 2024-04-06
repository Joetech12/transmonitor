import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { serviceOptions } from "../../dummyDatas/inputData";
import MyCustomSelect from "../inputs/MyCustomSelect/MyCustomSelect";
import PaymentTable from "./PaymentTable";
import { payData } from "../../dummyDatas/paymentData";

const PaymentRow = () => {
  const [selectValue, setSelectValue] = useState("All");
  const [newArray, setNewArray] = useState(payData);

  useEffect(() => {
    if (selectValue === "All") {
      setNewArray(payData);
    } else {
      const arr = payData?.filter((ar) => ar.status === selectValue);
      setNewArray(arr);
    }
  }, [selectValue]);

  console.log({ selectValue, newArray });

  return (
    <div className=' mt-[43px]'>
      <p className='text-[36px] mb-[17px] text-base-300'>Payments</p>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <p className='text-[13px] mr-[20px] text-base-300'>Showing</p>
          <div className='flex items-center text-primary space-x-[7px] mr-[13px]'>
            <p className='text-[13px]'>{newArray?.length < 10 ? newArray?.length : 10} </p>
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
            />
          </div>
        </div>

        <div className='flex items-center space-x-[16px] items justify-end'>
          <p className='text-[13px] text-base-300'>Show</p>
          <div className='w-[150px]'>
            {/* <SelectSearch
              placeholder='What are you moving?'
              options={serviceOptions}
              isSearchable={false}
              name='service'
              defaultValue={serviceOptions[0]}
              setValue={setSelectValue}
            /> */}

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
      <PaymentTable newArray={newArray} />
    </div>
  );
};

export default PaymentRow;
