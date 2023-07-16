import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Burger from "@/modules/Burger"
import Navbar from "@/modules/Navbar"

import "@/styles/global.css"
import type { AppProps } from "next/app"

import Image from "next/image"
import Link from "next/link"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen">
      <div className="flex w-full h-[64px] items-center justify-center px-[24px] fixed top-0 z-[10] bg-white">
        <div className="mr-auto">
          <Link href="/">
            <Image
              src="/images/LOGO.png"
              alt="Picture of the land"
              width={32}
              height={32}
            />
          </Link>
        </div>
        <Button className="bg-green-700 hover:bg-green-700 mr-[17px]">
          ติดต่อเรา
        </Button>
        <Navbar />
      </div>
      <div className="w-full h-full mx-auto pt-[64px]">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
