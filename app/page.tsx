"use client";

import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import Link from "next/link";

export default function Home() {
  const { user } = useAuth();

  return (
    <main className="text-center">
      <h1 className="flex flex-col font-bold text-center mb-5 justify-center">
        How to Add One-Time Password Phone Authentication
      </h1>

      {user ? (
        <h2>Welcome to the App as a logged in as User {user?.uid}</h2>
      ) : (
        <h2>You are not logged in</h2>
      )}

      {user ? (
        <Button onClick={() => signOut(auth)} className="mt-10">
          Sign out
        </Button>
      ) : (
        <Link href="/login">
          <Button className="mt-10">Sign In</Button>
        </Link>
      )}
    </main>
  );
}