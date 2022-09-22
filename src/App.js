import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import StartStop from "./components/StartStop";
import { Controls, Events, Looks, Motion, Types } from "./components/data";

export default function App() {
  // At a time single program can be created i.e. we cannot be multiple events
  const [isStarted, setIsStarted] = useState(false);
  const [items, setItems] = useState([]);
  const [rotation, setRotation] = useState(0);
  const [marginLeft, setMarginLeft] = useState(10);
  const [marginTop, setMarginTop] = useState(10);
  const [showHello, setShowHello] = useState(false);
  const [showForSeconds, setShowForSeconds] = useState(false);
  const [repeatStep, setRepeatStep] = useState(-1);
  // const [spriteStyle, setSpriteStyle] = useState("");

  useEffect(() => {
    if (isStarted) onProgramClick(isStarted);
  }, [isStarted]);

  function onStepClick(key, from) {
    switch (key) {
      case Motion.Move:
        setClassStyles("");
        break;
      case Motion.TurnLeft:
        setClassStyles("");
        break;
      case Motion.TurnRight:
        setClassStyles("");
        break;
      case Looks.SayHello:
        // Show say hello class
        break;
      case Looks.SayHelloSeconds:
        // Show say hello for 2 seconds class
        break;
    }
  }

  function onProgramClick(isStarted = null) {
    if (!!isStarted && items.length && JSON.parse(items[0]).key !== Events.Run)
      return;
    items.forEach((item, index) => {
      if (repeatIndex === -1) {
        const d = JSON.parse(item);
        switch (d.key) {
          case Motion.Move: {
            if (marginLeft > 0 || marginTop > 0) {
              setMarginLeft(marginLeft + 10);
              marginTop(marginTop + 10);
            } else {
              setMarginLeft(marginLeft + 10);
            }
            break;
          }
          case Motion.TurnLeft: {
            updatedRotation -= 15;
            break;
          }
          case Motion.TurnRight: {
            updatedRotation -= 15;
            break;
          }
          case Controls.Wait: {
            setTimeout(1000);
            break;
          }
          case Controls.Repeat: {
            repeatIndex = index + 1;
            break;
          }
        }
      }
    });
  }

  function getSpriteStyle() {
    let style = "";
    if (marginLeft) {
      style = `${style}margin-left: ${marginLeft}px; `;
    } else if (marginTop) {
      style = `${style}margin-top: ${marginTop}px; `;
    } else if (rotation) {
      style = `${style} transform: rotate(${rotation}deg); `;
    }
  }

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <StartStop setIsStarted={setIsStarted} />
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar onStepClick={onStepClick} />{" "}
          <MidArea
            setItems={setItems}
            items={items}
            onProgramClick={onProgramClick}
          />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div>
  );
}
