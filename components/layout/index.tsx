import Head from "next/head";
import Header from "./header";

type Props = {
  children?: React.ReactNode;
};

export default ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Ipanema Box</title>
        <meta name="description" content="Ipanema Box" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
};
