import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden text-center">
      <Image
        src="/assets/hero-sunset-yacht.jpg"
        alt="เรือยอชต์กลางทะเลอันดามันยามพระอาทิตย์ตก"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/25 to-navy/75" />

      <div className="relative z-[2] px-5 text-white">
        <p className="mb-6 text-xs uppercase tracking-[6px] text-pearl">
          Luxury Yacht Experiences · Krabi, Thailand
        </p>
        <h1 className="font-serif-brand text-[clamp(38px,6.5vw,76px)] font-medium leading-[1.2] tracking-[3px]">
          MORE THAN A JOURNEY,
          <br />
          <em className="font-normal italic">a way of life.</em>
        </h1>
        <p className="mx-auto mt-7 max-w-[560px] text-[15px] tracking-[0.5px] text-pearl">
          ประสบการณ์ล่องเรือยอชต์เหนือระดับ ที่ความหรูหรา ความสง่างาม
          และการต้อนรับอันอบอุ่นหลอมรวมเป็นหนึ่งเดียว
        </p>
        <div className="mt-11 flex flex-wrap justify-center gap-4">
          <a
            href="#experiences"
            className="inline-block bg-white px-10 py-4 text-xs font-medium uppercase tracking-[3px] text-navy transition-all duration-300 hover:bg-transparent hover:text-white hover:shadow-[inset_0_0_0_1px_#fff]"
          >
            สำรวจประสบการณ์
          </a>
          <a
            href="#contact"
            className="inline-block px-10 py-4 text-xs font-medium uppercase tracking-[3px] text-white shadow-[inset_0_0_0_1px_#fff] transition-all duration-300 hover:bg-white hover:text-navy"
          >
            จองการเดินทาง
          </a>
        </div>
      </div>

      <div className="scroll-line absolute bottom-8 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2.5 text-[10px] uppercase tracking-[3px] text-pearl">
        Scroll
      </div>
    </section>
  );
}
