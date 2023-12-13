import type { Session } from "next-auth";
import { auth } from "@/auth";
import { SessionContext } from "next-auth/react";


export default function Index() {
  return (

    <div className="space-y-2">
      <h1 className="text-3xl font-bold">NextAuth.js Example (v5)</h1>
      <p>
      

        Logged IN

        Not Logged in
      </p>

    </div>
  );
}