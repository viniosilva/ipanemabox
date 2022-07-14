import Head from "next/head";
import styles from "./layout.module.scss";
import { useEffect, useState } from "react";
import { EventManager } from "../utils/event-manager";
import Icon from "@mdi/react";
import {
  mdiAccountMultipleOutline,
  mdiClockOutline,
  mdiHammerScrewdriver,
  mdiMenu,
} from "@mdi/js";
import Link from "next/link";

interface Props {
  page: string;
  customerModalEvent?: EventManager;
  children?: React.ReactNode;
}

export default ({ page, customerModalEvent, children }: Props) => {
  const [year] = useState(new Date().getFullYear());
  const menuEvent = new EventManager();

  function backgroundOpaque() {
    const main = document.getElementById("main");
    if (!main?.classList.contains(styles.opaque)) {
      main?.classList.add(styles.opaque);
    } else {
      main?.classList.remove(styles.opaque);
    }
  }

  function expandMenu() {
    const menu = document.getElementsByClassName(styles.nav)[0];
    if (!menu.classList.contains(styles.hidden)) {
      menu.classList.add(styles.hidden);
    } else {
      menu.classList.remove(styles.hidden);
    }
  }

  useEffect(() => {
    menuEvent.subscribe(backgroundOpaque);
    menuEvent.subscribe(expandMenu);
    customerModalEvent?.subscribe(backgroundOpaque);

    return () => {
      menuEvent.unsubscribe(backgroundOpaque);
      menuEvent.unsubscribe(expandMenu);
      customerModalEvent?.unsubscribe(backgroundOpaque);
    };
  });

  return (
    <>
      <Head>
        <title>Ipanema Box</title>
        <meta name="description" content="Ipanema Box" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <header className={styles.header}>
          <button className={styles.btnMenu} onClick={() => menuEvent.notify()}>
            <Icon path={mdiMenu} title="Menu" />
          </button>
          <h1>Ipanema Box</h1>
        </header>

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

        <main id="main">{children}</main>

        <footer className={styles.footer}>
          <span>{`${year}`} © Ipanema Box</span>
        </footer>
      </div>
    </>
  );
};
