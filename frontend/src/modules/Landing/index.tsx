import Image from "next/image"
import NewCard from "../Calculate/newcard"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Helping from "@/components/landing/helping"
import Sponsor from "@/components/landing/sponsor"
import Step from "@/components/landing/step"
import Head from "next/head"

const Landing = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop } = containerRef.current
        setScrollPosition(scrollTop)
      }
    }

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const toBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 10000,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <Head>
        <title>การันTree</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <meta property="og:title" content="การันTree" />
        <meta
          property="og:description"
          content="การันTree ครอบคลุมทุกภัยพิบัติ ไม่มีค่าใช้จ่าย สมัครง่าย"
        />
        <meta property="og:image" content="/images/preview.webp" />
        <meta name="theme-color" content="#67BE4D" />
        <meta property="og:url" content="https://www.group-f.ywc.in.th/" />
      </Head>

      <div
        className="w-full h-full max-h-[calc(100vh-75px)] overflow-auto scrollbar-hide relative"
        ref={containerRef}
      >
        <div
          className="w-[60px] h-[60px] fixed right-[30px] bottom-[50px] z-[100] hover:opacity-70 cursor-pointer rounded-full shadow-lg"
          onClick={() => {
            window.location.href = "https://line.me/ti/p/@451zlmap"
          }}
        >
          <Image src="/images/Line.png" alt="Picture of the land" fill />
        </div>
        <div
          className="flex h-[100vh] fixed z-[-10]"
          style={{
            width: `${100 - scrollPosition / 3}vw`,
            left: "0",
            top: `${
              scrollPosition > 300 ? 64 - (scrollPosition - 300) * 1 : 64
            }px`,
          }}
        >
          <Image
            src="/images/TreeWild.webp"
            alt="Picture of the land"
            className="object-cover object-left"
            fill
          />
        </div>
        <div
          className="flex h-[100vh] fixed top-[64px] z-[-20]"
          style={{
            width: "100vw",
            left: "0vw",
            top: `${
              scrollPosition > 300 ? 64 - (scrollPosition - 300) * 1 : 64
            }px`,
          }}
        >
          <Image
            src="/images/TreeWideColor.webp"
            alt="Picture of the land"
            className="object-cover object-left"
            fill
          />
        </div>

        <div
          className="flex h-[180px] fixed top-[64px] z-[-10]"
          style={{
            width: "100vw",
            left: "0vw",
            top: `${
              scrollPosition > 300 ? 50 - (scrollPosition - 300) * 1 : 50
            }px`,
          }}
        >
          <div className="flex w-full h-[770px] flex-col justify-end">
            <span className="text-[42px] font-[700] text-white font-Athiti px-[18px] leading-[50.40px]">
              “<span className="text-[#67BE4D]">ตั้งต้นใหม่</span>
              <br />
              เมื่อไร่ประสบภัย
              <br />
              ด้วยประกันต้นไม้
              <br />
              ไว้ใจ
              <span className="text-[#67BE4D]">การันTree</span>”
            </span>
            <span className="font-Athiti text-[20px] font-[500] text-white px-[18px] mt-[12px]">
              ครอบคลุมทุกภัยพิบัติ ไม่มีค่าใช้จ่าย สมัครง่าย
            </span>
          </div>
        </div>
        <Button
          className="flex mt-[1120px] mb-[40px] h-[60px] w-[340px] max-w-[90%] ml-[18px] bg-[#67BE4D] hover:bg-[#457536] z-[5]"
          onClick={toBottom}
        >
          ลองทำนายที่ดินดูเลย
        </Button>
        <div className="flex w-full h-[100vh] bg-black fixed top-[0px] z-[-30]" />
        <Step />
        <div className="relative flex w-full h-[100px] z-[-10] mb-[-2px]">
          <Image src="/images/CurveBar.png" alt="Picture of the land" fill />
        </div>
        <div className="flex flex-col w-full h-fit bg-[#67BE4D] pb-[20px]">
          <Helping scrollPosition={scrollPosition} />
        </div>
        <div className="w-full h-fit bg-white pt-[40px]">
          <Sponsor />
          <div className="flex flex-col w-full h-fit relative max-w-[500px] mx-auto">
            <NewCard />
          </div>
        </div>
        <div className="flex w-full h-[150px] bg-[#295729]"></div>
      </div>
    </>
  )
}

export default Landing
