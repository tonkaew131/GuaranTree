import Map from "ol/Map.js"
import OSM from "ol/source/OSM.js"
import TileLayer from "ol/layer/Tile.js"
import TileWMS from "ol/source/TileWMS.js"
import View from "ol/View.js"
import XYZ from "ol/source/XYZ"

import MapContext from "./MapContext"
import { useEffect, useRef, useState } from "react"

export default function Page() {
  const mapRef = useRef()
  const [map, setMap] = useState(null)

  useEffect(() => {
    const layers = [
      new TileLayer({
        source: new XYZ({
          url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          maxZoom: 19,
        }),
      }),
      // new TileLayer({
      //   source: new OSM(),
      // }),
      new TileLayer({
        source: new TileWMS({
          url: "http://bpt.dol.go.th:8088/geoserver/DOLNSL/wms",
          params: { LAYERS: "nsl_200323_wgs84", TILED: true },
          serverType: "geoserver",
          transition: 0,
        }),
      }),
    ]

    const mapObject = new Map({
      layers: layers,
      view: new View({
        center: [11132520, 1547500],
        zoom: 17,
      }),
    })

    mapObject.setTarget(mapRef.current)
    setMap(mapObject)

    return () => mapObject.setTarget(undefined)
  }, [])

  return (
    <>
      <div className="w-screen h-screen relative">
        {/* <iframe
          className="w-full h-full"
          src="https://www.openstreetmap.org/export/embed.html?bbox=100.48726558685303%2C13.749973438615646%2C100.53661823272706%2C13.77640054309925&amp;layer=cyclosm"
        ></iframe> */}

        <MapContext.Provider value={{ map }}>
          <div
            ref={mapRef}
            className="ol-map "
            style={{ height: "100%", width: "100%" }}
          >
            {/* {children} */}
          </div>
        </MapContext.Provider>

        <div className="absolute p-2 w-full text-2xl bg-black z-10 text-white left-1/2 -translate-x-1/2 bottom-0">
          <p>โฉนดเลขที่: 123456</p>
        </div>
      </div>
    </>
  )
}
