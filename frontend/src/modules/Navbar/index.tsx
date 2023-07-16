import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
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
  const [open, setOpen] = useState(false)
  return (
    <>
      {initialState && (
        <Button variant="ghost" className="px-[3px] text-[14px] font-[600]">
          <Sheet open={open} onOpenChange={setOpen}>
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
                    <span className="text-[14px] font-[500] text-left flex w-full h-[42px] py-[16px]">
                      <Link
                        href="/"
                        className="w-full h-full"
                        onClick={() => setOpen(false)}
                      >
                        หน้าแรก
                      </Link>
                    </span>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>กรมธรรม์</AccordionTrigger>
                      <AccordionContent>
                        <span className="text-[14px] font-[500] text-left flex w-full h-[42px] py-[16px]">
                          <Link
                            href="/register"
                            className="w-full h-full"
                            onClick={() => setOpen(false)}
                          >
                            ลงทะเบียน
                          </Link>
                        </span>
                        <span className="text-[14px] font-[500] text-left flex w-full h-[42px] py-[16px]">
                          <Link
                            href="/check"
                            className="w-full h-full"
                            onClick={() => setOpen(false)}
                          >
                            ตรวจสอบ
                          </Link>
                        </span>
                        <span className="text-[14px] font-[500] text-left flex w-full h-[42px] py-[16px]">
                          <Link
                            href="/claim"
                            className="w-full h-full"
                            onClick={() => setOpen(false)}
                          >
                            เคลม
                          </Link>
                        </span>
                      </AccordionContent>
                    </AccordionItem>
                    <SheetClose asChild>
                      <span className="text-[14px] font-[500] text-left flex w-full h-[42px] py-[16px]">
                        <Link
                          href="/calculate"
                          className="w-full h-full"
                          onClick={() => setOpen(false)}
                        >
                          ประมวลผลตอบแทน
                        </Link>
                      </span>
                    </SheetClose>
                    <SheetClose asChild>
                      <span className="text-[14px] font-[500] text-left flex w-full h-[42px] py-[16px]">
                        <Link
                          href="/helper"
                          className="w-full h-full"
                          onClick={() => setOpen(false)}
                        >
                          แชท
                        </Link>
                      </span>
                    </SheetClose>
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
