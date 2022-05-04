import { BaseSyntheticEvent } from "react";
import styles from "./card.module.scss";

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
  onClick?: (e: BaseSyntheticEvent) => void;
}

export default ({ children, id, className, onClick }: Props) => {
  const cls = `${styles.card} ${className}`;

  return (
    <div id={id} className={cls} onClick={onClick}>
      {children}
    </div>
  );
};
