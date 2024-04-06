const TransactionCard = ({ title, value, iconName }) => {
  return (
    <div className='bg-white rounded-[2px] py-[19px] pr-[21px] pl-[17px] min-w-[253px] w-full h-[75px] flex justify-between items-center'>
      <div className='flex flex-col space-y-[0px]'>
        <p className='text-[12px]'>{title}</p>
        <p className='text-[18px]'>{value}</p>
      </div>
      <img
        src={`/images/${iconName}`}
        className='w-[62px] h-fit object-cover'
        alt='chart_image'
      />
    </div>
  );
};

export default TransactionCard;
