import Card from "@/../public/images/card.webp"

import Image from "next/image"

export default function Helping() {
  return (
    <section className="font-Athiti text-center pb-16">
      <div className="relative overflow-clip -mb-16 -z-10">
        <Image
          src={Card}
          alt="Farmer"
          className="rotate-[14deg] absolute scale-[0.6] -translate-y-[10%] translate-x-[10%] -z-10"
        />
        <Image src={Card} alt="Farmer" className="rotate-[-14deg] absolute scale-[0.6] -translate-y-[10%] translate-x-[-10%] -z-10"/>
        <Image src={Card} alt="Farmer" className="w-3/5 mx-auto -z-10" />
      </div>

      <div className="bg-white shadow-xl w-11/12 mx-auto rounded-md p-3 z-20">
        <h2 className="font-semibold text-3xl text-ds-secondary ">
          เราช่วยเกษตรกรชาวไทย
          <br /> ไปแล้วมูลค่ากว่า
        </h2>
        <h3 className="font-bold text-ds-primary text-5xl pt-4">5,000 คน</h3>
      </div>
    </section>
  )
}
