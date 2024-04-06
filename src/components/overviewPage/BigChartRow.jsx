import { useEffect, useState } from "react";
import BigChart from "/images/big_chart.png";

import SmallProgressCard from "./SmallProgressCard";
import { MdKeyboardArrowDown } from "react-icons/md";

console.log({ BigChart });

const BigChartRow = () => {
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowChart(true);
    }, 1000);
  }, []);

  return (
    <div className='flex flex-col mt-[27px] space-y-[20px] xl:space-y-[0] xl:flex-row xl:items-center xl:space-x-[4px]'>
      {/* big chart */}
      <div className='bg-white overflow-hidden pt-[26px] h-auto shrink-0  lg:h-[329px] flex flex-col justify-between'>
        <div className='flex flex-col space-y-[10px] md:space-y-0 md:flex-row  md:items-center md:justify-between mb-[38px] xl:mb-[0px] mx-[20px] lg:ml-[34px] lg:mr-[30.76px]'>
          <p className='font-bold text-[18px] text-base-200'>
            Today: 5, Aug 2018
          </p>
          <div className='flex items-center space-x-[39.23px]'>
            <div className='flex items-center justify-between w-[135px] border-[2px] h-[31px] rounded-[2px] px-[11px] py-[10px] cursor-pointer'>
              <p className='text-[12px]'>1 Jan - 1 Jun</p>
              <MdKeyboardArrowDown className='text-[16px] text-[#CCCFD4] ' />
            </div>
            <div className='flex items-center space-x-[13.28px]'>
              <div className='flex justify-center items-center border bg-gradient-to-t from-[#F2F4F7] hover:from-[#e1e2e5] to-white border-[#CED0DA] rounded-[4px] h-[22.97px] w-[29.36px] cursor-pointer'>
                <img
                  src='/images/arrow_back.png'
                  className='w-[18.9px] h-fit'
                  alt=''
                />
              </div>
              <div className='flex justify-center items-center border bg-gradient-to-t from-[#F2F4F7] hover:from-[#e1e2e5] to-white border-[#CED0DA] rounded-[4px] h-[22.97px] w-[29.36px] cursor-pointer'>
                <img
                  src='/images/arrow_front.png'
                  className='w-[18.9px] h-fit'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full xl:min-w-[689px]'>
          {showChart ? (
            <img
              src={BigChart}
              className='object-contain w-[689px] xl:w-auto h-auto xl:h-[236.96px]'
              alt=''
            />
          ) : (
            <div className='skeleton w-auto  h-[100px] md:h-[150px] xl:w-[689px] xl:h-[236.96px] opacity-10'></div>
          )}
        </div>
      </div>
      {/* smaller cards */}
      <div className='flex flex-col space-y-[10px] lg:space-y-0 lg:flex-row lg:space-x-[10px] xl:space-x-0 xl:flex-col xl:space-y-[4px] grow '>
        <SmallProgressCard
          title='Orders'
          value1='20'
          value1Name='Pending Orders'
          value2='80'
          value2Name='Reconcilled Orders'
          totalValue='100'
          totalValueName='Total Orders'
        />
        <SmallProgressCard
          title='Payments'
          value1='20'
          value1Name='Pending Orders'
          value2='80'
          value2Name='Reconcilled Orders'
          totalValue='100'
          totalValueName='Total Orders'
        />
      </div>
    </div>
  );
};

export default BigChartRow;
