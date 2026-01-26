import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import SideBar from "../components/layout/admin/SideBar";
import AuthGuard from "../components/layout/admin/AuthGuard";

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SportOn Admin",
  description: "Admin Dashboard for SportOn Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased bg-gray-50`}>
        <div className="flex min-h-screen">
          <SideBar />
          <main className="flex-1 ml-80 pt-6 pb-20 px-10 min-h-screen">
            <div className="max-w-7xl mx-auto">
              <AuthGuard>{children}</AuthGuard>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}