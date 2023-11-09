import DisplayClientSession from "@/components/display-client-session";
import DisplayServerSession from "@/components/display-server-session";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-8 space-y-8">
      <DisplayClientSession />
      <DisplayServerSession />
    </main>
  );
}
