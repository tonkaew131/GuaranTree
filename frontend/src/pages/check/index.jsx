import { useState } from "react"

import { useRouter } from "next/navigation"

export default function Page() {
  const [thaiId, setThaiId] = useState("")

  const router = useRouter()

  function onSubmit(e) {
    e.preventDefault()

    // if (thaiId.length != 13) {
    //   return
    // }

    router.push(`/check/${thaiId}`)
  }

  return (
    <>
      <div className="w-4/5 mx-auto flex justify-center items-center flex-col min-h-screen -m-8">
        <form onSubmit={onSubmit}>
          <h1 className="text-center text-2xl py-4">ตรวจสอบกรมธรรม์</h1>
          <input
            className="border px-4 py-2 w-full"
            placeholder="เลขบัตรประชาชน"
            onChange={(e) => setThaiId(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-500 text-white w-full py-2 rounded-md my-4"
          >
            ตรวจ
          </button>
        </form>
      </div>
    </>
  )
}
