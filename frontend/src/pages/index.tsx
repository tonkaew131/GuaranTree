import Helping from "@/components/landing/helping"
import Hero from "@/components/landing/hero"
import Sponsor from "@/components/landing/sponsor"
import Link from "next/link"

export default function Page() {
  return (
    <>
      {/* <div className="min-h-screen flex justify-center items-center flex-col">
        <h1 className="text-5xl py-2">Garantree</h1>
        <div className="flex gap-2 items-center">
          <Link href="/calculate">Calculate</Link>
          <div className="h-5 w-[2px] bg-black"></div>
          <Link href="/search">Map Search</Link>
        </div>
      </div> */}
      <Hero />
      <Helping />
      <Sponsor />
    </>
  )
}
