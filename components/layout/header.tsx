import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import styles from "./header.module.scss";
import { EventManager } from "../../utils/event-manager";

interface Props {
  menuEvent: EventManager;
}

export default ({ menuEvent }: Props) => {
  return (
    <header className={styles.header}>
      <button
        className={styles.btnMenu}
        onClick={() => menuEvent.notify()}
      >
        <Icon path={mdiMenu} title="Menu" />
      </button>
      <h1>Ipanema Box</h1>
    </header>
  );
};
