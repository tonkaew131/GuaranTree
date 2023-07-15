import { useRouter } from "next/router"
import Link from "next/link"

import { Skeleton } from "@/components/ui/skeleton"

export default function Page() {
  const router = useRouter()
  const { thaiId } = router.query

  if (thaiId == undefined || thaiId.length != 13) {
    return (
      <>
        <div className="w-4/5 mx-auto flex justify-center items-center flex-col min-h-screen -m-8">
          <h1 className="text-center text-2xl py-4">
            กรุณากรอกเลขบัตรประชาชนให้ครบ 13 หลัก
          </h1>
          <Link href="/check">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded">
              กรอกใหม่
            </button>
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      {[1, 2].map((e) => {
        return (
          <div className="py-4">
            <Skeleton className="w-[150px] h-[25px] rounded-full" />
            <Skeleton className="w-full aspect-[9/10] rounded-md mt-2" />
          </div>
        )
      })}
    </>
  )
}
