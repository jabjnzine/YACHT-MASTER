"use client";

import Reveal from "./Reveal";

const contacts = [
  { icon: "✆", label: "โทรศัพท์", value: "+66 (0) 8X-XXX-XXXX" },
  { icon: "✉", label: "อีเมล", value: "booking@yachtmaster.club" },
  { icon: "◎", label: "ท่าเรือ", value: "อ่าวน้ำเมา, กระบี่ ประเทศไทย" },
  { icon: "◷", label: "เวลาให้บริการ", value: "ทุกวัน 08:00 – 20:00 น." },
];

const inputClass =
  "w-full border-0 border-b border-pearl bg-transparent px-0.5 py-2.5 text-[14.5px] font-light text-graphite outline-none transition-colors duration-300 focus:border-navy";

const labelClass =
  "mb-2 block text-[10.5px] font-medium uppercase tracking-[2.5px] text-[#8a9097]";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy py-24 text-white lg:py-28">
      <div className="mx-auto grid w-[90%] max-w-[1200px] items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[5px] text-silver">
            Reserve Your Journey
          </p>
          <h2 className="mt-3.5 font-serif-brand text-[clamp(30px,4vw,46px)] font-medium leading-[1.25] tracking-[1px]">
            เริ่มต้นการเดินทาง
            <br />
            ของคุณกับเรา
          </h2>
          <div className="my-6 h-px w-14 bg-silver" />
          <p className="text-[15px] text-pearl">
            ทีมงานของเราพร้อมออกแบบทริปส่วนตัวให้ตรงกับความต้องการของคุณ
            ไม่ว่าจะเป็นทริปครอบครัว ฉลองโอกาสพิเศษ หรือปาร์ตี้ส่วนตัวกลางทะเล
          </p>
          {contacts.map((c) => (
            <div key={c.label} className="mt-7 flex items-start gap-4.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-silver/50 text-base">
                {c.icon}
              </div>
              <div>
                <h5 className="mb-1 text-[11px] font-medium uppercase tracking-[3px] text-silver">
                  {c.label}
                </h5>
                <span className="text-[15px]">{c.value}</span>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <form
            className="bg-white px-8 py-11 text-graphite lg:px-10"
            onSubmit={(e) => {
              e.preventDefault();
              alert("ขอบคุณครับ ทีมงานจะติดต่อกลับโดยเร็วที่สุด");
              e.currentTarget.reset();
            }}
          >
            <h3 className="mb-7 font-serif-brand text-2xl font-semibold tracking-[1px] text-navy">
              จองทริป / สอบถาม
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="mb-5">
                <label className={labelClass}>ชื่อ–นามสกุล</label>
                <input type="text" required placeholder="คุณ..." className={inputClass} />
              </div>
              <div className="mb-5">
                <label className={labelClass}>เบอร์ติดต่อ</label>
                <input type="tel" required placeholder="08X-XXX-XXXX" className={inputClass} />
              </div>
            </div>
            <div className="mb-5">
              <label className={labelClass}>อีเมล</label>
              <input type="email" placeholder="you@email.com" className={inputClass} />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="mb-5">
                <label className={labelClass}>วันที่ต้องการเดินทาง</label>
                <input type="date" className={inputClass} />
              </div>
              <div className="mb-5">
                <label className={labelClass}>จำนวนผู้เดินทาง</label>
                <select className={inputClass}>
                  <option>1–5 ท่าน</option>
                  <option>6–10 ท่าน</option>
                  <option>11–20 ท่าน</option>
                  <option>มากกว่า 20 ท่าน</option>
                </select>
              </div>
            </div>
            <div className="mb-5">
              <label className={labelClass}>รายละเอียดเพิ่มเติม</label>
              <textarea
                placeholder="เช่น ทริปวันเดียว / ฉลองวันเกิด / ขอเมนูพิเศษ..."
                className={`${inputClass} min-h-[90px] resize-y`}
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full cursor-pointer bg-navy px-10 py-4 text-xs font-medium uppercase tracking-[3px] text-white transition-colors duration-300 hover:bg-black"
            >
              ส่งคำขอจอง
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
