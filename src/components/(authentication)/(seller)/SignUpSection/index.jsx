"use client";

import { Button } from "@/components/ui/Button";
import { Toggler } from "@/components/ui/Toggler";
import { signUpUser } from "@/network/auth/api";
import { Eye, EyeOff } from "lucide-react";
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
      formData.append("role", "student");
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
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-y-4">
        {/*<div className="flex cursor-pointer justify-center text-center">*/}
        {/*  <label className="relative size-24 rounded-full border border-primary bg-primary/5 p-1">*/}
        {/*    <input*/}
        {/*      className="hidden"*/}
        {/*      type="file"*/}
        {/*      onChange={(e) => setPhoto(e.target.files[0])}*/}
        {/*      name="image"*/}
        {/*      placeholder="image"*/}
        {/*    />*/}
        {/*    <Image*/}
        {/*      className="h-full w-full rounded-full"*/}
        {/*      alt="profile-image"*/}
        {/*      src="/images/svg/user.svg"*/}
        {/*      width={96}*/}
        {/*      height={96}*/}
        {/*    />*/}
        {/*    <span className="absolute bottom-0 right-0 transform rounded-full bg-primary text-white">*/}
        {/*      <Plus />*/}
        {/*    </span>*/}
        {/*  </label>*/}
        {/*</div>*/}
        <label className="block">
          <span className="font-comfortaa mb-2 block px-2 capitalize">
            Name
          </span>
          <div className="h-10 overflow-hidden rounded-full border border-primary focus-within:bg-primary/5">
            <input
              className="h-full w-full flex-1 rounded-full bg-transparent px-6 outline-none"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Name"
            />
          </div>
        </label>
        <label className="block">
          <span className="font-comfortaa mb-2 block px-2 capitalize">
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
          <span className="font-comfortaa mb-2 block px-2 capitalize">
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
              className="mr-4"
              isOn={isPasswordVisible}
              on={{ children: <Eye className="text-primary" /> }}
              off={{ children: <EyeOff className="text-primary" /> }}
            />
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
        <Button type="submit">Sign Up</Button>
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
