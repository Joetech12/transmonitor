const SmallProgressCard = ({
  title,
  value1,
  value1Name,
  value2,
  value2Name,
  totalValue,
  totalValueName,
}) => {
  const w1 = `${100 - (value1 / (value1 + value2) * 100).toFixed(0)}%`;
  const w2 = `${100 - (value2 / (value1 + value2) * 100).toFixed(0)}%`;

  

  return (
    <div className='bg-white  rounded-[2px] pt-[21px] pb-[24px] pr-[47px] pl-[25px] h-[162px] w-full flex flex-col space-y-[11px]'>
      <p className='text-[14px] font-bold'>{title}</p>
      <div className='relative'>
        <div
          className={`bg-secondary h-[4px] rounded-[10px] w-[${w2}] absolute top-0 z-[20]`}
          style={{ width: w1 }}
        ></div>
        <div
          className={`bg-accent h-[4px] rounded-[10px] w-[100%] absolute top-0`}
        ></div>
      </div>
      <p className='text-[14px]'>
        {value1Name}: <span className='text-accent font-bold'>{value1}</span>
      </p>
      <p className='text-[14px]'>
        {value2Name}: <span className='text-secondary font-bold'>{value2}</span>
      </p>
      <p className='text-[14px]'>
        {totalValueName}:{" "}
        <span className='text-primary font-bold'>{totalValue}</span>
      </p>
    </div>
  );
};

export default SmallProgressCard;
