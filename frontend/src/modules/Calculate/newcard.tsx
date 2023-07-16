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
    if (result > 0) setAns(result)
  }
  return (
    <div className="flex h-[668px] w-full px-[24px] py-[16px] flex-col">
      <span className="text-[36px] text-center font-[700] font-Athiti">
        <span className="text-[#614215]">การัน</span>
        <span className="text-[#67BE4D]">Tree</span> มีให้ทดลอง
      </span>
      <div className="h-[501px] w-full bg-white shadow-2xl text-center flex-col items-center p-[16px] flex">
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
        <div className="flex h-[220px] w-full relative bg-[rgba(115.81,83.77,35.71,0.47)] mt-[16px] rounded-lg overflow-hidden">
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
            วงเงินของคุณ
            <br />
            {Number(ans.toFixed(0)).toLocaleString()}&nbsp;บาท
          </span>
        </div>
      </div>
      {ans <= 0 && (
        <Button className="flex w-full h-[72px] bg-[#67BE4D] hover:bg-[#599b44] mt-[16px] text-[23px]">
          <span className="text-[23px] font-[500]" onClick={onCLick}>
            ลองประเมินผลตอบแทน
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
            ตรวจสอบวงเงินอีกครั้ง
          </span>
        </Button>
      )}
    </div>
  )
}

export default NewCard
