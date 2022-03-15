import React from "react";

import * as styles from "./button.css";

export const Button: React.FunctionComponent = ({ children }) => {
  return (
    <button className={styles.button}>{children}</button>
  );
};