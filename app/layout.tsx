import { ReactNode } from "react";

import "./_assets/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "500", "700"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Anwar Hamad",
  description: "Anwar Hamad Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
