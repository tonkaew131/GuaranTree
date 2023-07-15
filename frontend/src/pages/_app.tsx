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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen">
      <div className="flex w-full h-[64px] items-center justify-center px-[24px]">
        <div className="mr-auto">
          <Image
            src="/images/ct-b-down.png"
            alt="Picture of the land"
            width={32}
            height={32}
          />
        </div>
        <Button className="bg-green-700 hover:bg-green-700 mr-[17px]">
          ติดต่อเรา
        </Button>
        <Navbar />
      </div>
      <div className="w-full h-full max-w-[500px] mx-auto px-[20px] pt-[10px]">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
