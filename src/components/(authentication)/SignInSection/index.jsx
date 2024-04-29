"use client";

import { addCookie } from "@/app/actions";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Toggler } from "@/components/ui/Toggler";
import { signInUser } from "@/network/auth/api";
import { Eye, EyeOff } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignInSection = ({ params }) => {
  const router = useRouter();
  const localeActive = useLocale();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const payload = { email, password };
      const status = await signInUser(payload);
      if (status?.error?.status >= 400) {
        setError(status?.error?.message);
      } else {
        await addCookie(status);
        setEmail("");
        setPassword("");
        setError("");
        router.push(`/${params?.locale}`);
      }
    } catch (e) {
      setError(e?.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-y-4">
        <label className="block">
          <span className="mb-2 block px-2 font-comfortaa capitalize">
            Email
          </span>
          <div className="h-10 overflow-hidden rounded-full border border-primary focus-within:bg-primary/5">
            <input
              className="h-full w-full flex-1 rounded-full bg-transparent px-6 outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
            />
          </div>
        </label>
        <label className="block">
          <span className="mb-2 block px-2 font-comfortaa capitalize">
            Password
          </span>
          <div className="flex h-10 items-center overflow-hidden rounded-full border border-primary focus-within:bg-primary/5">
            <input
              className="h-full w-full flex-1 rounded-full bg-transparent px-6 outline-none"
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Toggler
              onClick={() => setPasswordVisible((value) => !value)}
              type="button"
              isTrue={isPasswordVisible}
              trueContent={<Eye className="text-primary" />}
              falseContent={<EyeOff className="text-primary" />}
            />
          </div>
        </label>
        <label className="inline-flex cursor-pointer items-center gap-2 px-2">
          <Checkbox name="is-keep-signed-in" />
          <span className="inline-block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Keep it signed in.
          </span>
        </label>
      </div>
      {error && (
        <label className="mt-6 inline-flex cursor-pointer items-center gap-2 px-2">
          <span className="inline-block text-sm font-medium leading-none text-red-600 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {error}
          </span>
        </label>
      )}

      <div className="my-6 text-center">
        <Button type="submit">Sign In</Button>
      </div>
      <span className="block text-center">
        Do not have an account?{" "}
        <Link
          className="font-bold text-primary underline"
          href={"/" + localeActive + "/sign-up"}
        >
          Sign-Up
        </Link>
      </span>
    </form>
  );
};

export default SignInSection;
