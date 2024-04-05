import { IoIosSearch } from "react-icons/io";
import { HiOutlineBell } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className='bg-white flex justify-center w-full shadow-lg fixed top-0 z-[9999]'>
      <div className='h-[60px]  flex items-center justify-between container ml-[42px] mr-[80px]'>
        {/* Left */}
        <div className='flex items-center'>
          <p className='text-[24px] font-secondaryBlack text-primary mr-[100px]'>
            TransMonitor
          </p>

          <div className='flex items-center'>
            <IoIosSearch className='text-[#0E1D25] h-[12px] w-[12px] mr-[16px]' />
            <p className='text-[12px]'>Search...</p>
          </div>
        </div>

        {/* right */}
        <div className='flex items-center space-x-[24px]'>
          <p className='text-[14px] '>Support</p>
          <p className='text-[14px]'>FAQ</p>
          <div className='relative'>
            <div className='bg-primary absolute top-[-5px] right-[-1px] rounded-full h-[15px] w-[15px] flex justify-center items-center'>
              <p className='text-[10px] text-white'>8</p>
            </div>
            <HiOutlineBell className='text-[#647787] h-[24px] w-[24px]' />
          </div>
          <div className='flex items-center space-x-[12px]'>
            <div className='flex flex-col items-end'>
              <p className='text-[10px]'>Hello</p>
              <p className='text-[14px]'>Oluwaleke Ojo</p>
            </div>
            <div className='avatar'>
              <div className='w-[36px] rounded-full'>
                <img src='/public/avatar.png' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
