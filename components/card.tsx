import styles from "./card.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default ({ children, className }: Props) => {
  const cls = [styles.card, className].join(" ");

  return <div className={cls}>{children}</div>;
};
