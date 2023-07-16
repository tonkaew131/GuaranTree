import Image from "next/image"
import NewCard from "../Calculate/newcard"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Helping from "@/components/landing/helping"
import Sponsor from "@/components/landing/sponsor"
import Step from "@/components/landing/step"
import Head from "next/head"
import Footer from "../Footer"

const Landing = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  const [hideScrollGuide, setHideScrollGuide] = useState(false)
  useEffect(() => {
    if (scrollPosition > 100 && !hideScrollGuide) {
      setHideScrollGuide(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPosition])
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])
  const toBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 1100,
        behavior: "smooth",
      })
    }
  }
  const toBottom2 = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 2600,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
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
            width: `calc(${100 - scrollPosition / 3}vw + 200px)`,
            left: "-200px",
            top: `${
              scrollPosition > 300 ? 64 - (scrollPosition - 300) * 1 : 64
            }px`,
          }}
        >
          <Image
            src="/images/TreeWild5.webp"
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
          className="flex h-[180px] fixed z-[-10] animate-pulse duration-500"
          style={{
            width: "100vw",
            left: "5vw",
            top: `${
              scrollPosition > 300 ? 225 - (scrollPosition - 300) * 1 : 225
            }px`,
          }}
        >
          <div
            className="flex w-fit h-fit mt-auto"
            style={{
              display: hideScrollGuide ? "none" : "flex",
            }}
          >
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.46143 31.4412C6.46143 31.7834 6.64403 32.0997 6.94046 32.2709L20.1052 39.8716C20.4016 40.0427 20.7669 40.0427 21.0633 39.8716L34.228 32.2709C34.5245 32.0997 34.7071 31.7834 34.7071 31.4411V21.1179C34.7071 20.3803 33.9087 19.9194 33.27 20.2882L21.0633 27.3357C20.7669 27.5069 20.4016 27.5069 20.1052 27.3357L7.89853 20.2882C7.25982 19.9194 6.46143 20.3803 6.46143 21.1179L6.46143 31.4412Z"
                fill="white"
              />
              <path
                d="M6.46149 11.2824C6.46149 11.6247 6.64409 11.941 6.94052 12.1121L20.1053 19.7128C20.4017 19.884 20.7669 19.884 21.0633 19.7128L34.2281 12.1121C34.5245 11.941 34.7071 11.6247 34.7071 11.2824V0.959143C34.7071 0.221617 33.9087 -0.239337 33.27 0.129426L21.0633 7.17699C20.7669 7.34813 20.4017 7.34813 20.1053 7.17699L7.89859 0.129429C7.25988 -0.239334 6.46148 0.221619 6.46148 0.959146L6.46149 11.2824Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div
          className="flex h-[230px] fixed z-[-10]"
          style={{
            width: "180vw",
            left: "0vw",
            top: `${
              scrollPosition > 300 ? -50 - (scrollPosition - 300) * 1 : -50
            }px`,
          }}
        >
          <div className="flex w-full h-[770px] flex-col justify-end">
            <div className="flex w-full h-fit flex-row">
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
            </div>
            <span className="font-Athiti text-[20px] font-[500] text-white px-[18px] mt-[12px]">
              ครอบคลุมทุกภัยพิบัติ ไม่มีค่าใช้จ่าย สมัครง่าย
            </span>
            <div className="flex h-[50px] lg:h-[100px]"></div>
          </div>
        </div>
        <Button
          className="flex mt-[1120px] mb-[0px] h-[60px] w-[340px] max-w-[90%] ml-[18px] bg-[#67BE4D] hover:bg-[#457536] z-[5] text-[23px] bg-transparent"
          onClick={toBottom}
        ></Button>
        <div className="flex w-full h-[100vh] bg-black fixed top-[0px] z-[-30]" />
        <Step />
        <Button
          className="flex mb-[40px] mt-[10px] h-[60px] w-[calc(100%-80px)] max-w-[813px] mx-auto bg-[#67BE4D] hover:bg-[#457536] z-[5] text-[23px]"
          onClick={toBottom2}
        >
          ลองประเมินผลตอบแทน
        </Button>
        <div className="relative flex w-full h-[100px] z-[-10] mb-[-2px]">
          <Image src="/images/CurveBar.png" alt="Picture of the land" fill />
        </div>
        <div className="flex flex-col w-full h-fit bg-[#67BE4D] pb-[20px]">
          <Helping scrollPosition={scrollPosition} />
        </div>
        <div className="w-full h-fit bg-white py-[40px]">
          <Sponsor />
          <div className="flex flex-col w-full h-fit relative max-w-[500px] mx-auto">
            <NewCard />
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Landing
