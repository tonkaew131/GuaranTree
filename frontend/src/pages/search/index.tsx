import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Page() {
  interface province {
    PROVINCE_ID: number
    PROVINCE_CODE: string
    PROVINCE_NAME: string
    GEO_ID: number
  }

  interface district {
    DISTRICT_ID: number
    DISTRICT_CODE: string
    DISTRICT_NAME: string
    GEO_ID: number
    PROVINCE_ID: number
  }

  const [parcelId, setParcelId] = useState<number>(0)
  const [provinces, setProvinces] = useState<province[]>([])
  const [districts, setDistricts] = useState<district[]>([])
  const [filterDistricts, setFilterDistricts] = useState<district[]>([])
  const [provinceId, setProvinceId] = useState<string>("")
  const [districtId, setDistrictId] = useState<string>("")

  const getProvinces = async () => {
    const res = await fetch("/provinces.json")
    const json = await res.json()

    const res2 = await fetch("/districts.json")
    const json2 = await res2.json()

    setProvinces(json)
    setDistricts(json2)
    setFilterDistricts(json2.filter((d: district) => d.PROVINCE_ID == 3))
  }

  useEffect(() => {
    try {
      getProvinces()
    } catch (error) {
      console.error(error)
    }
  }, [])

  function onSelectProvince(provinceId: number) {
    setFilterDistricts(
      [...districts].filter((d) => d.PROVINCE_ID == provinceId)
    )
  }

  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col -m-4">
        <h1 className="text-5xl py-8">ค้นหาพื้นที่</h1>
        <div className="w-4/5 max-w-sm">
          <p>เลือกจังหวัด</p>
          <select
            className="px-2 py-4 border w-full mb-2"
            onChange={(e) => onSelectProvince(Number(e.target.value))}
          >
            <option disabled selected>
              จังหวัด
            </option>
            {provinces.map((p) => (
              <option
                key={p.PROVINCE_ID}
                value={p.PROVINCE_ID}
                selected={p.PROVINCE_NAME == "นนทบุรี"}
              >
                {p.PROVINCE_NAME}
              </option>
            ))}
          </select>

          <p>อำเภอ</p>
          <select
            className="px-2 py-4 border w-full mb-2"
            onChange={(e) => setDistrictId(e.target.value)}
          >
            <option disabled selected>
              อำเภอ
            </option>
            {filterDistricts.map((p) => (
              <option key={p.DISTRICT_ID} value={p.DISTRICT_CODE}>
                {p.DISTRICT_NAME}
              </option>
            ))}
          </select>

          <input
            className="px-2 py-4 border w-full mb-2"
            placeholder="เลขที่โฉนด"
            onChange={(e) => setParcelId(Number(e.target.value))}
          ></input>
        </div>

        <Link
          href={`/search/map?province=${provinceId}&district=${districtId}&parcel=${
            parcelId % 3
          }`}
          className="w-4/5 max-w-sm"
        >
          <Button size={"lg"} className="w-full text-2xl py-8">
            ค้นหา
          </Button>
        </Link>
      </div>
    </>
  )
}
