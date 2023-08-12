import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

import NavigationBar from "@/app/_components/NavigationBar";

import "./_assets/globals.css";

const poppins = Poppins({
  weight: ["400", "700", "900"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Anwar Hamad",
  description: "Anwar Hamad Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <NavigationBar />
      </body>
    </html>
  );
}
