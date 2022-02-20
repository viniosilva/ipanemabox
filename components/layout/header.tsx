import { MdMenu } from "react-icons/md";
import styles from "./header.module.scss"

export default () => {
  return (
    <header className={styles.header}>
      <MdMenu className={styles.menu} />
      <h1>Ipanema Box</h1>
    </header>
  );
};
