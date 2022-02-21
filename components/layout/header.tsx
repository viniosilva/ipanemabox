import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import styles from "./header.module.scss";

interface Props {
  menuOnClick: () => void;
}

export default ({ menuOnClick }: Props) => {
  return (
    <header className={styles.header}>
      <button className={styles.menu} onClick={menuOnClick}>
        <Icon path={mdiMenu} title="Menu" />
      </button>
      <h1>Ipanema Box</h1>
    </header>
  );
};
