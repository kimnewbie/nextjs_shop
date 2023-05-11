import Head from "next/head";
import Title from "components/Title";

function HomePage({ products }) {
  return (
    <>
      <Head>
        <title>Next Shop</title>
        {/* <link rel="icon" href="/icons/favicon.ico" /> */}
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <p>[TODO: display products]</p>
      </main>
    </>
  );
};

export default HomePage;
