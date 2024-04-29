import { getUserByToken } from "@/network/auth/api";
import { cookies } from "next/headers";
import Navigation from "./Navigation";

const Header = async () => {
  const access = cookies().get("z-access-token");
  const user = access?.value && (await getUserByToken(access?.value));
  return (
    <>
      <Navigation access={access} user={user} />  
    </>
  );
};

export default Header;
