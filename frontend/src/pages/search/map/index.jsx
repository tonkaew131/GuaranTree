import Map from "ol/Map.js"
import OSM from "ol/source/OSM.js"
import TileLayer from "ol/layer/Tile.js"
import TileWMS from "ol/source/TileWMS.js"
import View from "ol/View.js"
import XYZ from "ol/source/XYZ"

import MapContext from "./MapContext"
import { useEffect, useRef, useState } from "react"

import { useRouter } from "next/router"
import Link from "next/link"

export default function Page() {
  const mapRef = useRef()
  const [map, setMap] = useState(null)

  const [randomRais, setRandomRais] = useState(3.1)

  const router = useRouter()

  const sampleLocations = {
    128: [11132520, 1547500],
    349: [11332720, 1550400],
    12: [11132520, 1547500],
  }

  useEffect(() => {
    const { parcel } = router.query

    const layers = [
      new TileLayer({
        source: new XYZ({
          url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          maxZoom: 19,
        }),
      }),
      new TileLayer({
        source: new OSM(),
        opacity: 0.3,
      }),
      new TileLayer({
        source: new TileWMS({
          url: "http://bpt.dol.go.th:8088/geoserver/DOLNSL/wms",
          params: { LAYERS: "nsl_200323_wgs84" },
          serverType: "geoserver",
          transition: 0,
        }),
      }),
    ]

    const mapObject = new Map({
      layers: layers,
      view: new View({
        center:
          parcel in sampleLocations
            ? sampleLocations[parcel]
            : [11132520, 1547500],
        zoom: 17,
      }),
    })

    mapObject.setTarget(mapRef.current)
    setMap(mapObject)

    setRandomRais(Math.random() * 5 + 1)

    return () => mapObject.setTarget(undefined)
  }, [router.query])

  return (
    <>
      <div className="w-screen h-screen relative">
        <MapContext.Provider value={{ map }}>
          <div
            ref={mapRef}
            className="ol-map "
            style={{ height: "100%", width: "100%" }}
          ></div>
        </MapContext.Provider>

        <div className="absolute p-4 rounded w-full max-w-sm text-2xl bg-black z-10 text-white left-1/2 -translate-x-1/2 bottom-0 sm:bottom-[50px]">
          <p className="leading-none">โฉนดเลขที่: {router.query.parcel}</p>
          <span className="font-light text-sm leading-none">
            บางรักใหญ่, นนทบุรี 11110
          </span>
        </div>

        <div className="absolute top-4 left-4 ">
          <Link href="/search">
            <button className="bg-indigo-500 text-white px-6 rounded-full py-2">
              Back
            </button>
          </Link>

          <div className="pl-8 bg-white p-2 my-4 rounded">
            <ul className="list-disc">
              <li>ตำบล: บางขุนศรี</li>
              <li>อำเภอ: บางกอกน้อย</li>
              <li>จังหวัด: กรุงเทพมหานคร</li>
              <li className="my-2">
                เนื้อที่:{" "}
                <span className="bg-zinc-900 text-white px-2 py-1">
                  {randomRais.toFixed(1)} ไร่ 3 งาน 68.8 ตารางวา
                </span>
              </li>
              <li className="font-bold text-green-500">
                ~ {(randomRais * 32.4).toFixed(0)} ต้น
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
