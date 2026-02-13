import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./ValentineCard.module.css";
import { AcceptedValentineCard } from "./AcceptedValentineCard";

type Props = {
  name?: string;
  onYes?: () => void;
};

export const ValentineCard: React.FC<Props> = ({
  onYes,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const noBtnRef = useRef<HTMLButtonElement | null>(null);

  const [accepted, setAccepted] = useState(false);
  const [noTransform, setNoTransform] = useState<string>("");

  const triggerRadius = 80;
  const push = 80;
  const minScale = 0.6;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const noBtn = noBtnRef.current;
    if (!noBtn) return;

    const rect = noBtn.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const dx = e.clientX - btnCenterX;
    const dy = e.clientY - btnCenterY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < triggerRadius) {
      const nx = dx / (distance || 1);
      const ny = dy / (distance || 1);

      const moveX = -nx * push;
      const moveY = -ny * push;

      setNoTransform(`translate(${moveX}px, ${moveY}px) scale(${minScale})`);
    } else {
      setNoTransform("");
    }
  };

  const playMusic = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        `${import.meta.env.BASE_URL}valentine_vibe.mp3`
      );
      audioRef.current.volume = 0.6;
      audioRef.current.loop = true;
    }

    try {
      await audioRef.current.play();
    } catch (err) {
      console.log("Audio blocked:", err);
    }
  };

  const handleYes = () => {
    setAccepted(true);
    onYes?.();

    void playMusic();
  };

  if (accepted) {
    return (
      <AcceptedValentineCard />
    );
  }

  if (!audioRef.current) {
   audioRef.current = new Audio(
      `${import.meta.env.BASE_URL}valentine_vibe.mp3`
    );
    audioRef.current.volume = 0.6;
    audioRef.current.loop = true;
  }


  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1 className={`${styles.h1} ${styles.paddingBtm}`}>Want a little Valentine’s surprise?❤️</h1>

      <div className={styles.cardButtons}>
        <div className={styles.cardButton}>
          <motion.button
            className={`${styles.btn} ${styles.btnPrimary}`}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={handleYes}
            type="button"
          >
            Yes
          </motion.button>
        </div>

        <div className={styles.cardButton}>
          <button
            ref={noBtnRef}
            className={styles.btn}
            style={{ transform: noTransform }}
            type="button"
            aria-hidden="true"
            tabIndex={-1}
          >
            No
          </button>
        </div>
      </div>

      <div className={styles.footer}>
        Made with ❤️
        <br/> Dmytro
      </div>
    </motion.div>
  );
};
