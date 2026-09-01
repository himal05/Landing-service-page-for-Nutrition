import type { Metadata } from "next";
import { Geist, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nutrition-clarity-consultation.banjadehimal05.chatgpt.site"),
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
      <body className={`${manrope.variable} ${geist.variable}`}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '27968151812877567');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            alt=""
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=27968151812877567&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
