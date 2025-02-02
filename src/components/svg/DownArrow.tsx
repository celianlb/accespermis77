import React from "react";

interface DownArrowProps {
  className?: string;
}

const DownArrow: React.FC<DownArrowProps> = ({ className }) => {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.175 0.912476L5 4.72914L8.825 0.912476L10 2.08748L5 7.08748L0 2.08748L1.175 0.912476Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DownArrow;
