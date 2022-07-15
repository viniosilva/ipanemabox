import { BaseSyntheticEvent } from "react";
import styles from "./form.module.scss";

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
  onSubmit?: (e: BaseSyntheticEvent) => void;
}

export default ({ children, onSubmit }: Props) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
