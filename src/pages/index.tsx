import { type NextPage } from "next";
import Head from "next/head";
import Hero from "./components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[300vh]">
        <Hero />
      </main>
    </>
  );
};

export default Home;
