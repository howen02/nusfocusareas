import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Focuslah",
    description: "NUS Computer Science focus areas at a glance",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="min-h-screen flex flex-col p-6 sm:p-12 md:p-16 lg:p-24">
                    {children}
                </main>
            </body>
        </html>
    );
}
