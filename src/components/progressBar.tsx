import React, { useState, useEffect } from "react";

const CustomProgressBar = (props: { value: any; }) => {
  const [progress, setProgress] = useState(0);

  const {value} = props
  // Simulate progress
  useEffect(() => {
    setProgress(value)
  }, [value]);


  return (
    <div style={{ width: "100%", backgroundColor: "#FFFFFF0F" }}>
      <div
        style={{
          height: "12px",
          width: `${progress}%`,
          background: "linear-gradient(to right, #5851E8, #D6D3FF)", // Gradient color,  // Set custom color here
          borderRadius: "5px",
          transition: "width 1s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default CustomProgressBar;