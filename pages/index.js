import Head from "next/head";

function HomePage({ products }) {
  return (
    <>
      <Head>
        <title>Next Shop</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <main>
        <h1>Next Shop</h1>
      </main>
    </>
  );
};

export default HomePage;