"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signInWithPassword } from "@/lib/auth/actions";

export default function loginPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2>Connexion</h2>
      <fieldset className="w-full md:w-2/3 lg:w-1/2">
        <form
          action={signInWithPassword}
          className="grid grid-cols-1 w-full gap-4"
        >
          <Input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="********"
            required
          />
          <Button>Connexion</Button>
        </form>
      </fieldset>
    </div>
  );
}
