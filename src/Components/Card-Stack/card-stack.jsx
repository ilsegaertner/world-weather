import React, { useState } from "react";
import { useSprings, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import styles from "./styles.module.css";

const cards = [
  "https://github.com/ilsegaertner/world-weather/blob/main/src/assets/story.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
];

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: 0,
  delay: i * 100,
});

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const CardStack = () => {
  const [positions, setPositions] = useState(cards.map(() => ({ x: 0, y: 0 })));
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    x: positions[i].x,
    y: positions[i].y,
    config: { friction: 50, tension: 500 },
  }));

  const bind = useDrag(({ args: [index], down, movement: [mx, my] }) => {
    // Update the position state on drag
    setPositions((prev) => {
      const newPositions = [...prev];
      newPositions[index] = { x: mx, y: my };
      return newPositions;
    });

    // Update the spring animation with the new position
    api.start((i) => {
      if (index !== i) return;
      return { x: mx, y: my, scale: down ? 1.1 : 1 };
    });
  });

  return (
    <>
      {props.map(({ x, y, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: scale.to((s) => `scale(${s})`),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </>
  );
};

export default CardStack;
