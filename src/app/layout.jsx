import Provider from "@/components/provider";
import { Comfortaa, Mulish, Philosopher } from "next/font/google";
import "./globals.scss";

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
  title: "Z-Commerce",
  description: "A description of the project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          mulish.variable +
          " " +
          comfortaa.variable +
          " " +
          philosopher.variable
        }
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
