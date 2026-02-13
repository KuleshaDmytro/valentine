import { motion } from "framer-motion";
import styles from "./ValentineCard.module.css";
import { Cupid } from "../Cupid/Cupid";

export const AcceptedValentineCard: React.FC<{ resultImgSrc?: string }> = ({
    resultImgSrc,
}) => {
    return (
        <div style={{position:"relative"}}>
            <Cupid show={true}/>
            <motion.div
                className={styles.card}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
            >
                <h1 className={styles.h1}>Success!</h1>
               <div style={{padding: "0 60px"}}>
                 <p className={styles.p}>May this day bring you smiles, warmth, and a little bit of magic 💕</p>
               </div>
             
                {resultImgSrc ? (
                    <img className={styles.resultImg} src={resultImgSrc} alt="result" />
                ) : null}
            </motion.div>
        </div>
    )
}