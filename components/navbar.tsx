import { ComputerIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { getServerSession } from "next-auth";
import UserButton from "./user-button";

const Navbar = async () => {
  const session = await getServerSession();
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-medium tracking-tight flex items-center"
        >
          <ComputerIcon className="h-6 w-6 mr-2" />
          <span>Authico</span>
        </Link>
        <div className="space-x-2">
          {session && session.user ? (
            // @ts-ignore
            <UserButton user={session.user} />
          ) : (
            <div>
              <Button variant="ghost" asChild>
                <Link href="/sign-in">Sign in</Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up">Create an account</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
