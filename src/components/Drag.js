import React from "react";

export default function Drag(props) {
  const startDrag = (ev) => {
    ev.dataTransfer.setData("drag-item", JSON.stringify(props.dataItem));
  };

  return (
    <div draggable onDragStart={startDrag}>
      {props.children}
    </div>
  );
};
