import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import styles from "./header.module.scss";
import { MenuClickEvent } from ".";

interface Props {
  menuClickEvent: MenuClickEvent;
}

export default ({ menuClickEvent }: Props) => {
  return (
    <header className={styles.header}>
      <button className={styles.btnMenu} onClick={() => menuClickEvent.notify()}>
        <Icon path={mdiMenu} title="Menu" />
      </button>
      <h1>Ipanema Box</h1>
    </header>
  );
};
