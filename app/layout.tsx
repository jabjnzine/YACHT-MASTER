import type { Metadata } from "next";
import {
  Playfair_Display,
  Montserrat,
  Noto_Sans_Thai,
  Noto_Serif_Thai,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const notoSerifThai = Noto_Serif_Thai({
  variable: "--font-noto-serif-thai",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://yachtmaster.co.th";
const siteTitle = "Yacht Master — เช่าเรือยอชต์หรู กระบี่ | Luxury Yacht Charter Krabi, Thailand";
const siteDescription =
  "Yacht Master บริการเช่าเรือยอชต์คาตามารันส่วนตัวสุดหรูในกระบี่ ทะเลอันดามัน — ล่องเรือชมพระอาทิตย์ตก ดำน้ำดูปะการัง คายัคใส เกาะไก่ ทะเลแหวก พร้อมบริการมาตรฐานสากล. Private luxury catamaran charter in Krabi, Thailand.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Yacht Master",
  },
  description: siteDescription,
  keywords: [
    "เช่าเรือยอชต์ กระบี่",
    "เช่ายอชต์",
    "ล่องเรือยอชต์",
    "เรือคาตามารัน กระบี่",
    "ทัวร์เกาะไก่",
    "ทะเลแหวก",
    "ล่องเรือชมพระอาทิตย์ตก กระบี่",
    "yacht charter Krabi",
    "luxury yacht Thailand",
    "private catamaran charter",
    "sunset cruise Krabi",
    "Yacht Master",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Yacht Master",
    title: siteTitle,
    description: siteDescription,
    locale: "th_TH",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/assets/hero-sunset-yacht.jpg",
        width: 1280,
        height: 960,
        alt: "Yacht Master — เรือยอชต์หรูกลางทะเลอันดามันยามพระอาทิตย์ตก กระบี่",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/hero-sunset-yacht.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${playfair.variable} ${notoSerifThai.variable} ${montserrat.variable} ${notoSansThai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
