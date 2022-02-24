import Head from "next/head";
import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";
import style from "./main.module.scss";
import { useEffect } from "react";

interface Props {
  page: string;
  children?: React.ReactNode;
}

export class MenuPublisher {
  private readonly subscribers: (() => void)[] = [];

  subscribe(fn: () => void): void {
    this.subscribers.push(fn);
  }

  notify(): void {
    this.subscribers.forEach((s) => s());
  }
}

function expandMenu() {
  const main = document.getElementById("main");
  if (!main?.classList.contains(style.opaque)) {
    main?.classList.add(style.opaque);
  } else {
    main?.classList.remove(style.opaque);
  }
}

export default ({ page, children }: Props) => {
  const menuPublisher = new MenuPublisher();

  useEffect(() => {
    menuPublisher.subscribe(expandMenu);
  });

  return (
    <>
      <Head>
        <title>Ipanema Box</title>
        <meta name="description" content="Ipanema Box" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menuPublisher={menuPublisher} />
      <Menu page={page} menuPublisher={menuPublisher} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};
