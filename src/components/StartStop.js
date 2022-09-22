import React from "react";
import Icon from "./Icon";

export default function StartStop({ setIsStarted }) {
  return (
    <>
      <button
        type="button"
        className="p-1 rounded-md hover:bg-blue-100"
        title="Run"
        onClick={() => setIsStarted(true)}
      >
        <Icon name="flag" size={30} className="text-green-600" />
      </button>
      <button
        type="button"
        className="p-1 rounded-md hover:bg-blue-100"
        title="Stop"
        onClick={() => setIsStarted(false)}
      >
        <Icon name="stop" size={30} className="text-red-600" />
      </button>
    </>
  );
}
