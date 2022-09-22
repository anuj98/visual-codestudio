/**
 * Types for different events or control statements or styles
 */
export const Types = {
  Motion: 0,
  Looks: 1,
  Events: 2,
  Controls: 3,
};

export const Events = {
  Run: 0,
  SpriteClick: 1,
};

export const Motion = {
  Move: 0,
  TurnLeft: 1,
  TurnRight: 2,
};

export const Looks = {
  SayHello: 0,
  SayHelloSeconds: 1,
};

export const Controls = {
  Wait: 0,
  Repeat: 1,
};

/**
 * All the types and names listed as array
 */
export const data = [
  {
    type: Types.Events,
    children: [
      {
        key: Events.Run,
        name: "when {0} clicked",
        icon: "flag",
      },
      {
        key: Events.SpriteClick,
        name: "when this sprite clicked",
      },
    ],
  },
  {
    type: Types.Controls,
    children: [
      {
        key: Controls.Wait,
        name: "wait 1 seconds",
      },
      {
        key: Controls.Repeat,
        name: "repeat 10",
      },
    ],
  },
  {
    type: Types.Looks,
    children: [
      {
        key: Looks.SayHello,
        name: "say Hello!",
      },
      {
        key: Looks.SayHelloSeconds,
        name: "say Hello! for 2 seconds",
      },
    ],
  },
  {
    type: Types.Motion,
    children: [
      {
        key: Motion.Move,
        name: "Move 10 steps",
      },
      {
        key: Motion.TurnLeft,
        name: "Turn {0} 15 degrees",
        icon: "undo",
      },
      {
        key: Motion.TurnRight,
        name: "Turn {0} 15 degrees",
        icon: "redo",
      },
    ],
  },
];
