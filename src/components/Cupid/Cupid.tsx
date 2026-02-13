import React from "react";
import styles from "./Cupid.module.css";

type Props = {
  show?: boolean;
};

export const Cupid: React.FC<Props> = ({ show = false }) => {
  if (!show) return null;

  return (
    <div className={styles.cupidWrap} aria-hidden="true">
      <div className={styles.cupid}>
        <div className={styles.body}>
          <div className={styles.wing} />
          <div className={styles.wing} />
          <div className={styles.leg} />
          <div className={styles.leg} />
          <div className={styles.robe} />
          <div className={styles.chest} />
          <div className={styles["arm-bottom"]} />
          <div className={styles.bow} />
<div className={styles.arrow}>
  <div className={styles["arrow-head"]}>❤</div>
</div>
          <div className={styles.arrow} />
          <div className={styles["arm-top"]} />
          <div className={styles.neck} />
        </div>

        <div className={styles.head}>
          <div className={styles.face}>
            <div className={styles.mouth} />
            <div className={styles.eye} />
            <div className={styles.eye} />
            <div className={styles.cheek} />
            <div className={styles["cheek-2"]} />
          </div>
          <div className={styles.hair} />
          <div className={styles.ear} />
        </div>
      </div>
    </div>
  );
};
