import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HomeWork Week 14",
  description: "Home Work Week 14 Rakamin Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='mytheme'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
