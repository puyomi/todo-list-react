import React from "react";
import styles from "./PageTemplate.module.scss";

const PageTemplate = ({ children }) => {
  return (
    <div className={styles.pageTemplate}>
      <h1>일정 관리</h1>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default PageTemplate;
