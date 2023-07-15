import Image from "next/image"
import NewCard from "../Calculate/newcard"
import { useRef, useState, useEffect } from "react"

const Landing = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop } = containerRef.current
        setScrollPosition(scrollTop)
      }
    }

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])
  console.log(scrollPosition)
  return (
    <div className="w-full h-full max-h-[calc(100vh-75px)] overflow-auto scrollbar-hide">
      <div className="flex flex-col w-full h-fit relative">
        <NewCard />
      </div>
    </div>
  )
}

export default Landing
