import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ambru Club | AI explicat simplu",
  description:
    "O comunitate gratuită unde descoperi tool-uri AI, prompturi, ghiduri și idei practice pentru muncă, învățare și creație.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
