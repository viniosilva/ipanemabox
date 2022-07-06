import Head from "next/head";
import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";
import styles from "./main.module.scss";
import { useEffect } from "react";
import { EventManager } from "../../utils/event-manager";

interface Props {
  page: string;
  customerModalEvent?: EventManager;
  children?: React.ReactNode;
}

function backgroundOpaque() {
  const main = document.getElementById("main");
  if (!main?.classList.contains(styles.opaque)) {
    main?.classList.add(styles.opaque);
  } else {
    main?.classList.remove(styles.opaque);
  }
}

export default ({ page, customerModalEvent, children }: Props) => {
  const menuEvent = new EventManager();

  useEffect(() => {
    menuEvent.subscribe(backgroundOpaque);
    customerModalEvent?.subscribe(backgroundOpaque);

    return () => {
      menuEvent?.unsubscribe(backgroundOpaque);
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
        <Header menuEvent={menuEvent} />
        <Menu page={page} menuEvent={menuEvent} />
        <main id="main">{children}</main>
        <Footer />
      </div>
    </>
  );
};
