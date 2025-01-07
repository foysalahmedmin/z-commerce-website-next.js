import Link from "next/link";

const Account = ({ className, ...props }) => {
  const links = [
    {
      label: "My Account",
      path: "/my-account",
    },

    {
      label: "Sign in / Sign Up",
      path: "/authentication/sign-in",
    },
    {
      label: "Cart",
      path: "/cart",
    },
    {
      label: "Wishlist",
      path: "/wishlist",
    },
  ];
  return (
    <div className={className} {...props}>
      <div className="mb-4">
        <strong className="inline-block text-xl">Account</strong>
      </div>
      <ul className="space-y-2">
        {links?.map((item, i) => (
          <li key={i}>
            <Link className="hover:text-primary" href={item?.path || "#"}>
              {item?.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Account;
