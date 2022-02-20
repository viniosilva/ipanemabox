import styles from "./header.module.scss"

interface Props {
  title: string;
}

export default ({ title }: Props) => {
  return (
    <header className={styles.header}>
      <h2>{title}</h2>
    </header>
  );
};
