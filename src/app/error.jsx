"use client";

import errorImage from "@/assets/images/svg/error.svg";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const Error = ({ error, reset }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-background text-white">
      <div className="container">
        <div className="mx-auto max-w-[768px] px-6 text-center">
          <div className="mb-12">
            <div className="mx-auto mb-4 flex items-center justify-center">
              <Image src={errorImage} width={150} height={150} alt="error" />
            </div>
            <strong className="font-comfortaa mb-4 inline-block text-base uppercase tracking-[.2rem] text-primary">
              There was a problem
            </strong>
            <h1 className="mb-4 text-xl font-bold lg:text-3xl">
              {error.message}
            </h1>
            <p className="font-comfortaa text-base">
              Please try again latter or contact support if the problem
              persists.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Button onClick={() => reset()}>Try Again</Button>
            <Link href={"/"} replace>
              <Button variant="outline">Go to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
