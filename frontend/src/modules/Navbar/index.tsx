import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import Burger from "../Burger"
import { useEffect, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const Navbar = () => {
  const [initialState, setInitialState] = useState(false)
  useEffect(() => {
    setInitialState(true)
  }, [])
  return (
    <>
      {initialState && (
        <Button variant="ghost" className="px-[3px] text-[14px] font-[600]">
          <Sheet>
            <SheetTrigger>
              <Burger />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                {/* <SheetTitle className="text-[20px] font-semibold border-b-[1px] pb-[3px]">
                  บริการลูกค้า
                </SheetTitle> */}
                <SheetDescription>
                  <Accordion type="single" collapsible className="w-full">
                    <Link href="/comingsoon">
                      <span className="text-[14px] font-[500] text-left flex w-full h-[52px] py-[16px]">
                        คำถามที่พบบ่อย
                      </span>
                    </Link>
                  </Accordion>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </Button>
      )}
    </>
  )
}

export default Navbar
