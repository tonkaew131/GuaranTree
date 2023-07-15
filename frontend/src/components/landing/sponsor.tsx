import Image from "next/image"

import Icon from "@/../public/images/ct-b-down.png"
import placeholder from "@/../public/images/sposor.webp"

import TWA from "@/../public/TWA_sponsor.svg"

export default function Sponsor() {
  const sponsors = {
    top: [
      { name: "TWA", logo: TWA },
      { name: "TWA", logo: TWA },
      { name: "TWA", logo: TWA },
      { name: "TWA", logo: TWA },
      { name: "TWA", logo: TWA },
      { name: "TWA", logo: TWA },
      { name: "TWA", logo: TWA },
      { name: "TWA", logo: TWA },
    ],
    medium: [],
    bottom: [],
  }

  return (
    <section className="font-Athiti font-semibold text-ds-secondary text-4xl text-center border-red-500 border">
      <h2>
        ได้รับการรองรับ
        <br />
        และสนับสนุนจาก
      </h2>

      <div className="font-Athiti font-medium text-black text-2xl p-2 relative py-8">
        {/* <div className="mb-4 flex gap-2 overflow-clip -translate-x-[20px]">
          {sponsors.top.map((s) => (
            <div
              key={s.name}
              className="bg-white z-50 py-1 rounded px-4 flex items-center gap42"
            >
              <Image src={Icon} className="h-4 w-4" alt="TWA Logo" />
              <span className="w-fit">{s.name}</span>
            </div>
          ))}
        </div> */}
        <Image src={placeholder} alt="Sponsor placeholder"></Image>

        {/* Shadow */}
        <div
          className="left-1/2 -z-10 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute h-[90%] w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 0%,rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 50%,rgba(0,0,0,0.05) 75%, rgba(255,255,255,1) 100%)",
          }}
        ></div>
      </div>
    </section>
  )
}
