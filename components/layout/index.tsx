import Head from "next/head";
import Header from "./header";
import Menu, { collapseMenu } from "./menu";
import Footer from "./footer";

interface Props {
  page: string;
  children?: React.ReactNode;
}

export default ({ page, children }: Props) => {
  return (
    <>
      <Head>
        <title>Ipanema Box</title>
        <meta name="description" content="Ipanema Box" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menuOnClick={collapseMenu} />
      <Menu page={page} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
