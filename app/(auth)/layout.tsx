import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <div className="container h-screen flex items-center w-full max-w-md">
        {children}
      </div>
      <Button variant="ghost" className="absolute left-10 top-10 group" asChild>
        <Link href="/">
          <ChevronLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition" />
          Back
        </Link>
      </Button>
    </main>
  );
};

export default AuthLayout;
