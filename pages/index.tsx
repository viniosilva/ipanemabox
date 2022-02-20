import Head from "next/head";
import Header from "../components/header"

export default () => {
  return (
    <>
      <Head>
        <title>Ipanema Box</title>
        <meta name="description" content="Ipanema Box" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <p>Hello world! (:</p>
      </main>
    </>
  );
};
