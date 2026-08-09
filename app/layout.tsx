import type { Metadata } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const nepali = Noto_Sans_Devanagari({ variable: "--font-nepali", subsets: ["devanagari"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nutrition-clarity-consultation.banjadehimal05.chatgpt.site"),
  title: {
    default: "पोषण स्पष्टता | निःशुल्क परामर्श",
    template: "%s | पोषण स्पष्टता",
  },
  description:
    "पोषण, सप्लिमेन्ट र व्यवसायसम्बन्धी स्पष्ट तथा व्यावहारिक मार्गदर्शनका लागि निःशुल्क परामर्श बुक गर्नुहोस्।",
  keywords: ["पोषण परामर्श", "सप्लिमेन्ट मार्गदर्शन", "फिटनेस पोषण", "स्वास्थ्य व्यवसाय"],
  openGraph: {
    title: "स्पष्ट पोषण तथा सप्लिमेन्ट मार्गदर्शन",
    description: "निःशुल्क व्यक्तिगत परामर्श बुक गर्नुहोस्।",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "स्पष्ट पोषण तथा सप्लिमेन्ट मार्गदर्शन",
    description: "निःशुल्क व्यक्तिगत परामर्श बुक गर्नुहोस्।",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ne">
      <body className={nepali.variable}>{children}</body>
    </html>
  );
}
