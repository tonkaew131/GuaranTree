export default async function handler(req, res) {
  const redirectReq = await fetch(
    "http://bpt.dol.go.th:8088/geoserver/DOLNSL/wms?" +
      new URLSearchParams(req.query)
  )

  return res
    .status(200)
    .setHeader("content-type", "image/png")
    .send(Buffer.from(await redirectReq.arrayBuffer()))
}
