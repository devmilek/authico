"use client";

import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DisplayClientSession = () => {
  const { data: session, update } = useSession();
  const router = useRouter();

  const onReloadSession = async () => {
    await update();
    toast("Session reloaded");
  };

  return (
    <div>
      <h1 className="text-2xl font-medium mb-2">Client session</h1>
      <div className="p-3 rounded-xl bg-foreground text-background">
        {JSON.stringify(session)}
      </div>
      <div className="space-x-2 mt-4">
        <Button onClick={onReloadSession}>Reload session</Button>
        <Button
          onClick={() => {
            router.refresh();
          }}
        >
          Refresh router
        </Button>
      </div>
    </div>
  );
};

export default DisplayClientSession;
