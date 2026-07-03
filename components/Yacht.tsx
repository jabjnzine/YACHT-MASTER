import Image from "next/image";
import Reveal from "./Reveal";

const features = [
  {
    title: "Sun Deck",
    desc: "ดาดฟ้าชั้นบนพร้อมเบาะอาบแดด วิวทะเล 360 องศา",
  },
  {
    title: "Lounge & Bar",
    desc: "ห้องรับรองปรับอากาศ พร้อมเครื่องดื่มและของว่างตลอดทริป",
  },
  {
    title: "Water Platform",
    desc: "แพลตฟอร์มท้ายเรือ ลงเล่นน้ำ คายัค และ SUP ได้สะดวก",
  },
  {
    title: "Safety First",
    desc: "อุปกรณ์ความปลอดภัยมาตรฐานสากล และลูกเรือผ่านการอบรม",
  },
];

export default function Yacht() {
  return (
    <section id="yacht" className="py-24 lg:py-28">
      <div className="mx-auto grid w-[90%] max-w-[1200px] items-center gap-14 lg:grid-cols-[.95fr_1.05fr] lg:gap-[70px]">
        <Reveal>
          <div className="relative h-[400px] w-full lg:h-[560px]">
            <Image
              src="/assets/yacht-cliff-bay.jpg"
              alt="เรือคาตามารันจอดในอ่าวน้ำใส"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 540px"
            />
          </div>
        </Reveal>

        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[5px] text-silver">
            Our Vessel
          </p>
          <h2 className="mt-3.5 font-serif-brand text-[clamp(30px,4vw,46px)] font-medium leading-[1.25] tracking-[1px] text-navy">
            Power Catamaran
            <br />
            ที่ออกแบบเพื่อความเหนือระดับ
          </h2>
          <div className="my-6 h-px w-14 bg-navy" />
          <p className="text-[15px]">
            เรือคาตามารันสองท้องลำตัวกว้าง ให้ความนุ่มนวลและมั่นคงแม้ในวันคลื่นลม
            พร้อมพื้นที่พักผ่อนหลายระดับ ตั้งแต่ดาดฟ้าอาบแดด เลานจ์ในร่ม
            ไปจนถึงแพลตฟอร์มท้ายเรือสำหรับลงเล่นน้ำได้ทันที
          </p>
          <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="border-t border-pearl pt-4">
                <h4 className="mb-1.5 font-serif-brand text-[17px] font-semibold tracking-[0.5px] text-navy">
                  {f.title}
                </h4>
                <p className="text-[13px] text-[#6a7076]">{f.desc}</p>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-9 inline-block bg-navy px-10 py-4 text-xs font-medium uppercase tracking-[3px] text-white transition-colors duration-300 hover:bg-black"
          >
            สอบถามรายละเอียดเรือ
          </a>
        </Reveal>
      </div>
    </section>
  );
}
