import React from "react";

export default function Icon({
  name,
  size = 20,
  className = "",
  text = "",
}) {
  return (
    <svg
      className={`fill-current ${className}`}
      width={size.toString() + "px"}
      height={size.toString() + "px"}
    >
      <use xlinkHref={`/icons/solid.svg#${name}`} />
      {text.length && (
        <text x="5" y="27" fontFamily="Verdana" fontSize="14" fill="black">
          {text}
        </text>
      )}
    </svg>
  );
}
