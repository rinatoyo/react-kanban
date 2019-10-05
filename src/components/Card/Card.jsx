import React from "react";
import styles from "./Card.module.css";

const Card = function(props) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>Title: {props.title}</div>

      <div>Body: {props.body}</div>

      <div className={styles.priority}>Priority: {props.priority}</div>

      <div>Created by: {props.created_by}</div>

      <div className={styles.assigned_to}>Assigned to: {props.assigned_to}</div>
    </div>
  );
};

export default Card;
