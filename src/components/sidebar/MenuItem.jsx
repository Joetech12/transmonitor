import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

const MenuItem = ({ title, iconName, href }) => {
  let location = useLocation();
  const isActive = location.pathname === href;
  return (
    <li>
      <Link
        to={href}
        className={cn(
          "block hover:bg-primary/10 h-[36px] group",
          isActive && "bg-primary/10 hover:bg-primary/10"
        )}
      >
        <div className='flex h-full items-center'>
          <div
            className={cn(
              "bg-white w-[4px] h-full text-white group-hover:bg-primary/10 group-hover:text-primary/10",
              isActive &&
                "bg-primary text-primary group-hover:bg-primary group-hover:text-primary"
            )}
          >
            |
          </div>

          <div className='px-[0px] flex items-center space-x-[14.86px] ml-[20px] md:ml-[38px]'>
            <img
              src={`/images/${iconName}`}
              alt=''
              className='w-[17px] h-fit object-cover'
            />
            <p className='text-[11px] hidden md:block'>{title}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default MenuItem;
