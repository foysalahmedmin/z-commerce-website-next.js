"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const addCookie = async (data) => {
  cookies().set("z-access-token", data?.accessToken);
  cookies().set("z-refresh-token", data?.refreshToken);
  cookies().set("z-role", data?.role);
};

export const handleLogout = async ({ locate }) => {
  cookies().delete("z-access-token");
  cookies().delete("z-refresh-token");
  cookies().delete("z-role");
  redirect(`/${locate}`);
};

export const routespa = ({ locale }) => {
  redirect(`/${locale}/profile`);
};
