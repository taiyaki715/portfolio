import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "./components/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
        <body
          className="antialiased flex flex-col bg-gradient-to-r from-teal-50 to-blue-100"
        >
          <Providers className="">
            {/* ヘッダー */}
            <div className="sticky top-0">
              <Header />
            </div>
            {/* メインコンテンツ */}
            <main className="my-12 mx-16">
              {children}
            </main>
          </Providers>
        </body>
    </html>
  );
}