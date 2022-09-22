import React from "react";
import { Types } from "./data";

export default function Step(props) {
  /**
   * Function returns the style classes by type of event.
   * @returns {string}
   */
  function getStepWrapperStyle() {
    let classes =
      "flex flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer";
    switch (props.type) {
      case Types.Events:
        classes = `${classes} bg-yellow-400`;
        return classes;
      case Types.Motion:
        classes = `${classes} bg-blue-500`;
        return classes;
      case Types.Controls:
        classes = `${classes} bg-yellow-600`;
        return classes;
      case Types.Looks:
        classes = `${classes} bg-blue-700`;
        return classes;
    }
  }

  /**
   * Function checks is a string value is number
   * @param {string} value
   * @returns {boolean}
   */
  function isNumber(value) {
    return !isNaN(parseFloat(value)) && !isNaN(value - 0);
  }

  /**
   * Functions returns content of a step to be rendered as a stringified HTML
   * @returns {string}
   */
  function getStepHtml() {
    const initial = props.name.indexOf("{0}");
    let a = props.name ?? "";
    if (isNumber(props.name.slice(initial + 1, initial + 2))) {
      a = a.replace(
        "{0}",
        // Here class was not working so used inline styles
        `<svg style="color:${props.color}; margin-left: 0.5rem; margin-right: 0.5rem; fill: currentColor" width="15px" height="15px"><use xlink:href="/icons/solid.svg#${props.iconName}" /></svg>`
      );
    }

    return a;
  }

  return (
    <div
      className={getStepWrapperStyle()}
      dangerouslySetInnerHTML={{ __html: getStepHtml() }}
      onClick={props.onClick ? props.onClick : undefined}
    ></div>
  );
}
