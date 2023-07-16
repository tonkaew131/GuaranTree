import Image from "next/image"

const Land = ({ size, ans }: { size: number; ans: number }) => {
  const zoom = ans > 0 ? 2.5 : 1
  return (
    <div
      className="flex w-[450px] h-[450px] rounded-md absolute left-[50%] top-[50%] transition-all duration-1000"
      style={{
        transform: `translate(-50%, -${size == 1 ? 42 : 48}%) scale(${
          zoom * (size == 1 ? 0.8 : 0.6)
        })`,
        filter: `blur(${ans > 0 ? 10 : 0}px) brightness(${ans > 0 ? 0.5 : 1})`,
      }}
    >
      <div
        className="flex w-full h-full"
        style={{
          position: "relative",
          marginLeft: size == 2 ? "25%" : "0%",
          marginTop: size <= 2 ? "15%" : "10%",
        }}
      >
        <div
          className="flex w-[200px] h-[228.7px]"
          style={{
            position: "absolute",
            left: "50%",
            top: "0%",
            transform: "translate(-50%, 0%)",
          }}
        >
          <Image
            src="/images/land.webp"
            alt="Picture of the land"
            width={200}
            height={228.7}
          />
        </div>
        {size >= 2 && (
          <div
            className="flex w-[200px] h-[228.7px]"
            style={{
              position: "absolute",
              left: "calc(50% - 93px)",
              top: "calc(54px)",
              transform: "translate(-50%, 0%)",
            }}
          >
            <Image
              src="/images/land.webp"
              alt="Picture of the land"
              width={200}
              height={228.7}
            />
          </div>
        )}
        {size >= 3 && (
          <div
            className="flex w-[200px] h-[228.7px]"
            style={{
              position: "absolute",
              left: "calc(50% + 93px)",
              top: "calc(54px)",
              transform: "translate(-50%, 0%)",
            }}
          >
            <Image
              src="/images/land.webp"
              alt="Picture of the land"
              width={200}
              height={228.7}
            />
          </div>
        )}
        {size >= 3 && (
          <div
            className="flex w-[200px] h-[228.7px]"
            style={{
              position: "absolute",
              left: "calc(50%)",
              top: "calc(108px)",
              transform: "translate(-50%, 0%)",
            }}
          >
            <Image
              src="/images/land.webp"
              alt="Picture of the land"
              width={200}
              height={228.7}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Land
