import { BaseSyntheticEvent } from "react";
import styles from "./table.module.scss";

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <table>{children}</table>
    </div>
  );
};
