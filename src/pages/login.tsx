import { type NextPage } from "next";
import Head from "next/head";
import Login from "./components/Login";

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[300vh]">
        <Login />
      </main>
    </>
  );
};

export default LoginPage;
