export const sessionOptions = {
  password: process.env.SECRET_KEY,
  cookieName: "gate_invest",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};
