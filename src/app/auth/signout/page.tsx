import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

export default function signOut({}: Props) {
  return (
    <main>
      <h1>Are you sure you want to Logout</h1>
      <Button>
        <Link href={"/auth/signout"}>Logout</Link>
      </Button>
    </main>
  );
}
