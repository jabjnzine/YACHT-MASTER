import Image from "next/image";
import Reveal from "./Reveal";

const items = [
  {
    src: "/assets/hero-sunset-yacht.jpg",
    alt: "เรือยอชต์ยามเย็น",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/assets/sup-celebration.jpg",
    alt: "สนุกกับ Paddle board และคายัคใสกลางทะเล",
    span: "row-span-2",
  },
  {
    src: "/assets/catamaran-aerial-pool.jpg",
    alt: "มุมสูงเรือคาตามารันพร้อมสระน้ำท้ายเรือ",
    span: "row-span-2",
  },
  {
    src: "/assets/friends-party.jpg",
    alt: "กลุ่มเพื่อนฉลองบนดาดฟ้าเรือหน้าผาหินปูน",
    span: "col-span-2",
  },
  {
    src: "/assets/fruit-dessert.jpg",
    alt: "ผลไม้สดและของหวานพรีเมียมบนเรือ",
    span: "row-span-2",
  },
  { src: "/assets/orange-sunset.jpg", alt: "พระอาทิตย์ตกสีส้ม", span: "row-span-2" },
  {
    src: "/assets/brand-flag.jpg",
    alt: "ธง Yacht Master บนหัวเรือ",
    span: "col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-28">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <Reveal className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[5px] text-silver">
            Gallery
          </p>
          <h2 className="mt-3.5 font-serif-brand text-[clamp(30px,4vw,46px)] font-medium leading-[1.25] tracking-[1px] text-navy">
            ช่วงเวลาที่ถูกบันทึกไว้กลางทะเล
          </h2>
          <div className="mx-auto my-6 h-px w-14 bg-navy" />
        </Reveal>

        <Reveal className="mt-14">
          <div className="grid auto-rows-[230px] grid-cols-2 gap-3.5 lg:grid-cols-4">
            {items.map((item) => (
              <a
                key={item.src}
                href={item.src}
                target="_blank"
                className={`group relative block overflow-hidden ${item.span ?? ""}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  sizes="(max-width: 1024px) 45vw, 300px"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
