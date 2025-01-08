import { getUserByToken } from "@/network/auth/api";
import { cookies } from "next/headers";
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";

const Header = async () => {
  const cookiesData = await cookies();
  const access = cookiesData?.get("z-access-token");

  const user = access?.value ? await getUserByToken(access.value) : null;

  return (
    <>
      <TopHeader access={access} user={user} />
      <Navigation access={access} user={user} />
    </>
  );
};

export default Header;
