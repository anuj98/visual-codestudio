import React from "react";
import Icon from "./Icon";

export default function StartStop(props) {
  return (
    <>
      <button
        type="button"
        className="p-1 rounded-md mb-2 hover:bg-blue-300"
        title="Run"
        onClick={() => props.setIsStarted(true)}
        disabled={props.isStarted}
      >
        <Icon name="flag" size={30} className="text-green-600" />
      </button>
      
      {/* TODO: To be implemented 
      <button
        type="button"
        className="p-1 rounded-md hover:bg-blue-100"
        title="Stop"
        onClick={() => setIsStarted(false)}
      >
        <Icon name="stop" size={30} className="text-red-600" />
      </button> */}
    </>
  );
}
