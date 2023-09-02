import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useAtom } from "jotai"
import { CalculateAtom } from "./atom"
import Land from "../Land"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const NewCard = () => {
  const [calculateAtom, setCalculateAtom] = useAtom(CalculateAtom)

  const [ans, setAns] = useState(0)

  const onCLick = () => {
    console.log(calculateAtom)
    const carbonPerTree =
      //   78.56374431365006 / (1 + 16.986323367601884 * exp(0.644244077212348 * x))
      // calculateAtom.age > 0 ? 8.7637 * calculateAtom.age - 1.2965 : 0
      calculateAtom.age == null
        ? 0
        : calculateAtom.age > 0
        ? 78.56374431365006 /
          (1 +
            16.986323367601884 *
              Math.exp(-0.644244077212348 * calculateAtom.age))
        : 0
    // kg of carbon weight per all in 1 field
    const allCarbon = (carbonPerTree * 30) / 1000
    console.log(allCarbon)
    const carbonPrice = 505
    const result = allCarbon * carbonPrice * (calculateAtom?.size ?? 0) * 7
    if (result > 0) {
      setAns(result * 8)
    }
  }
  return (
    <div className="flex h-fit w-full px-[24px] py-[0px] flex-col">
      <span className="text-[36px] text-center font-[700] font-Athiti">
        <span className="text-[#614215]">การัน</span>
        <span className="text-[#67BE4D]">Tree</span> มีให้ทดลอง
      </span>
      <div className="h-[551px] w-full bg-white shadow-2xl text-center flex-col items-center p-[16px] flex">
        <span className="font-Athiti text-[26px] h-fit font-[600] text-[#614215]">
          ลองประเมิน<span className="text-[#67BE4D]">ผลตอบแทน</span>
          <br />
          จากไร่ของคุณ
        </span>
        <div className="flex flex-row gap-[8px] w-full mb-[16px]">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="text" className="text-left text-[14px] font-[400]">
              พันธุ์ทุเรียน
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="พันธุ์" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="หมอนทอง">หมอนทอง</SelectItem>
                <SelectItem value="ชะนี">ชะนี</SelectItem>
                <SelectItem value="ก้านยาว">ก้านยาว</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="text" className="text-left text-[14px] font-[400]">
              อายุของต้นทุเรียน
            </Label>
            <Input
              type="number"
              placeholder="10 ปี"
              className="w-full"
              value={calculateAtom.age ?? ""}
              onChange={(e) =>
                setCalculateAtom({
                  ...calculateAtom,
                  age: e.target.value ? Number(e.target.value) : null,
                })
              }
            />
          </div>
        </div>
        <Label
          htmlFor="text"
          className="text-left text-[14px] font-[400] mr-auto mb-[8px]"
        >
          จำนวนไร่
        </Label>
        <Input
          type="number"
          placeholder="ไร่"
          className="w-full"
          value={calculateAtom.size ?? ""}
          onChange={(e) =>
            setCalculateAtom({
              ...calculateAtom,
              size: e.target.value ? Number(e.target.value) : null,
            })
          }
        />
        <Label
          htmlFor="text"
          className="text-left text-[14px] font-[400] mr-auto mb-[8px] mt-3"
        >
          เลขที่โฉนด
        </Label>
        <div className="flex flex-row w-full h-fit gap-1">
          <Input type="number" placeholder="เลขที่โฉนด" className="w-full" />
          <Button
            variant="outline"
            onClick={() => {
              window.location.href = "/check/v2/123"
            }}
            className="bg-[#67BE4D] hover:bg-[#599b44]"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 15.7053L7 14.2053M7 14.2053L1 17.2053V4.20532L7 1.20532M7 14.2053V1.20532M7 1.20532L13 4.20532M13 4.20532L19 1.20532V8.70532M13 4.20532V9.70532M17 15.2053V15.2153M19.121 17.3263C19.5406 16.9068 19.8265 16.3723 19.9423 15.7903C20.0581 15.2083 19.9988 14.6051 19.7717 14.0568C19.5447 13.5086 19.1602 13.04 18.6668 12.7103C18.1734 12.3807 17.5934 12.2047 17 12.2047C16.4066 12.2047 15.8266 12.3807 15.3332 12.7103C14.8398 13.04 14.4553 13.5086 14.2283 14.0568C14.0012 14.6051 13.9419 15.2083 14.0577 15.7903C14.1735 16.3723 14.4594 16.9068 14.879 17.3263C15.297 17.7453 16.004 18.3713 17 19.2053C18.051 18.3153 18.759 17.6893 19.121 17.3263Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </div>
        <div className="flex min-h-[200px] w-full relative bg-[rgba(115.81,83.77,35.71,0.47)] mt-[16px] rounded-lg overflow-hidden">
          <Land
            size={
              calculateAtom.size == null
                ? 1
                : calculateAtom.size > 20
                ? 3
                : calculateAtom.size > 10
                ? 2
                : 1
            }
            ans={ans}
          />
          <span
            className="text-[33px] w-full font-Athiti font-[700] z-50 absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white"
            style={{
              transition: "all 0.5s ease",
              opacity: ans > 0 ? 1 : 0,
              transitionDuration: "1.5s",
            }}
          >
            ราคาประเมิน
            <br />
            ทุนประกันสูงสุด
            <br />
            {Number(ans.toFixed(0)).toLocaleString()}&nbsp;บาท
            <span className="text-[10px] absolute bottom-[-20px] right-2">
              *เงื่อนไขเป็นไปตามที่บริษัทกำหนด
            </span>
          </span>
        </div>
      </div>
      {ans <= 0 && (
        <Button className="flex w-full h-[72px] bg-[#67BE4D] hover:bg-[#599b44] mt-[16px] text-[23px]">
          <span className="text-[23px] font-[500]" onClick={onCLick}>
            ลองประเมินทุนประกัน
          </span>
        </Button>
      )}
      {ans > 0 && (
        <Button className="flex w-full h-[72px] bg-[#67BE4D] hover:bg-[#599b44] mt-[16px] text-[23px]">
          <span
            className="text-[23px] font-[500]"
            onClick={() => {
              window.location.href = "https://line.me/ti/p/@451zlmap"
            }}
          >
            ติดต่อลงทะเบียนกับเรา
          </span>
        </Button>
      )}
      {ans > 0 && (
        <Button className="flex w-full h-[72px] bg-[#295729] hover:bg-[#599b44] mt-[16px] text-[23px]">
          <span className="text-[23px] font-[500]" onClick={onCLick}>
            ตรวจสอบทุนประกันอีกครั้ง
          </span>
        </Button>
      )}
    </div>
  )
}

export default NewCard
