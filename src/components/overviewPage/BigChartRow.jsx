import SmallProgressCard from "./SmallProgressCard";

const BigChartRow = () => {
  return (
    <div className='flex flex-col mt-[27px] space-y-[20px] xl:space-y-[0] xl:flex-row xl:items-center xl:space-x-[4px]'>
      {/* big chart */}
      <div className='bg-white overflow-hidden pt-[26px] h-auto shrink-0  lg:h-[329px] flex flex-col justify-between'>
        <div className='flex flex-col space-y-[10px] md:space-y-0 md:flex-row  md:items-center md:justify-between mb-[38px] xl:mb-[0px] mx-[20px] lg:ml-[34px] lg:mr-[30.76px]'>
          <p className='font-bold text-[18px] text-base-200'>
            Today: 5, Aug 2018
          </p>
          <div className='flex items-center space-x-[39.23px]'>
            <div className=''>dropdown</div>
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
        <div className='w-full'>
          <img
            src='/images/big_chart.png'
            className='object-contain w-full xl:w-fit xl:h-[236.96px]'
            alt=''
          />
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
