import Image from "next/image"
import { Button } from "../ui/button"

export default function Step() {
  return (
    <section className="flex w-full h-fit flex-col px-[18px] items-center text-center pb-[10px] max-w-4xl mx-auto">
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
            <span className="text-[30px] sm:text-[36px] font-Athiti leading-[43.20px] font-[700] text-[#67BE4D]">
              ลองประเมิน
            </span>
            <span className="text-[22px] sm:text-[26px] font-Athiti mt-[-10px] font-[600]">
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
            <span className="text-[30px] sm:text-[36px] font-Athiti leading-[43.20px] font-[700] text-[#67BE4D]">
              ลงทะเบียน
            </span>
            <span className="text-[22px] sm:text-[26px] font-Athiti mt-[5px] font-[600] leading-[23px] text-left">
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
            <span className="text-[30px] sm:text-[36px] font-Athiti leading-[43.20px] font-[700] text-[#67BE4D]">
              รับประกัน
            </span>
            <span className="text-[20px] sm:text-[24px] font-Athiti mt-[5px] font-[600] leading-[23px] text-left">
              เมื่อภัยธรรมชาติมา
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
