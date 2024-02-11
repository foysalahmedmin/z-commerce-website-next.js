import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-24 ">
      <h1 className="text-skin-base">Z Commerce</h1>
      <Button>
        <Link href="/login">Login</Link>
      </Button>
    </main>
  );
}
