import TransactionCard from "./TransactionCard";

const TransactionRow = () => {
  return (
    <div className='flex flex-col space-y-[15px] md:space-y-[10px] xl:space-y-[0] xl:flex-row xl:items-center xl:space-x-[37px]'>
      <div className='flex flex-col space-y-[10px] md:space-y-0 md:flex-row md:items-center md:space-x-[10px] grow '>
        <TransactionCard
          title='Daily Transaction Volume'
          value='2,342'
          iconName='small_chart1.png'
        />
        <TransactionCard
          title='Daily Transaction Value'
          value='₦4,000,000'
          iconName='small_chart1.png'
        />
      </div>
      <div className='flex flex-col space-y-[10px] md:space-y-0 md:flex-row md:items-center md:space-x-[10px] grow '>
        <TransactionCard
          title='Total Transaction Volume'
          value='452,000'
          iconName='small_chart1.png'
        />
        <TransactionCard
          title='Total Transaction Value'
          value='₦4,000,000'
          iconName='small_chart1.png'
        />
      </div>
    </div>
  );
};

export default TransactionRow;
