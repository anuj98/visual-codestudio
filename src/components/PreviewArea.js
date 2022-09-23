import React from "react";
import CatSprite from "./CatSprite";
import Icon from "./Icon";

export default function PreviewArea(props) {
  return (
    <div className={"flex-none h-full overflow-y-auto p-2"}>
      <div
        style={{
          marginLeft: props.styles.marginLeft,
          marginTop: props.styles.marginTop,
        }}
      >
        <Icon
          name="comment-alt"
          size={55}
          className={`text-gray-300 ml-7 mt-2 block ${
            !!props.isSeconds && !!props.isDialogue
              ? "animate-hide-two"
              : !!props.isDialogue
              ? ""
              : "hidden"
          }`}
          text={props.text}
        />
        <CatSprite
          onSpriteClick={props.onSpriteClick}
          styles={{
            transform: props.styles.transform,
          }}
        />
      </div>
    </div>
  );
}
