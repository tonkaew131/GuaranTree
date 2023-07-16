import Image from "next/image"

import Icon from "@/../public/images/ct-b-down.png"
import placeholder from "@/../public/images/sponsor.webp"

import TWA from "@/../public/TWA_sponsor.svg"

export default function Sponsor() {
  const sponsors = {
    top: [
      { name: "TWA", logo: TWA, class: "bg-black text-white" },
      { name: "TWA", logo: TWA, class: "bg-black text-white" },
      { name: "TWA", logo: TWA, class: "bg-black text-white" },
      { name: "TWA", logo: TWA, class: "bg-black text-white" },
      { name: "TWA", logo: TWA, class: "bg-black text-white" },
      { name: "TWA", logo: TWA, class: "bg-black text-white" },
      { name: "TWA", logo: TWA, class: "bg-black text-white" },
    ],
    medium: [],
    bottom: [],
  }

  return (
    <section className="font-Athiti w-full font-semibold text-ds-secondary text-4xl text-center">
      <h2>
        ได้รับการรองรับ
        <br />
        และสนับสนุนจาก
      </h2>

      <div className="font-Athiti font-medium text-black text-2xl p-2 relative py-8 pt-[10px] pb-0">
        {/* <div className="mb-4 flex gap-4 overflow-clip -translate-x-[20px]">
          {sponsors.top.map((s) => (
            <div
              key={s.name}
              className={`z-50 py-1 relative rounded px-4 flex items-center gap-2 ${s.class}`}
            >
              <Image
                src={s.logo}
                className="h-full w-auto"
                fill
                alt="TWA Logo"
              />
              <span className="text-transparent w-fit pr-4">{s.name}</span>
            </div>
          ))}
        </div> */}

        {/* Shadow */}
        {/* <div
          className="left-1/2 -z-10 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute h-[90%] w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 0%,rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 50%,rgba(0,0,0,0.05) 75%, rgba(255,255,255,1) 100%)",
          }}
        ></div> */}

        <Image
          src={placeholder}
          alt="Sponsor Section"
          className="object-cover w-full scale-150 sm:scale-100 py-8 sm:py-0"
        />
      </div>
    </section>
  )
}
