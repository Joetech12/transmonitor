import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='bg-white flex justify-center w-full shadow-md fixed top-0 z-[9999] drawer'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content h-[60px]  ml-[30px] mr-[30px] lg:mr-[80px] w-full'>
        <div className='flex items-center justify-between navbar'>
          {/* Left */}
          <div className='flex items-center navbar-start'>
            <p className='text-[24px] font-secondaryBlack text-primary mr-[100px]'>
              TransMonitor
            </p>
            <div className='lg:items-center hidden lg:flex'>
              <img
                src={`/images/search_icon.png`}
                alt=''
                className='w-[12px] h-fit object-cover '
              />
              <input
                type='text'
                placeholder='Search...'
                className='input input-ghost w-full max-w-xs'
              />
            </div>
          </div>
          {/* right */}
          <div className='flex items-center navbar-end '>
            <div className='hidden lg:flex lg:items-center'>
              <p className='text-[14px] mr-[36.66px]'>Support</p>
              <p className='text-[14px] mr-[55px]'>FAQ</p>
              {/* notification */}
              <div className='relative mr-[48px]'>
                <div className='bg-primary absolute top-[-5px] right-[-5px] rounded-full h-[15px] w-[15px] flex justify-center items-center'>
                  <p className='text-[10px] text-white'>8</p>
                </div>
                <img
                  src={`/images/bell_icon.png`}
                  alt=''
                  className='w-[18px] h-fit object-cover'
                />
              </div>
              <div className='flex items-center space-x-[12px]'>
                <div className='flex flex-col items-end'>
                  <p className='text-[10px]'>Hello</p>
                  <p className='text-[14px] mt-[-5px]'>Oluwaleke Ojo</p>
                </div>
                <div className='avatar'>
                  <div className='w-[36px] rounded-full'>
                    <img src='/images/avatar.png' />
                  </div>
                </div>
              </div>
            </div>

            {/* mobile menu icon */}
            <div className='flex-none lg:hidden'>
              <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='inline-block w-8 h-8 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className={`drawer-side lg:hidden h-[100vh]`}>
        <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
        <div className='overflow-auto scrollbar-thin scrollbar-track-gray-200/50 scrollbar-thumb-gray-500/20 scrollbar-default h-[100%]'>
          <ul
            className={` menu p-4 w-[250px] md:w-[400px] h-[100vh] overflow-auto bg-base-100 md:text-[16px] flex flex-col space-y-[10px] md:space-y-[15px]`}
          >
            <li onClick={() => {}}>
              <Link to='/' className=''>
                Overview
              </Link>
            </li>
            <li>
              <Link to='/payments' className=''>
                All Payments
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
