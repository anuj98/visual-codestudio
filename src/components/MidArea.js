import React from "react";
import Drop from "./Drop";
import Step from "./Step";
import { data, Types } from "./data";

export default function MidArea(props) {
  function onItemDropped(item) {
    const d = JSON.parse(item);
    if (
      (d.type === Types.Events &&
        !props.items.some((i) => JSON.parse(i).type === Types.Events)) ||
      d.type !== Types.Events
    )
      props.setItems([...props.items, item]);
  }
  function getIconColor(icon) {
    switch (icon) {
      case "flag":
        return "green";
      case "undo":
      case "redo":
        return "white";
      default:
        return "";
    }
  }
  function getStepToRender(type, key) {
    const d = data
      .find((d) => d.type === type)
      .children.find((c) => c.key === key);

    return (
      <Step
        name={d.name}
        type={type}
        iconName={d.icon}
        color={getIconColor(d.icon ?? "")}
      />
    );
  }
  return (
    <div className="flex-1 h-full overflow-auto">
      <Drop onItemDropped={onItemDropped}>
        <div className="mx-2" onClick={props.onProgramClick}>
          {props.items?.length > 0 ? (
            props.items.map((item, index) => {
              const a = JSON.parse(item);
              return (
                <div style={{ width: "fit-content" }} key={index}>
                  {getStepToRender(a.type, a.key)}
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </Drop>
    </div>
  );
}
