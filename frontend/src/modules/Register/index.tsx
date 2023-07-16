import Image from "next/image"

const Register = () => {
  return (
    <div className="flex flex-col w-full h-fit px-[34px]">
      <span className="text-[41px] font-Athiti font-[700] text-center leading-[41px] mt-[10px]">
        ติดต่อ
        <br />
        เพื่อลงทะเบียน
      </span>
      <div className="flex w-full h-[150px] max-w-[500px] relative overflow-hidden rounded-md mt-[14px]">
        <Image
          src="/images/TreeColor.png"
          alt="Picture of the land"
          fill
          className="object-cover"
        />
      </div>
      <span className="text-[16px]">อ่านแผนประกันและการคุ้มครอง</span>
    </div>
  )
}

export default Register
