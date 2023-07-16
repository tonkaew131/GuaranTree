import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordionFooter"

import Image from "next/image"
import Link from "next/link"

import Logo from "@/../public/images/LOGO.png"

import Facebook from "@/../public/images/Facebook.webp"
import Line from "@/../public/images/Line.png"
import Gmail from "@/../public/images/Gmail.webp"

export default function Footer() {
  return (
    <footer className="bg-[#295729] text-white p-4">
      <div className="mx-auto max-w-4xl">
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <Link href="/about">
                <AccordionTrigger className="text-ds-primary">
                  เกี่ยวกับการันTREE
                </AccordionTrigger>
              </Link>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-ds-primary">
                บริการลูกค้า
              </AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li className="py-1">
                    <Link href="faq">คำถามที่พบบ่อย</Link>
                  </li>
                  <li className="py-1">
                    <Link href="insurance">บริการด้านกรมธรรม์</Link>
                  </li>
                  <li className="py-1">
                    <Link href="claim">การเรียกร้องสินไหม</Link>
                  </li>
                  <li className="py-1">
                    <Link href="payment">ช่องทางการชำระเบี้ยประกันภัย</Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h3 className="flex gap-2 font-bold items-center py-2">
            การันTREE{" "}
            <Image src={Logo} alt="Garantree Logo" className="h-8 w-8" />
          </h3>
          <p className="leading-tight">
            เลขที่ 123 ถนนเพลินจิต เขตปทุมวัน กรุงเทพฯ 10330
          </p>
        </div>
        <div className="text-ds-primary py-2">
          © 2023 Untitled UI. All rights reserved.
        </div>
        <div className="flex gap-2">
          <Link href="https://www.facebook.com/profile.php?id=100094419506720">
            <Image src={Facebook} alt="facebook" className="h-10 w-10" />
          </Link>
          <Link href="https://line.me/ti/p/@451zlmap">
            <Image src={Line} alt="Garantree Line" className="h-10 w-10" />
          </Link>

          <Link href="https://google.com">
            <Image src={Gmail} alt="Garantree Gmail" className="h-10 w-10" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
