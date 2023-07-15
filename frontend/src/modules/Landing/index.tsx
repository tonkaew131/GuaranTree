import Image from "next/image"

const Landing = () => {
  return (
    <div className="flex flex-col w-full h-fit">
      <span className="text-[32px]">วิธีการเคลมประกัน</span>
      <span className="text-[14px] mt-[8px]">
        อธิบายวิธีการเคลมประกัน e.g. ไม่ว่าคุณจะเกิดอุบัติเหตน้ำท่วม
        ผู้เชี่ยวชาญด้านการเคลมประกันของเรา พร้อมดูแลคุณทุกที่ ทุกเวลาตลอด 24
        ชม. ไม่เว้นวันหยุด คุณสามารถแจ้งเคลมประกันออนไลน์ผ่านเว็บไวต์
        หรือโทรหาเราผ่านสายด่วนแจ้งเคลมประกัน
        เราเชื่อว่านวัตกรรมที่ล้ำสมัยที่เราพัฒนาอย่างต่อเนื่อง
        จะช่วยให้การรับประกันภัยเป็นเรื่องง่าย ราคาดี และเชื่อถือได้
      </span>
      <div className="flex w-full h-[170px] border-[1px] overflow-hidden relative mt-[24px]">
        <Image
          src="/images/land.webp"
          alt="Picture of the land"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default Landing
