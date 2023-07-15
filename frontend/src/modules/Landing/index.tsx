import Image from "next/image"
import NewCard from "../Calculate/newcard"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Helping from "@/components/landing/helping"
import Sponsor from "@/components/landing/sponsor"

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

  console.log(scrollPosition)

  return (
    <div
      className="w-full h-full max-h-[calc(100vh-75px)] overflow-auto scrollbar-hide relative"
      ref={containerRef}
    >
      <div className="w-[60px] h-[60px] fixed right-[30px] bottom-[50px] z-[100] hover:opacity-70 cursor-pointer rounded-full shadow-lg">
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
          <Button className="flex h-[60px] w-[340px] max-w-[90%] ml-[18px] mt-[10px] bg-[#67BE4D] hover:bg-[#457536]">
            ลองทำนายที่ดินดูเลย
          </Button>
        </div>
      </div>
      <div className="flex w-full h-[100vh] bg-black fixed top-[0px] z-[-30]" />
      <div className="flex w-full h-fit mt-[1170px] flex-col px-[18px] items-center text-center pb-[150px]">
        <span className="text-white text-[36px] font-[700] font-Athiti leading-[43.2px]">
          <span className="text-[#67BE4D]">การันTree</span> ใช้ฟรี!
          <br />
          ไม่กี่ขั้นตอน
        </span>
        <div className="flex flex-col px-[23.7px] w-full h-fit">
          <div className="flex w-full h-[92px] items-center mt-[50px]">
            <div className="flex w-[120px] min-w-[120px] h-[75px] relative z-[10]">
              <Image
                src="/images/BlankLand.png"
                alt="Picture of the land"
                className="object-cover"
                fill
              />
            </div>
            <div className="flex flex-col w-full h-[92px] bg-white z-[-10] ml-[-25px] rounded-md items-start pl-[30px] justify-center">
              <span className="text-[36px] font-Athiti leading-[43.20px] font-[700] text-[#67BE4D]">
                ลองประเมิน
              </span>
              <span className="text-[26px] font-Athiti mt-[-10px] font-[600]">
                ผลราคาที่ดิน
              </span>
            </div>
          </div>
          <div className="flex w-full h-[92px] items-center mt-[50px]">
            <div className="flex w-[120px] min-w-[120px] h-[125px] relative z-[10]">
              <Image
                src="/images/Guide2.png"
                alt="Picture of the land"
                className="object-contain"
                fill
              />
            </div>
            <div className="flex flex-col w-full h-[120px] bg-white z-[-10] ml-[-25px] rounded-md items-start pl-[30px] justify-center">
              <span className="text-[36px] font-Athiti leading-[43.20px] font-[700] text-[#67BE4D]">
                ลงทะเบียน
              </span>
              <span className="text-[26px] font-Athiti mt-[5px] font-[600] leading-[23px] text-left">
                ผ่านไลน์ @guaranTree
              </span>
            </div>
          </div>
          <div className="flex w-full h-[92px] items-center mt-[50px]">
            <div className="flex w-[120px] min-w-[120px] h-[110px] relative z-[10]">
              <Image
                src="/images/Guide3.png"
                alt="Picture of the land"
                className="object-contain"
                fill
              />
            </div>
            <div className="flex flex-col w-full h-[92px] bg-white z-[-10] ml-[-25px] rounded-md items-start pl-[30px] justify-center">
              <span className="text-[36px] font-Athiti leading-[43.20px] font-[700] text-[#67BE4D]">
                รับประกัน
              </span>
              <span className="text-[26px] font-Athiti mt-[5px] font-[600] leading-[23px] text-left">
                เมื่อภัยธรรมชาติมา
              </span>
            </div>
          </div>
        </div>
      </div>
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
      <div className="flex w-full h-[150px]"></div>
    </div>
  )
}

export default Landing
