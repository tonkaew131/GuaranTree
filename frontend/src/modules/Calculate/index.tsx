import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAtom } from "jotai"
import { CalculateAtom } from "./atom"

const CalculatePage = () => {
  const [calculateAtom, setCalculateAtom] = useAtom(CalculateAtom)
  return (
    <div className="flex w-full h-[100vh]">
      <div className="flex flex-col w-[500px] max-w-[90%] h-[600px] max-h-[90%] border-[1px] rounded-lg overflow-hidden absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] overflow-y-auto scrollbar-hide p-[20px] gap-[10px]">
        <div className="flex flex-col gap-[10px]">
          <Label>Size</Label>
          <Input
            type="number"
            placeholder="Size"
            className="w-full"
            value={calculateAtom.size}
            onChange={(e) =>
              setCalculateAtom({
                ...calculateAtom,
                size: Number(e.target.value),
              })
            }
          />
          <Label>Age</Label>
          <Input
            type="number"
            placeholder="Age"
            className="w-full"
            value={calculateAtom.age}
            onChange={(e) =>
              setCalculateAtom({
                ...calculateAtom,
                age: Number(e.target.value),
              })
            }
          />
        </div>
        <Button
          variant="default"
          onClick={() => {
            console.log(calculateAtom)
          }}
        >
          Subscribe
        </Button>
      </div>
    </div>
  )
}

export default CalculatePage
