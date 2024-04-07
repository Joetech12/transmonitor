import React, { useEffect, useRef } from "react";

const useOutsideClick = (ref, callback) => {
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

const OutsideClickDetector = ({ children, onOutsideClick }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, onOutsideClick);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickDetector;
