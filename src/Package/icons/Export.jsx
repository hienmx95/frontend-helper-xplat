import React from 'react'

const Export = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 13.93 16"
    >
      <path
        fill="#5c6a82"
        d="M6.287 15.707l-3.325-3.395a.994.994 0 011.4-1.407L5.5 12.05c.259.261.469.174.469-.193V7.294a.992.992 0 111.984 0v4.563c0 .366.21.454.469.193l1.143-1.15a.994.994 0 011.4 1.407L7.677 15.7a.965.965 0 01-1.39.007zM1.99 2.323v1.989a1 1 0 11-1.99 0V1.325A1.328 1.328 0 011.327 0H12.6a1.328 1.328 0 011.33 1.325v2.987a1 1 0 11-1.99 0V2.323a.33.33 0 00-.331-.333H2.321a.332.332 0 00-.331.333z"
        transform="rotate(180 6.965 8)"
      ></path>
    </svg>
  );
}

export default Export
