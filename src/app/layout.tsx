import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Montserrat, Mukta } from "next/font/google";
import "./globals.css";
const mukta = Mukta({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-mukta",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Acces Permis 77",
  description: "Acces Permis est une auto-école...",
  other: {
    "image-rendering": "high-quality",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.className}  ${mukta.className} `}>
      <body className={` text-primary`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
