import { useRouter } from "next/router"
import Link from "next/link"

// import { Skeleton } from "@/components/ui/skeleton"

import Map from "../../search/map/index"

export default function Page() {
  const router = useRouter()
  const { thaiId } = router.query

  if (thaiId == undefined || thaiId.length != 13) {
    return (
      <>
        <div className="w-3/5 mx-auto flex justify-center items-center flex-col min-h-screen -m-8">
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
      <Map />
    </>
  )
}
