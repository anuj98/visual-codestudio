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

  useEffect(() => {
    if (isStarted) onStartProgramClick(isStarted);
  }, [isStarted]);

  function onStepClick(type, key) {
    if (type === Types.Motion) {
      switch (key) {
        case Motion.Move:
          if (rotation === 0) {
            setMarginLeft(marginLeft + 10);
          } else if (rotation < 90) {
            setMarginLeft(marginLeft + 10);
            setMarginTop(marginTop + 10);
          } else if (rotation === 90) {
            setMarginTop(marginTop + 10);
          } else if (rotation < 180) {
            setMarginLeft(marginLeft - 10);
            setMarginTop(marginTop + 10);
          } else if (rotation === 180) {
            setMarginLeft(marginLeft - 10);
          } else if (rotation < 270) {
            setMarginLeft(marginLeft - 10);
            setMarginTop(marginTop - 10);
          } else if (rotation === 270) {
            setMarginTop(marginTop - 10);
          } else if (rotation < 360) {
            setMarginLeft(marginLeft + 10);
            setMarginTop(marginTop - 10);
          }
          break;
        case Motion.TurnLeft:
          if (rotation - 15 <= 0) {
            const r = rotation - 15;
            setRotation(360 + r);
          } else {
            setRotation(rotation - 15);
          }
          break;
        case Motion.TurnRight:
          if (rotation + 15 >= 360) {
            const r = rotation + 15;
            setRotation(r - 360);
          } else {
            setRotation(rotation + 15);
          }
          break;
      }
    } else if (type === Types.Looks) {
      switch (key) {
        case Looks.SayHello:
          setShowHello(true);
          setShowForSeconds(false);
          break;
        case Looks.SayHelloSeconds:
          setShowHello(true);
          setShowForSeconds(true);
          break;
      }
    }
  }

  /**
   * This function is a callback for 'Run' button
   * @param {boolean} isStarted
   */
  function onStartProgramClick(
    isStarted = undefined,
    startIndex = undefined,
    marginLeftP = undefined,
    marginTopP = undefined,
    rotationP = undefined
  ) {
    if (!!isStarted && items.length && JSON.parse(items[0]).key !== Events.Run)
      return;
    let updatedMarginLeft = marginLeftP ?? marginLeft;
    let updatedMarginTop = marginTopP ?? marginTop;
    let updatedRotation = rotationP ?? rotation;
    let isSetTimeout = false;
    let index = 0;
    for (const item of items) {
      if (!startIndex || index >= startIndex) {
        const d = JSON.parse(item);
        if (isSetTimeout) break;
        if (d.type === Types.Motion) {
          switch (d.key) {
            case Motion.Move: {
              if (updatedRotation === 0) {
                updatedMarginLeft += 10;
              } else if (updatedRotation < 90) {
                updatedMarginLeft += 10;
                updatedMarginTop += 10;
              } else if (updatedRotation === 90) {
                updatedMarginTop += 10;
              } else if (updatedRotation < 180) {
                updatedMarginLeft -= 10;
                updatedMarginTop += 10;
              } else if (updatedRotation === 180) {
                updatedMarginLeft -= 10;
              } else if (updatedRotation < 270) {
                updatedMarginLeft -= 10;
                updatedMarginTop - 10;
              } else if (updatedRotation === 270) {
                updatedMarginTop -= 10;
              } else if (updatedRotation < 360) {
                updatedMarginLeft += 10;
                updatedMarginTop -= 10;
              }

              break;
            }
            case Motion.TurnLeft: {
              if (updatedRotation - 15 <= 0) {
                const r = updatedRotation - 15;
                updatedRotation = 360 + r;
              } else {
                updatedRotation -= 15;
              }
              break;
            }
            case Motion.TurnRight: {
              if (updatedRotation + 15 >= 360) {
                const r = updatedRotation + 15;
                updatedRotation = r - 360;
              } else {
                updatedRotation += 15;
              }
              break;
            }
          }
        } else if (d.type === Types.Controls) {
          switch (d.key) {
            case Controls.Wait: {
              isSetTimeout = true;
              break;
            }
          }
        } else if (d.type === Types.Looks) {
          switch (d.key) {
            case Looks.SayHello:
              setShowHello(true);
              setShowForSeconds(false);
              break;
            case Looks.SayHelloSeconds:
              setShowHello(true);
              setShowForSeconds(true);
              break;
          }
        }
      }
      index++;
    }
    setMarginLeft(updatedMarginLeft);
    setMarginTop(updatedMarginTop);
    setRotation(updatedRotation);
    if (isStarted && !isSetTimeout) setIsStarted(false);
    if (isSetTimeout && index < items.length) {
      setTimeout(() => {
        onStartProgramClick(isStarted, index, updatedMarginLeft, updatedMarginTop, updatedRotation);
      }, 1000);

      clearTimeout();
    }
  }

  /**
   * Function returns the styles for updating UI for sprite
   * @returns {CSSProperties}
   */
  function getSpriteStyle() {
    return {
      marginLeft: marginLeft,
      marginTop: marginTop,
      transform: `rotate(${rotation}deg)`,
    };
  }

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <StartStop isStarted={isStarted} setIsStarted={setIsStarted} />
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar onStepClick={onStepClick} />{" "}
          <MidArea
            setItems={setItems}
            items={items}
            onProgramClick={onStartProgramClick}
          />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea
            styles={getSpriteStyle()}
            onSpriteClick={
              items.length &&
              JSON.parse(items[0]).type === Types.Events &&
              JSON.parse(items[0]).key === Events.SpriteClick
                ? onStartProgramClick
                : undefined
            }
            isDialogue={showHello}
            isSeconds={showForSeconds}
            text={showHello ? "Hello!" : ""}
          />
        </div>
      </div>
    </div>
  );
}
