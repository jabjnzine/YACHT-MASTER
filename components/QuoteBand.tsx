import Image from "next/image";
import Reveal from "./Reveal";

export default function QuoteBand() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-center text-white">
      <Image
        src="/assets/sunset-sea-quote.jpg"
        alt=""
        fill
        className="object-cover opacity-[0.18]"
        sizes="100vw"
      />
      <Reveal className="relative mx-auto w-[90%] max-w-[1200px]">
        <h2 className="mx-auto max-w-[820px] font-serif-brand text-[clamp(24px,3.4vw,38px)] font-normal leading-[1.5] tracking-[2px]">
          “THE DESTINATION IS ONLY PART OF THE JOURNEY.
          <br />
          <em className="italic">
            The experience is what stays with you forever.”
          </em>
        </h2>
        <p className="mt-5 text-xs uppercase tracking-[4px] text-silver">
          Yacht Master · Since Day One
        </p>
      </Reveal>
    </section>
  );
}
