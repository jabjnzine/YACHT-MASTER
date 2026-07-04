import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import QuoteBand from "@/components/QuoteBand";
import Yacht from "@/components/Yacht";
import VideoSection from "@/components/VideoSection";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://yachtmaster.club/#business",
  name: "Yacht Master",
  alternateName: "Yacht Master — Luxury Yacht Experiences",
  description:
    "บริการเช่าเรือยอชต์คาตามารันส่วนตัวสุดหรูในกระบี่ ทะเลอันดามัน ประเทศไทย — Private luxury catamaran charter in Krabi, Thailand.",
  url: "https://yachtmaster.club",
  image: "https://yachtmaster.club/assets/hero-sunset-yacht.jpg",
  email: "info@yachtmaster.club",
  telephone: "+66811362680",
  priceRange: "฿฿฿",
  address: {
    "@type": "PostalAddress",
    addressLocality: "อ่าวน้ำเมา",
    addressRegion: "กระบี่",
    addressCountry: "TH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 8.0417,
    longitude: 98.9857,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Private Yacht Charter — เช่าเรือยอชต์ส่วนตัว",
        description:
          "ล่องเรือคาตามารันส่วนตัวสู่เกาะไก่ เกาะปอดะ ทะเลแหวก พร้อมกิจกรรมคายัคใส ดำน้ำดูปะการัง และชมพระอาทิตย์ตก",
        areaServed: "Krabi, Thailand",
      },
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <About />
      <Experiences />
      <QuoteBand />
      <Yacht />
      <VideoSection />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
