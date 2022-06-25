import Head from "next/head";
import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";
import styles from "./main.module.scss";
import { useEffect } from "react";

interface Props {
  page: string;
  children?: React.ReactNode;
}

export class MenuClickEvent {
  private readonly subscribers: (() => void)[] = [];

  subscribe(fn: () => void): void {
    this.subscribers.push(fn);
  }

  unsubscribe(fn: () => void): void {
    const index = this.subscribers.indexOf(fn);
    if (index >= 0) {
      this.subscribers.splice(index, 1);
    }
  }

  notify(): void {
    this.subscribers.forEach((s) => s());
  }
}

function backgroundOpaque() {
  const main = document.getElementById("main");
  if (!main?.classList.contains(styles.opaque)) {
    main?.classList.add(styles.opaque);
  } else {
    main?.classList.remove(styles.opaque);
  }
}

export default ({ page, children }: Props) => {
  const menuClickEvent = new MenuClickEvent();

  useEffect(() => {
    menuClickEvent.subscribe(backgroundOpaque);

    return () => {
      menuClickEvent.unsubscribe(backgroundOpaque);
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
        <Header menuClickEvent={menuClickEvent} />
        <Menu page={page} menuClickEvent={menuClickEvent} />
        <main id="main">{children}</main>
        <Footer />
      </div>
    </>
  );
};
