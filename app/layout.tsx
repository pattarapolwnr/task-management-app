import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Management",
  description: "A task management web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        {/* Main Container */}
        <div className="w-full min-h-screen relative flex flex-col items-center">
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* Content Section */}
          <section className="flex flex-col items-center w-full lg:bg-center lg:bg-repeat-y lg:min-h-[730px] lg:bg-mainBGlg xl:bg-mainBGxl">
            <div className="mt-14 md:max-w-2xl">{children}</div>
          </section>
        </div>
      </body>
    </html>
  );
}
