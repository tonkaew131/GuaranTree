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
                <SheetTitle className="text-[20px] font-semibold border-b-[1px] pb-[3px]">
                  บริการลูกค้า
                </SheetTitle>
                <SheetDescription>
                  <Accordion type="single" collapsible className="w-full">
                    <Link href="/comingsoon">
                      <span className="text-[14px] font-[500] text-left flex w-full h-[52px] py-[16px]">
                        คำถามที่พบบ่อย
                      </span>
                    </Link>
                    <AccordionItem value="item-2" className="border-b-[0px]">
                      <AccordionTrigger>บริการด้านกรมธรรม์</AccordionTrigger>
                      <AccordionContent>
                        <Link href="/comingsoon">
                          <span className="text-[13px] font-[500] text-left flex w-full h-[28px] py-[8px]">
                            ตรวจสอบความคุ้มครอง
                          </span>
                        </Link>
                        <Link href="/comingsoon">
                          <span className="text-[13px] font-[500] text-left flex w-full h-[28px] py-[8px]">
                            เปลี่ยนแปลงข้อมูลในกรมธรรม์
                          </span>
                        </Link>
                        <Link href="/comingsoon">
                          <span className="text-[13px] font-[500] text-left flex w-full h-[28px] py-[8px]">
                            การต่ออายุกรมธรรม์
                          </span>
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b-[0px]">
                      <AccordionTrigger>การเรียกร้องสินไหม</AccordionTrigger>
                      <AccordionContent>
                        <Link href="/comingsoon">
                          <span className="text-[13px] font-[500] text-left flex w-full h-[28px] py-[8px]">
                            การเรียกร้องสินไหมชดเชยกรณีน้ำท่วม
                          </span>
                        </Link>
                        <Link href="/comingsoon">
                          <span className="text-[13px] font-[500] text-left flex w-full h-[28px] py-[8px]">
                            การเรียกร้องสินไหมชดเชยภรณี
                          </span>
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-b-[0px]">
                      <AccordionTrigger>
                        ช่องทางการชำระเบี้ยประกันภัย
                      </AccordionTrigger>
                      <AccordionContent>
                        <Link href="/comingsoon">
                          <span className="text-[13px] font-[500] text-left flex w-full h-[28px] py-[8px]">
                            การหักบัญชีธนาคาร
                          </span>
                        </Link>
                        <Link href="/comingsoon">
                          <span className="text-[13px] font-[500] text-left flex w-full h-[28px] py-[8px]">
                            การหักบัญชีบัตรเครดิต
                          </span>
                        </Link>
                        <Link href="/comingsoon">
                          <span className="text-[13px] font-[500] text-left flex w-full h-[28px] py-[8px]">
                            การชำระเบี้ยประกันผ่านตู้เอทีเอ็ม
                          </span>
                        </Link>
                        <Link href="/comingsoon">
                          <span className="text-[13px] font-[500] text-left flex w-full h-[28px] py-[8px]">
                            การชำระเบี้ยประกันผ่านช่องทางเคาน์เตอร์
                          </span>
                        </Link>
                        <Link href="/comingsoon">
                          <span className="text-[13px] font-[500] text-left flex w-full h-[28px] py-[8px]">
                            การชำระเบี้ยประกันผ่านโมบายล์แอปพลิเคชั่น
                          </span>
                        </Link>
                        <Link href="/comingsoon">
                          <span className="text-[13px] font-[500] text-left flex w-full h-[28px] py-[8px]">
                            การชำระเบี้ยประกันผ่านอินเทอร์เน็ตแบงค์กิ้ง
                          </span>
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
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
