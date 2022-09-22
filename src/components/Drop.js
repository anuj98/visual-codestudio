import React from "react";

export default function Drop(props) {
  function dragOver(ev) {
    ev.preventDefault();
  }

  function drop(ev) {
    const droppedItem = ev.dataTransfer.getData("drag-item");
    if (droppedItem) {
      props.onItemDropped(droppedItem);
    }
  }

  return (
    <div draggable onDragOver={dragOver} onDrop={drop} className="w-full h-full">
      {props.children}
    </div>
  );
}
