import Reveal from "./Reveal";

export default function VideoSection() {
  return (
    <section className="bg-sand py-24 text-center lg:py-28">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[5px] text-silver">
            Feel The Moment
          </p>
          <h2 className="mt-3.5 font-serif-brand text-[clamp(30px,4vw,46px)] font-medium leading-[1.25] tracking-[1px] text-navy">
            สัมผัสบรรยากาศจริงจากทริปของเรา
          </h2>
          <div className="mx-auto my-6 h-px w-14 bg-navy" />
        </Reveal>
        <Reveal className="mt-14">
          <video
            src="/assets/trip-highlight.mp4"
            controls
            muted
            playsInline
            preload="metadata"
            poster="/assets/yacht-chicken-island.jpg"
            className="block max-h-[640px] w-full object-cover shadow-[0_24px_60px_rgba(10,31,54,0.18)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
