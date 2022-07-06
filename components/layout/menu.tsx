import Icon from "@mdi/react";
import {
  mdiAccountMultipleOutline,
  mdiClockOutline,
  mdiHammerScrewdriver,
} from "@mdi/js";
import styles from "./menu.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import { EventManager } from "../../utils/event-manager";

interface Props {
  page: string;
  menuEvent: EventManager;
}

function expandMenu() {
  const menu = document.getElementsByClassName(styles.nav)[0];
  if (!menu.classList.contains(styles.hidden)) {
    menu.classList.add(styles.hidden);
  } else {
    menu.classList.remove(styles.hidden);
  }
}

export default ({ page, menuEvent }: Props) => {
  useEffect(() => {
    menuEvent.subscribe(expandMenu);
    return () => menuEvent.unsubscribe(expandMenu);
  });

  return (
    <nav className={`${styles.nav} ${styles.hidden}`}>
      <ul>
        <li className={page === "services" ? styles.current : ""}>
          <Icon path={mdiHammerScrewdriver} />
          <Link href="/">
            <a href="/">Serviços</a>
          </Link>
        </li>
        <li className={page === "budgets" ? styles.current : ""}>
          <Icon path={mdiClockOutline} />
          <Link href="/orcamentos">
            <a>Orçamentos</a>
          </Link>
        </li>
        <li className={page === "customers" ? styles.current : ""}>
          <Icon path={mdiAccountMultipleOutline} />
          <Link href="/clientes">
            <a>Clientes</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
