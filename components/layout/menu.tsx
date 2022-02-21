import Icon from "@mdi/react";
import {
  mdiAccountMultipleOutline,
  mdiClockOutline,
  mdiHammerScrewdriver,
} from "@mdi/js";
import styles from "./menu.module.scss";

export default () => {
  return (
    <nav className={`${styles.nav} ${styles.hidden}`}>
      <ul>
        <li className={styles.current}>
          <Icon path={mdiHammerScrewdriver} />
          <span>Serviços</span>
        </li>
        <li>
          <Icon path={mdiClockOutline} />
          <span>Orçamentos</span>
        </li>
        <li>
          <Icon path={mdiAccountMultipleOutline} />
          <span>Clientes</span>
        </li>
      </ul>
    </nav>
  );
};

export function collapseMenu() {
  const menu = document.getElementsByClassName(styles.nav)[0];

  if (menu.classList.contains(styles.hidden)) {
    menu.classList.remove(styles.hidden);
  } else {
    menu.classList.add(styles.hidden);
  }
}
