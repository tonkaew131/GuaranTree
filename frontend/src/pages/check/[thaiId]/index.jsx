import { useRouter } from "next/router"

import Map from "../../search/map/index"

export default function Page() {
  const router = useRouter()
  const { thaiId } = router.query

  return (
    <>
      <Map />
    </>
  )
}
