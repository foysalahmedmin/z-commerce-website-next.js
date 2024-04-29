import { locales } from "@/constants/locales";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: [...locales],
  defaultLocale: locales[0],
});

export const config = {
  matcher: ['/', '/(bn|en)/:path*']
};
