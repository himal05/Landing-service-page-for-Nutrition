import type { Metadata } from "next";
import { Geist, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nutrition-consultation.example"),
  title: {
    default: "Nutrition Clarity | Free Consultation",
    template: "%s | Nutrition Clarity",
  },
  description:
    "Book a free consultation for clear nutrition, supplement, and practical business guidance.",
  keywords: ["nutrition consultation", "supplement guidance", "fitness nutrition", "wellness business"],
  openGraph: {
    title: "Clear Nutrition & Supplement Guidance",
    description: "Book your free one-to-one consultation.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Clear Nutrition and Supplement Guidance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clear Nutrition & Supplement Guidance",
    description: "Book your free one-to-one consultation.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${geist.variable}`}>{children}</body>
    </html>
  );
}
