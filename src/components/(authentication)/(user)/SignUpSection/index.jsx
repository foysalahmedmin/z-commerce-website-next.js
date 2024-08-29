"use client";

import { Button } from "@/components/ui/Button";
import { Toggler } from "@/components/ui/Toggler";
import { signUpUser } from "@/network/auth/api";
import { AtSign, Eye, EyeOff, LockIcon, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpSection = () => {
  const router = useRouter();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("photo", photo);
      const status = await signUpUser(formData);
      if (status?.error?.status >= 400) {
        setError(status?.error?.message);
        setName("");
        setEmail("");
        setPassword("");
        setPhoto("");
      } else {
        setName("");
        setEmail("");
        setPassword("");
        setPhoto("");
        setError("");
        router.replace(`/user/sign-in`);
      }
    } catch (e) {
      setError(e?.message);
    }
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-y-4">
        <label className="block">
          <span className="font-comfortaa mb-2 block px-2 capitalize">
            Name
          </span>
          <div className="input h-8 w-full flex-row-reverse border-foreground/50 bg-background px-0">
            <input
              className="peer size-full flex-1 bg-transparent px-2 text-sm outline-none"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Name"
            />
            <span
              className="inline-grid aspect-square h-full place-items-center rounded-l border-r border-foreground/50 bg-transparent text-foreground/75 transition-all duration-500  peer-focus-within:border-foreground peer-focus-within:text-foreground"
              variant="outline"
              size="icon"
              type="button"
              asChild
            >
              <User className="size-6" strokeWidth={1} />
            </span>
          </div>
        </label>
        <label className="block">
          <span className="font-comfortaa mb-2 block px-2 capitalize">
            Email
          </span>
          <div className="input h-8 w-full flex-row-reverse border-foreground/50 bg-background px-0">
            <input
              className="peer size-full flex-1 bg-transparent px-2 text-sm outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="email"
            />
            <span
              className="inline-grid aspect-square h-full place-items-center rounded-l border-r border-foreground/50 bg-transparent text-foreground/75 transition-all duration-500  peer-focus-within:border-foreground peer-focus-within:text-foreground"
              variant="outline"
              size="icon"
              type="button"
              asChild
            >
              <AtSign className="size-6" strokeWidth={1} />
            </span>
          </div>
        </label>
        <label className="block">
          <span className="font-comfortaa mb-2 block px-2 capitalize">
            Password
          </span>
          <div className="input h-8 w-full flex-row-reverse border-foreground/50 bg-background px-0">
            <Toggler
              onClick={() => setPasswordVisible((value) => !value)}
              type="button"
              className="mr-2 rounded-full bg-transparent"
              isOn={isPasswordVisible}
              on={{
                children: (
                  <Eye
                    className="size-5 text-foreground/75 hover:text-primary"
                    strokeWidth={1}
                  />
                ),
              }}
              off={{
                children: (
                  <EyeOff
                    className="size-5 text-foreground/75 hover:text-primary"
                    strokeWidth={1}
                  />
                ),
              }}
            />
            <input
              className="peer size-full flex-1 bg-transparent px-2 text-sm outline-none"
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <span
              className="inline-grid aspect-square h-full place-items-center rounded-l border-r border-foreground/50 bg-transparent text-foreground/75 transition-all duration-500  peer-focus-within:border-foreground peer-focus-within:text-foreground"
              variant="outline"
              size="icon"
              type="button"
              asChild
            >
              <LockIcon className="size-6" strokeWidth={1} />
            </span>
          </div>
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
        <Button className="text-light" type="submit">
          Sign Up
        </Button>
      </div>
      <span className="block text-center">
        Already have an account?{" "}
        <Link
          className="font-bold text-primary underline"
          href={"/user/sign-in"}
        >
          Sign-In
        </Link>
      </span>
    </form>
  );
};

export default SignUpSection;
