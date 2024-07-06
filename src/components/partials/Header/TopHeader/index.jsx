import Link from "next/link";

const TopHeader = () => {
  return (
    <div className="h-10">
      <div className="container flex h-full items-center justify-between">
        <div>
          <p>Welcome to Z-Commerce</p>
        </div>
        <div className="flex items-center divide-x">
          <Link
            href="/seller/sign-up"
            className="group flex items-center gap-1 pr-2 hover:text-primary"
          >
            Become a Seller
          </Link>
          <Link
            href="/seller/sign-in"
            className="group flex items-center gap-1 px-2 hover:text-primary"
          >
            Sign-in To Seller
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
