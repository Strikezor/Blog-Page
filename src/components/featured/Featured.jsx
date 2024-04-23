import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Akshay Chaturvedi here!</b> Discover my stories and creative
        ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Places to visit in Italy during summer
          </h1>
          <p className={styles.postDesc}>
            Manarola, built on a high rock 70 metres above sea level, is one of
            the most charming and romantic of the Cinque Terre villages. The
            tiny harbor features a boat ramp, a tiny piazza and picturesque
            multicoloured houses facing the sea.You can enjoy lunch at one of
            the fish restaurants in the small square next to the harbour. The
            harbor area...
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
