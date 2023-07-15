import Card from "@/../public/images/card.webp"

import Image from "next/image"

export default function Helping() {
  return (
    <section className="font-Athiti text-center pb-16">
      <div className="relative sm:flex -mb-6 sm:-mb-16 -z-10 ">
        <Image
          src={Card}
          alt="Farmer"
          className="rotate-[14deg] sm:rotate-0 sm:w-3/4 sm:max-h-[70vh] object-contain sm:mx-0 absolute sm:static scale-[0.6] sm:scale-100 -translate-y-[10%] sm:translate-y-0 translate-x-[10%] sm:translate-x-0 -z-10 sm:z-0"
        />
        <Image
          src={Card}
          alt="Farmer"
          className="rotate-[-14deg] sm:rotate-0 sm:w-3/4 sm:max-h-[70vh] object-contain sm:mx-0 absolute sm:static scale-[0.6] sm:scale-100 -translate-y-[10%] sm:translate-y-0 translate-x-[-10%] sm:translate-x-0 -z-10 sm:z-0"
        />
        <Image
          src={Card}
          alt="Farmer"
          className="w-3/5 mx-auto sm:mx-0 -z-10 max-h-[70vh] object-contain"
        />
      </div>

      <div className="bg-white shadow-xl w-11/12 sm:w-fit sm:px-12 mx-auto rounded-md p-3 z-20">
        <h2 className="font-semibold text-3xl text-ds-secondary ">
          เราช่วยเกษตรกรชาวไทย
          <br /> ไปแล้วมูลค่ากว่า
        </h2>
        <h3 className="font-bold text-ds-primary text-5xl pt-4">5,000 คน</h3>
      </div>
    </section>
  )
}
