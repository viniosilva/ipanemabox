import { BaseSyntheticEvent } from "react";
import styles from "./form.module.scss";

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
  onSubmit?: (e: BaseSyntheticEvent) => void;
}

export default ({ children, id, className, onSubmit }: Props) => {
  const cls = `${styles.form} ${className}`;

  return (
    <form id={id} className={cls} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
