import Image from "next/image";
import Reveal from "./Reveal";

const experiences = [
  {
    no: "01",
    title: "Crystal Kayaking",
    desc: "พายคายัคลำใสท่ามกลางผาหินปูนและน้ำทะเลสีมรกต สัมผัสธรรมชาติแบบใกล้ชิดในมุมที่เรือใหญ่เข้าไม่ถึง",
    img: "/assets/crystal-kayak.jpg",
    alt: "พายคายัคใสกลางทะเล",
  },
  {
    no: "02",
    title: "Paddle Board",
    desc: "ลอยตัวเหนือผืนน้ำใสราวกระจก กับกิจกรรม SUP board ที่ทั้งผ่อนคลายและได้ภาพสวยระดับนิตยสาร",
    img: "/assets/paddle-board.jpg",
    alt: "Paddle board กลางทะเล",
  },
  {
    no: "03",
    title: "Snorkeling",
    desc: "ดำน้ำตื้นชมแนวปะการังและฝูงปลาหลากสี ในจุดดำน้ำที่กัปตันผู้ชำนาญเส้นทางคัดเลือกให้โดยเฉพาะ",
    img: "/assets/snorkeling-coral.jpg",
    alt: "ดำน้ำดูปะการัง",
  },
  {
    no: "04",
    title: "Island Swimming",
    desc: "กระโดดลงว่ายน้ำกลางอ่าวส่วนตัวหน้าเกาะไก่ พร้อมอุปกรณ์ความปลอดภัยครบครันและทีมงานดูแลตลอดเวลา",
    img: "/assets/island-swimming.jpg",
    alt: "ว่ายน้ำเล่นหน้าเกาะไก่",
  },
  {
    no: "05",
    title: "Sunset Champagne",
    desc: "ชนแก้วฉลองช่วงเวลาโกลเด้นอาวร์ พร้อมค็อกเทลและของว่างระดับพรีเมียมบนดาดฟ้าเรือ",
    img: "/assets/sunset-champagne.jpg",
    alt: "แชมเปญยามพระอาทิตย์ตก",
  },
  {
    no: "06",
    title: "Golden Hour Cruise",
    desc: "ล่องเรือชมพระอาทิตย์ตกหลังเกาะปอดะ ช่วงเวลาที่งดงามที่สุดของทะเลอันดามัน ปิดท้ายวันอย่างสมบูรณ์แบบ",
    img: "/assets/golden-hour.jpg",
    alt: "พระอาทิตย์ตกทะเลกระบี่",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 lg:py-28">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <Reveal className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[5px] text-silver">
            Signature Experiences
          </p>
          <h2 className="mt-3.5 font-serif-brand text-[clamp(30px,4vw,46px)] font-medium leading-[1.25] tracking-[1px] text-navy">
            ประสบการณ์ที่เราคัดสรรเพื่อคุณ
          </h2>
          <div className="mx-auto my-6 h-px w-14 bg-navy" />
        </Reveal>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp) => (
            <Reveal key={exp.no}>
              <div className="group relative overflow-hidden bg-navy">
                <div className="relative h-[460px]">
                  <Image
                    src={exp.img}
                    alt={exp.alt}
                    fill
                    className="object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:opacity-55"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
                  />
                </div>
                <span className="absolute left-6 top-5 font-serif-brand text-lg italic text-white/85">
                  {exp.no}
                </span>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent px-7 py-7 text-white">
                  <h3 className="mb-1.5 font-serif-brand text-[23px] font-medium tracking-[1px]">
                    {exp.title}
                  </h3>
                  <p className="max-h-0 overflow-hidden text-[13px] leading-relaxed text-pearl transition-all duration-500 group-hover:max-h-[120px]">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
