import { useState } from "react";
import styles from "./footer.module.scss";

export default () => {
  const [year] = useState((new Date()).getFullYear())

  return (
    <footer className={styles.footer}>
      <span>{`${year}`} © Ipanema Box</span>
    </footer>
  );
};
