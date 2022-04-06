import { BaseSyntheticEvent } from "react";
import styles from "./card.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: BaseSyntheticEvent) => void;
}

export default ({ children, className, onClick }: Props) => {
  const cls = [styles.card, className].join(" ");

  return (
    <div className={cls} onClick={onClick}>
      {children}
    </div>
  );
};
