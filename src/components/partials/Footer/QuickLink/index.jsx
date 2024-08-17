import Link from "next/link";

const QuickLink = ({ className, ...props }) => {
  const links = [
    {
      label: "Privacy Policy",
      path: "/privacy-policy",
    },

    {
      label: "Terms Of Use",
      path: "/terms-and-condition",
    },
    {
      label: "FAQ",
      path: "/faq",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className={className} {...props}>
      <div className="mb-4">
        <strong className="inline-block text-xl">Quick Link</strong>
      </div>
      <ul className="space-y-2">
        {links?.map((item, i) => (
          <li key={i}>
            <Link className="hover:text-primary" href={item?.path}>
              {item?.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLink;
