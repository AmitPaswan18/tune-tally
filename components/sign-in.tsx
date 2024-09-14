"use client";

import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
export default function Signin() {
  return (
    <div>
      <Button
        className="w-full flex gap-2 rounded-xl font-semibold text-[14px]"
        variant="outline"
        onClick={async () => {
          await signIn("google", { callbackUrl: "/" });
        }}>
        Continue with Google
      </Button>
    </div>
  );
}
