import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubham Jain — SDE-2 | Full Stack Engineer",
  description:
    "Portfolio of Shubham Jain, Software Development Engineer 2 at Innovaccer. Building high-performance web products with React, Next.js, Node.js and TypeScript.",
  keywords: [
    "Shubham Jain",
    "SDE-2",
    "Full Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Innovaccer",
    "MakeMyTrip",
  ],
  authors: [{ name: "Shubham Jain" }],
  openGraph: {
    title: "Shubham Jain — Full Stack Engineer",
    description:
      "SDE-2 at Innovaccer · Top 0.5% LeetCode · 9.11 CGPA · 3+ years shipping features at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="cursor" />
        <div id="cursor-ring" />
        {children}
      </body>
    </html>
  );
}
