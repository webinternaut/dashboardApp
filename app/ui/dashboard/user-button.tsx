
import { Button } from "./button";
import { auth } from "@/auth";

import { SignIn } from "../auth-components";

export default async function UserButton() {
  const session = await auth();
  return session ? (
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session.user?.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session.user?.email}
            </p>
          </div>
  
  ) : (
    <SignIn />
  );
}
