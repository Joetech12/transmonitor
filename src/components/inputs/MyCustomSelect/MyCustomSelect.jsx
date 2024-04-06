import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import OutsideClickDetector from "./useOutsideClick";
import { cn } from "../../../lib/utils";

const MyCustomSelect = ({
  value,
  setValue,
  options = [],
  defaultValue,
  icon,
  styles,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <OutsideClickDetector onOutsideClick={closeDropdown}>
      <div className='relative'>
        <div
          className={cn(
            "appearance-none border-[1.5px] bg-base-100 border-[#CED0DA] h-[35px] w-[150px] text-[13px] pl-[16px] pr-[13px] py-2 rounded-[2px] focus:outline-none focus:border-[#CED0DA] flex items-center justify-between cursor-pointer",
            styles
          )}
          onClick={() => {
            toggleDropdown();
          }}
        >
          <p className='text-[13px] text-[#414042] select-none'>
            {value || defaultValue?.value}
          </p>
          {!!icon && icon}
        </div>

        <div
          className={`z-[80] absolute shadow-md ${
            isOpen ? "block" : "hidden"
          } duration-300`}
        >
          {options?.map((op, i) => {
            return (
              <div
                key={op.value}
                onClick={() => {
                  setValue(op.value);
                  toggleDropdown();
                }}
                className={cn(
                  "bg-white  hover:bg-[#F4F4F4] h-[33px] w-[150px] pl-[16px] pr-[13px] py-2 flex items-center justify-between cursor-pointer",
                  styles
                )}
              >
                <p className='text-[13px] text-[#414042] select-none'>
                  {op?.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </OutsideClickDetector>
  );
};

export default MyCustomSelect;
