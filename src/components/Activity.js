import React from "react";
import { Link } from "react-router-dom";
import styles from "./Activity.module.css";

const Activity = ({ activity }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={activity.image} alt={activity.title} />
      <div className={styles.content}>
        <h2 className={styles.title}>{activity.title}</h2>
        <p className={styles.description}>{activity.description}</p>
        <Link to="/contact" className={styles.button}>
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Activity;
