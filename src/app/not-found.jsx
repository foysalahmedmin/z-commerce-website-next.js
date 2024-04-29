"use client";

import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-background text-white">
      <div className="container">
        <div className="mx-auto max-w-[768px] px-6 text-center">
          <div className="mb-12">
            <div className="mx-auto mb-4 flex items-center justify-center">
              <Image
                src="/images/svg/error.svg"
                width={150}
                height={150}
                alt="error"
              />
            </div>
            <strong className="mb-4 inline-block font-comfortaa text-base uppercase tracking-[.2rem] text-primary">
              404
            </strong>
            <h1 className="mb-4 text-xl font-bold lg:text-3xl">Not Found</h1>
            <p className="font-comfortaa text-base">
              This page is not founded.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            {/*<Link href={"/" + localeActive}>*/}
            {/*  <Button variant="outline">Go to Home</Button>*/}
            {/*</Link>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
