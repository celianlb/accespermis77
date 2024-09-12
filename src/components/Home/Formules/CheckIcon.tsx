import React from "react";

interface CheckIconProps {
  variant: "light" | "dark";
  className?: string;
}

export const CheckIcon: React.FC<CheckIconProps> = ({
  variant,
  className = "",
}) => {
  const fillColor = variant === "light" ? "white" : "#303540";
  const checkColor = variant === "light" ? "#EEAC00" : "white";

  return (
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect y="0.225098" width="25" height="25" rx="12.5" fill={fillColor} />
      <path
        d="M20.174 9.7548L11.3206 18.6082C11.1137 18.815 10.8332 18.9311 10.5407 18.9311C10.2483 18.9311 9.96775 18.815 9.76087 18.6082L4.82253 13.6437C4.616 13.4368 4.5 13.1565 4.5 12.8642C4.5 12.5719 4.616 12.2915 4.82253 12.0847L6.20157 10.7056C6.40833 10.4997 6.68824 10.3841 6.98004 10.3841C7.27183 10.3841 7.55175 10.4997 7.75851 10.7056L10.5683 13.4306L17.2401 6.84088C17.4469 6.63478 17.7269 6.51904 18.0189 6.51904C18.3109 6.51904 18.5909 6.63478 18.7977 6.84088L20.1733 8.18821C20.2768 8.29072 20.3589 8.4127 20.415 8.54712C20.471 8.68153 20.4999 8.82572 20.5 8.97136C20.5001 9.117 20.4713 9.26121 20.4153 9.39567C20.3594 9.53014 20.2774 9.65219 20.174 9.7548Z"
        fill={checkColor}
      />
    </svg>
  );
};
