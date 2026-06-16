"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/submitButton";
import { signUp } from "@/lib/auth";
import { useActionState } from "react";

const signupForm = () => {
  const [state, action] = useActionState(signUp, undefined)

  return (
    <form action={action}>
      <div className="flex flex-col gap-2">
        {state?.message && <p className="text-red-500">{state.message}</p>}
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name..."
          />
        </div>
        {state?.error?.name && <p className="text-red-500">{state.error.name}</p>}

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email..."
          />
        </div>
        {state?.error?.email && <p className="text-red-500">{state.error.email}</p>}

        <div>
          <Label htmlFor="password">password</Label>
          <Input
            id="password"
            name="password"
            type="text"
            placeholder="Enter your password..."
          />
        </div>
        {state?.error?.password && (
          <ul>
            {state.error.password.map((error) => (
              <li key={error} className="text-red-500 text-sm">{error}</li>
            ))}
          </ul>
        )}

        <SubmitButton>Sign up</SubmitButton>
      </div>
    </form>
  );
};

export default signupForm;
