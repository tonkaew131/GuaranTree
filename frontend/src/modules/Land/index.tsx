import Image from "next/image"

const Land = ({ size }: { size: number }) => {
  return (
    <div className="flex w-[450px] h-[450px] rounded-md border-[1px] absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
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
