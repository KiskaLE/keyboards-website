import type { NextComponentType } from "next";
import { useSession, signIn, signOut } from "next-auth/react";

const Login: NextComponentType = () => {
  const { data: session } = useSession();
  if (session) {
    return <button onClick={(): unknown => signOut()}>Sign in</button>;
  }
  return (
    <>
      <button onClick={(): unknown => signIn()}>Sign in</button>
    </>
  );
};

export default Login;
