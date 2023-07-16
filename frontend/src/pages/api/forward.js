export default async function handler(req, res) {
  // console.log(req.query)

  const redirectReq = await fetch('http://bpt.dol.go.th:8088/geoserver/DOLNSL/wms' + new URLSearchParams(req.query))

  // console.log('http://bpt.dol.go.th:8088/geoserver/DOLNSL/wms' + new URLSearchParams(req.query))
  console.log(redirectReq)
  // console.log(redirectReq.status)

  // url: "http://bpt.dol.go.th:8088/geoserver/DOLNSL/wms",
  return res.status(200).send(redirectReq.body)
}
