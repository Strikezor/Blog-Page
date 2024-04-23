import React from "react";
import Link from "next/link";
import styles from "./menuPosts.module.css";
import Image from "next/image";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="Harbour" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Most beautiful Harbour in the World
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Alex Dunphy - </span>
            <span className={styles.date}>14.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="Harbour" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Most beautiful Harbour in the World
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Alex Dunphy - </span>
            <span className={styles.date}>14.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="Harbour" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Most beautiful Harbour in the World
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Alex Dunphy - </span>
            <span className={styles.date}>14.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="Harbour" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Most beautiful Harbour in the World
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Alex Dunphy - </span>
            <span className={styles.date}>14.03.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
