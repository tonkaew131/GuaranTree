import Card from "@/../public/images/card.webp"

import Image from "next/image"

export default function Helping({
  scrollPosition,
}: {
  scrollPosition?: number
}) {
  return (
    <section className="font-Athiti text-center pb-16 relative">
      <div className="relative w-full h-[300px]">
        <div className="flex w-[200px] h-[260px] z-[10] absolute left-[50%] transform translate-x-[-50%] top-[0px]">
          <Image
            src="/images/Card1.png"
            alt="Farmer"
            className="object-cover"
            fill
          />
        </div>
        <div
          className="flex w-[170px] h-[180px] z-[0] absolute left-[30%] top-[30px]"
          style={{
            transform: "rotate(-10deg) translate(-50%, -0%)",
          }}
        >
          <Image
            src="/images/Card2.png"
            alt="Farmer"
            className="object-cover"
            fill
          />
        </div>
        <div
          className="flex w-[170px] h-[180px] z-[0] absolute left-[70%] top-[60px]"
          style={{
            transform: "rotate(10deg) translate(-50%, -0%)",
          }}
        >
          <Image
            src="/images/Card3.png"
            alt="Farmer"
            className="object-cover"
            fill
          />
        </div>
        <div className="bg-white shadow-xl w-[320px] px-[16px] py-[4px] rounded-md p-3 z-[50] absolute left-[50%] transform translate-x-[-50%] top-[200px]">
          <h2 className="font-semibold text-[30px] text-ds-secondary ">
            เราช่วยเกษตรกรชาวไทย
            <br /> ไปแล้วมูลค่ากว่า
          </h2>
          <h3 className="font-bold text-ds-primary text-[42px]">5,000 คน</h3>
        </div>
      </div>
    </section>
  )
}
