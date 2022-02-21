import styles from "./card.module.scss";

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => {
  return <div className={styles.card}>{children}</div>;
};
