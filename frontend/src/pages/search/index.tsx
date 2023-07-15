import { useEffect, useState } from "react"

export default function Page() {
  const [provinces, setProvinces] = useState([])

  const getProvinces = async () => {
    const res = await fetch("/provinces.json")
    const json = await res.json()

    console.log(json)

    setProvinces(json)
  }

  useEffect(() => {
    try {
      getProvinces()
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col">
        <h1 className="text-5xl py-8">ค้นหาโฉนด</h1>
        <div className="w-4/5">
          <p>เลือกจังหวัด</p>
          <select>
            {provinces.map((p) => (
              <option key={p.PROVINCE_ID} value={p.PROVINCE_CODE}>
                {p.PROVINCE_NAME}
              </option>
            ))}
          </select>

          <p>อำเภอ</p>
          <select>
            {provinces.map((p) => (
              <option key={p.PROVINCE_ID} value={p.PROVINCE_CODE}>
                {p.PROVINCE_NAME}
              </option>
            ))}
          </select>
        </div>

        <button className="w-4/5 py-4 bg-violet-500 text-white rounded-2xl text-3xl">
          ค้นหา
        </button>
      </div>
    </>
  )
}
