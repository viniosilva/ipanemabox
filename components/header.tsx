import styles from "./header.module.scss";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export default ({ title, children }: Props) => {
  return (
    <header className={styles.header}>
      <h2>{title}</h2>
      <div className={styles.options}>{children}</div>
    </header>
  );
};
