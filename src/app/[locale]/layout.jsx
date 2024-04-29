import { locales } from "@/constants/locales";
import { Comfortaa, Mulish, Philosopher } from "next/font/google";
import { notFound } from "next/navigation";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
  adjustFontFallback: true,
});
const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
  adjustFontFallback: true,
});
const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-philosopher",
  display: "swap",
  adjustFontFallback: true,
});

export const metadata = {
  title: "Gate Invest",
  description: "Investment management made simple",
};

export function generateStaticParams() {
  return locales?.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  if (!locales?.includes(locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        className={
          mulish.variable +
          " " +
          comfortaa.variable +
          " " +
          philosopher.variable
        }
      >
        {children}
      </body>
    </html>
  );
}
