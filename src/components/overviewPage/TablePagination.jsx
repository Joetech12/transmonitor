import React from 'react'

const TablePagination = () => {
  return (
    <div className='flex items-center justify-between mt-[26px]'>
        <p className='text-[13px] text-black'>Showing 1 to 10 of 500 entries</p>
        <div className='flex items-center'>
          <div className='h-29px py-[6px] px-[12px] border-[#CED0DA] border-[1.5px] rounded-tl-[2px] rounded-bl-[2px] cursor-pointer'>
            <p className='text-black text-[13px]'>Previous</p>
          </div>
          <div className='h-29px py-[6px] px-[12px] border-primary border-[1.5px]  cursor-pointer bg-primary '>
            <p className='text-white text-[13px]'>1</p>
          </div>
          <div className='h-29px py-[6px] px-[12px] border-[#CED0DA] border-[1.5px]  cursor-pointer'>
            <p className='text-black text-[13px]'>2</p>
          </div>
          <div className='h-29px py-[6px] px-[12px] border-[#CED0DA] border-[1.5px] rounded-tr-[2px] rounded-br-[2px] cursor-pointer'>
            <p className='text-black text-[13px]'>Next</p>
          </div>
        </div>
      </div>
  )
}

export default TablePagination