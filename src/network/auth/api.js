import { urls } from "@/lib/base";

export const signUpUser = async (data) => {
  try {
    const res = await fetch(`${urls?.url}/api/auth/user-sign-up`, {
      method: "POST",
      body: data,
    });
    return await res.json();
  } catch (err) {
    return err;
  }
};

export const signInUser = async (data) => {
  const res = await fetch(`${urls?.url}/api/auth/user-sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const getUserByToken = async (token) => {
  const res = await fetch(`${urls?.url}/api/auth/get-user-by-token`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error(`Could not find home content for ${urls?.url}`);
  }
  return res.json();
};
