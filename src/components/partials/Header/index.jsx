import { getUserByToken } from "@/network/auth/api";
import { cookies } from "next/headers";
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";

const Header = async () => {
  const access = cookies().get("z-access-token");
  const user = access?.value && (await getUserByToken(access?.value));
  return (
    <>
      <TopHeader access={access} user={user} />
      <Navigation access={access} user={user} />
    </>
  );
};

export default Header;
