import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { dateOptions } from "../../dummyDatas/inputData";
import { payData } from "../../dummyDatas/paymentData";
import { getCurrentDate } from "../../lib/utils";
import MyCustomSelect from "../inputs/MyCustomSelect/MyCustomSelect";
import SmallProgressCard from "./SmallProgressCard";

const BigChartRow = () => {
  const [showChart, setShowChart] = useState(false);

  const [selectValue, setSelectValue] = useState("1 Jan - 1 Jun");
  const [indexValue, setIndexValue] = useState(0);

  const selectChart = () => {
    switch (selectValue) {
      case "1 Jan - 1 Dec":
        return "big_chart3.jpg";
        break;
      case "1 Jan - 1 Jun":
        return "big_chart1.jpg";
        break;
      case "1 Jul - 1 Dec":
        return "big_chart2.jpg";
        break;

      default:
        break;
    }
  };

  const totalPayment = payData?.length;

  const pendingPayment = payData?.filter(
    (pd) => pd.status === "Pending"
  )?.length;

  const ReconcilledPayment = payData?.filter(
    (pd) => pd.status === "Reconcilled"
  )?.length;

  const getChartIndex = () => {
    const filt = dateOptions?.findIndex((ind) => ind.value === selectValue);
    return filt;
  };
  const chartIndex = getChartIndex();

  useEffect(() => {
    const filt = dateOptions?.find((ind) => ind.index === indexValue);
    setSelectValue(filt?.value);
  }, [indexValue]);

  useEffect(() => {
    setTimeout(() => {
      setShowChart(true);
    }, 1000);
    setIndexValue(chartIndex);
  }, []);

  return (
    <div className='flex flex-col mt-[27px] space-y-[20px] xl:space-y-[0] xl:flex-row xl:items-center xl:space-x-[4px]'>
      {/* big chart */}
      <div className='bg-white overflow-hidden pt-[26px] h-auto shrink-0  lg:h-[329px] flex flex-col justify-between'>
        <div className='flex flex-col space-y-[10px] md:space-y-0 md:flex-row   md:items-center md:justify-between mb-[38px] xl:mb-[0px] mx-[20px] lg:ml-[34px] lg:mr-[30.76px]'>
          <p className='font-bold text-[18px] text-base-200'>
            Today: {getCurrentDate()}
          </p>
          <div className='flex items-center space-x-[39.23px]'>
            <MyCustomSelect
              value={selectValue}
              setValue={setSelectValue}
              options={dateOptions}
              defaultValue={dateOptions[1]}
              icon={
                <MdKeyboardArrowDown className='text-[16px] text-[#CCCFD4]' />
              }
              styles='w-[135px] h-[31px] rounded-[4.25px] pl-[11px] pr-[13px]'
            />
            <div className='flex items-center space-x-[13.28px]'>
              <div
                onClick={() => {
                  if (indexValue > 0) {
                    setIndexValue((prev) => prev - 1);
                  }
                }}
                className='flex justify-center items-center border bg-gradient-to-t from-[#F2F4F7] hover:from-[#e1e2e5] to-white border-[#CED0DA] rounded-[4px] h-[22.97px] w-[29.36px] cursor-pointer'
              >
                <img
                  src='/images/arrow_back.png'
                  className='w-[18.9px] h-fit'
                  alt=''
                />
              </div>
              <div
                onClick={() => {
                  if (indexValue < dateOptions?.length - 1) {
                    setIndexValue((prev) => prev + 1);
                  }
                }}
                className='flex justify-center items-center border bg-gradient-to-t from-[#F2F4F7] hover:from-[#e1e2e5] to-white border-[#CED0DA] rounded-[4px] h-[22.97px] w-[29.36px] cursor-pointer'
              >
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
              src={`/images/${selectChart()}`}
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
          value1={20}
          value1Name='Pending Orders'
          value2={80}
          value2Name='Reconcilled Orders'
          totalValue={100}
          totalValueName='Total Orders'
        />
        <SmallProgressCard
          title='Payments'
          value1={pendingPayment}
          value1Name='Pending Payments'
          value2={ReconcilledPayment}
          value2Name='Reconcilled Payments'
          totalValue={totalPayment}
          totalValueName='Total Payments'
        />
      </div>
    </div>
  );
};

export default BigChartRow;
