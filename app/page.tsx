import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import Signin from "@/components/sign-in";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session, "on to the serevre");
  return (
    <div>
      <Signin />
    </div>
  );
}
