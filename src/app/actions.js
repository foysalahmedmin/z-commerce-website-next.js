"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const addCookie = async (data) => {
  const cookiesData = await cookies();
  // Awaiting cookiesData for setting values
  cookiesData.set("z-access-token", data?.accessToken);
  cookiesData.set("z-refresh-token", data?.refreshToken);
  cookiesData.set("z-role", data?.role);
};

export const handleLogout = async () => {
  const cookiesData = await cookies();
  // Awaiting cookiesData for deleting values
  cookiesData.delete("z-access-token");
  cookiesData.delete("z-refresh-token");
  cookiesData.delete("z-role");
  redirect(`/`);
};

export const routespa = async () => {
  redirect(`/profile`);
};
