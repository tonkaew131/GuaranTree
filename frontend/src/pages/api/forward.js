export default async function handler(req, res) {
  const redirectReq = await fetch(
    "http://bpt.dol.go.th:8088/geoserver/DOLNSL/wms?" +
      new URLSearchParams(req.query)
  )

  const contentType = redirectReq.headers.get("content-type")

  if (contentType.includes("image")) {
    return res
      .status(200)
      .setHeader("content-type", contentType)
      .send(Buffer.from(await redirectReq.arrayBuffer()))
  }

  return res
    .status(200)
    .setHeader("content-type", contentType)
    .send(Buffer.from(await redirectReq.text()))
}
