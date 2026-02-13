import { motion } from "framer-motion";
import styles from "./ValentineCard.module.css";
import { Cupid } from "../Cupid/Cupid";
import { useEffect, useState } from "react";

export const AcceptedValentineCard: React.FC = ({}) => {
    const [imgReady, setImgReady] = useState(false);
    useEffect(() => {
        const img = new Image();
        img.src = `${import.meta.env.BASE_URL}opening2.png`;
    }, []);
    console.log(`${import.meta.env.BASE_URL}opening2.png`);
    
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

                <img 
                    className={styles.resultImg} 
                    src={`${import.meta.env.BASE_URL}opening2.png`}
                    onLoad={() => setImgReady(true)}
                        style={{
                            width: "100%",
                            opacity: imgReady ? 1 : 0,
                            transition: "opacity .25s ease",
                        }
                    }
                    alt="result" />
            </motion.div>
        </div>
    )
}