import MenuItem from "./MenuItem";

const FullSideBar = () => {
  return (
    <div className='min-h-screen lg:h-screen bg-white shadow-md pt-[33px] lg:sticky lg:top-[60px]'>
      <div className='ml-[30px] btn btn-secondary font-secondaryBold tracking-[0.2px] rounded-[30px] text-[12px] text-white  w-[163px] hidden lg:flex'>
        GENERATE INVOICE
      </div>

      {/* main section */}
      <div className='lg:mt-[32px] mb-[35px]'>
        <p className='text-[11px] ml-[20px] md:ml-[42px]'>Main</p>

        <ul className='pt-[14px] grow'>
          <MenuItem href='/' iconName='overview_icon.png' title='Overview' />
        </ul>
      </div>

      {/* payments section */}
      <div className='mb-[31px]'>
        <p className='text-[11px] ml-[20px] md:ml-[42px]'>Payments</p>
        <ul className='pt-[14px] md:grow'>
          <MenuItem
            href='/all-payments'
            iconName='wallet_icon.png'
            title='All Payments'
          />
          <MenuItem
            href='/reconcilled-payments'
            iconName='wallet_icon2.png'
            title='Reconcilled Payments'
          />
          <MenuItem
            href='/unreconcilled-payments'
            iconName='wallet_icon3.png'
            title='Un - Reconcilled Payments'
          />
          <MenuItem
            href='/manual-settlement'
            iconName='manual_icon.png'
            title='Manual Settlement'
          />
        </ul>
      </div>

      {/* orders section */}
      <div className='mb-[0px]'>
        <p className='text-[11px] ml-[20px] md:ml-[42px]'>Orders</p>
        <ul className='py-4 md:grow'>
          <MenuItem href='#' iconName='order_icon.png' title='All Orders' />
          <MenuItem
            href='#'
            iconName='order_icon2.png'
            title='Pending Orders'
          />
          <MenuItem
            href='#'
            iconName='order_icon3.png'
            title='Reconcilled Orders'
          />
        </ul>
      </div>

      {/* orders section */}
      <div className=''>
        {/* <p className='text-[11px] ml-[42px]'>Orders</p> */}
        <ul className='md:grow'>
          <MenuItem
            href='#'
            iconName='merchant_icon.png'
            title='Merchant Profile'
          />
        </ul>
      </div>
    </div>
  );
};

export default FullSideBar;
