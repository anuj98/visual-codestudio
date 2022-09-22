import React from "react";
import Drag from "./Drag";
import { Controls, data, Events, Looks, Motion, Types } from "./data";
import Step from "./Step";

export default function Sidebar(props) {
  function getStepToRender(type, key, color = null) {
    const d = data
      .find((d) => d.type === type)
      .children.find((c) => c.key === key);

    return (
      <Drag dataItem={{ type: type, key: key }}>
        <Step name={d.name} type={type} iconName={d.icon} color={color} onClick={props.onStepClick} />
      </Drag>
    );
  }
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      {getStepToRender(Types.Events, Events.Run, "green")}
      {getStepToRender(Types.Events, Events.SpriteClick)}
      <div className="font-bold"> {"Looks"} </div>
      {getStepToRender(Types.Looks, Looks.SayHello)}
      {getStepToRender(Types.Looks, Looks.SayHelloSeconds)}
      <div className="font-bold"> {"Motion"} </div>
      {getStepToRender(Types.Motion, Motion.Move)}
      {getStepToRender(Types.Motion, Motion.TurnLeft, "white")}
      {getStepToRender(Types.Motion, Motion.TurnRight, "white")}
      <div className="font-bold"> {"Control"} </div>
      {getStepToRender(Types.Controls, Controls.Wait)}
      {getStepToRender(Types.Controls, Controls.Repeat)}
    </div>
  );
}
