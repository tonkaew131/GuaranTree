import Image from "next/image"

import heroImage from "@/../public/hero.webp"

export default function Hero() {
  return (
    <section className="h-screen">
      <Image
        src={heroImage}
        alt="Forest"
        className="h-screen object-cover object-center w-full"
      ></Image>
    </section>
  )
}
