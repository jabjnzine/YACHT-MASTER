import Image from "next/image";
import Reveal from "./Reveal";

const stats = [
  { num: "500+", label: "ทริปที่สำเร็จ" },
  { num: "10+", label: "เส้นทางเกาะ" },
  { num: "100%", label: "มาตรฐานความปลอดภัย" },
];

const thaiStory = [
  "Yacht Master ก่อตั้งขึ้นจากความหลงใหลในเรือยอชต์ และความตั้งใจที่จะยกระดับประสบการณ์การล่องเรือของประเทศไทยให้ก้าวสู่มาตรฐานระดับสากล",
  "เราเชื่อว่าการเดินทางทางทะเลไม่ควรเป็นเพียงการเดินทางจากจุดหนึ่งไปยังอีกจุดหนึ่ง แต่ควรเป็นประสบการณ์ที่เต็มไปด้วยความสะดวกสบาย ความงดงาม การบริการที่ใส่ใจ และช่วงเวลาที่น่าประทับใจตั้งแต่วินาทีแรกที่ก้าวขึ้นเรือ",
  "ด้วยแรงบันดาลใจจากเรือยอชต์ชั้นนำของโลก เราจึงพิถีพิถันในทุกรายละเอียด ตั้งแต่การออกแบบเรือที่เรียบหรู พื้นที่ใช้สอยที่กว้างขวาง สิ่งอำนวยความสะดวกที่ครบครัน ไปจนถึงการบริการที่อบอุ่นและเป็นมืออาชีพ เพื่อให้ทุกการเดินทางเป็นไปอย่างราบรื่น ผ่อนคลาย และน่าจดจำ",
  "ไม่ว่าคุณจะเดินทางเพื่อเฉลิมฉลองโอกาสสำคัญ ใช้เวลาคุณภาพกับครอบครัว หรือเพียงต้องการหลีกหนีจากความวุ่นวายในชีวิตประจำวัน เราเชื่อว่าความหรูหราที่แท้จริงไม่ได้อยู่ที่ความฟุ่มเฟือย แต่อยู่ที่รายละเอียดเล็ก ๆ ที่ได้รับการใส่ใจอย่างสมบูรณ์แบบ",
  "วันนี้ เรามีความภาคภูมิใจที่ได้ต้อนรับนักเดินทางจากทั่วทุกมุมโลก ให้มาสัมผัสเสน่ห์ของท้องทะเลและความงดงามของประเทศไทย ผ่านประสบการณ์การล่องเรือที่ได้รับการออกแบบด้วยมาตรฐานระดับสากล พร้อมการบริการที่อบอุ่นในแบบไทย และความใส่ใจในทุกรายละเอียด",
  "เรามุ่งมั่นที่จะพัฒนาและยกระดับการล่องเรือในประเทศไทยอย่างต่อเนื่อง เพื่อให้ทุกการเดินทางไม่ใช่เพียงวันพักผ่อน แต่เป็นประสบการณ์อันทรงคุณค่าที่จะอยู่ในความทรงจำตลอดไป",
];

const englishStory = [
  "Yacht Master was born from a genuine passion for yachting and a vision to elevate Thailand's yachting experience to international standards.",
  "We believe that a journey at sea should be far more than traveling from one place to another. It should be an experience defined by comfort, elegance, thoughtful service, and unforgettable moments from the very first step aboard.",
  "Inspired by the world's finest yachts, we pay meticulous attention to every detail—from elegant design and spacious living areas to modern amenities and warm, professional hospitality. Every element is carefully considered to ensure that each voyage is seamless, relaxing, and truly memorable.",
  "Whether you are celebrating a special occasion, spending quality time with your family, or simply seeking an escape from everyday life, we believe that true luxury is never about extravagance. It is found in the thoughtful details, genuine care, and exceptional experiences that make every journey unforgettable.",
  "Today, we are proud to welcome travelers from around the world to discover the charm of the sea and the beauty of Thailand through carefully crafted yachting experiences, delivered with world-class standards, authentic Thai hospitality, and an unwavering commitment to excellence.",
  "As we continue to grow, our mission remains unchanged—to continuously raise the standard of luxury yachting in Thailand and create journeys that are remembered long after they have ended.",
];

export default function About() {
  return (
    <section id="about" className="bg-sand py-24 lg:py-28">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        {/* Section head */}
        <Reveal className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[5px] text-silver">
            About Us · เกี่ยวกับเรา
          </p>
          <h2 className="mx-auto mt-3.5 max-w-[860px] font-serif-brand text-[clamp(30px,4vw,46px)] font-medium leading-[1.3] tracking-[1px] text-navy">
            ทุกการเดินทางที่ยิ่งใหญ่
            <br />
            ล้วนเริ่มต้นจากความฝัน
          </h2>
          <p className="mt-4 font-serif-brand text-lg italic text-graphite/70">
            Every great journey begins with a dream.
          </p>
          <div className="mx-auto my-7 h-px w-14 bg-navy" />
          <p className="mx-auto max-w-[620px] text-[15px]">
            สำหรับหลายคน... ทะเลคือจุดหมายปลายทาง
            <br />
            แต่สำหรับเรา... <strong className="font-medium text-navy">ทะเลคือวิถีแห่งการใช้ชีวิต</strong>
          </p>
        </Reveal>

        {/* Thai story + images */}
        <div className="mt-16 grid items-center gap-14 lg:mt-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-[70px]">
          <Reveal>
            {thaiStory.map((p) => (
              <p key={p.slice(0, 20)} className="mb-4 text-[15px]">
                {p}
              </p>
            ))}
            <div className="mt-9 flex flex-wrap gap-8 lg:gap-14">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif-brand text-[40px] font-semibold text-navy">
                    {s.num}
                  </div>
                  <div className="text-[11px] uppercase tracking-[2.5px] text-silver">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="relative h-[420px] w-full lg:h-[560px]">
              <Image
                src="/assets/yacht-chicken-island.jpg"
                alt="เรือยอชต์คาตามารันหรูของ Yacht Master หน้าเกาะไก่ จังหวัดกระบี่"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 550px"
              />
            </div>
            <div className="absolute -bottom-14 -left-[70px] hidden h-[280px] w-[46%] border-8 border-sand shadow-[0_18px_46px_rgba(10,31,54,0.22)] lg:block">
              <Image
                src="/assets/catamaran-guests.jpg"
                alt="แขกผู้เข้าพักบนเรือคาตามารันของ Yacht Master กลางทะเลอันดามัน"
                fill
                className="object-cover"
                sizes="260px"
              />
            </div>
          </Reveal>
        </div>

        {/* Closing pull quote */}
        <Reveal className="mt-20 text-center lg:mt-24">
          <p className="mx-auto max-w-[720px] font-serif-brand text-[clamp(19px,2.4vw,26px)] leading-[1.7] text-navy">
            เพราะจุดหมายปลายทาง...เป็นเพียงส่วนหนึ่งของการเดินทาง
            <br />
            <em className="italic">
              แต่ประสบการณ์ระหว่างทาง...คือสิ่งที่จะอยู่กับคุณตลอดไป
            </em>
          </p>
        </Reveal>

        {/* English version */}
        <Reveal>
          <div lang="en" className="mt-20 border-t border-silver/40 pt-14 lg:mt-24">
            <h3 className="font-serif-brand text-[clamp(22px,2.6vw,30px)] font-medium tracking-[1px] text-navy">
              Every Great Journey Begins with a Dream.
            </h3>
            <p className="mt-3 font-serif-brand italic text-graphite/70">
              For many, the sea is simply a destination. For us, it is a way of
              life.
            </p>
            <div className="mt-8 gap-10 text-[14px] leading-[1.85] text-graphite/85 md:columns-2">
              {englishStory.map((p) => (
                <p key={p.slice(0, 20)} className="mb-4 break-inside-avoid">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
