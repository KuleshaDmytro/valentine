import React, { useMemo } from "react";
import styles from "./FloatingHearts.module.css";

type Heart = {
  id: number;
  left: number;
  size: number;
  delay: number;
  drift: number;
  rotate: number;
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type Props = {
  count?: number;
  speedSec?: number;
};

export const FloatingHearts: React.FC<Props> = ({ count = 27, speedSec = 7 }) => {
  const hearts = useMemo<Heart[]>(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: rand(0, 100),
        size: rand(24, 44),
        delay: rand(0, speedSec),
        drift: rand(-30, 30),
        rotate: rand(-20, 20),
      })),
    [count, speedSec]
  );

  return (
    <div className={styles.layer} aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className={styles.heart}
          style={
            {
              left: `${h.left}%`,
              fontSize: `${h.size}px`,
              animationDuration: `${speedSec}s`,
              animationDelay: `-${h.delay}s`,
              "--drift": `${h.drift}px`,
              "--rot": `${h.rotate}deg`,
            } as React.CSSProperties
          }
        >
          <span className={styles.heart}>♥</span>
        </span>
      ))}
    </div>
  );
};
