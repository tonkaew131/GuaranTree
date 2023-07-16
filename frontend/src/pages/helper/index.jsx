import { useChat } from "ai/react"

import { useRef } from "react"

import Image from "next/image"

import sendIcon from "./../../../public/send.svg"
import qrIcon from "./../../../public/qr.svg"
import microphoneIcon from "./../../../public/microphone.svg"

// Optional but recommended: use the Edge Runtime. This can only be done at the page level, not inside nested components.
export const runtime = "experimental-edge"

export default function Page() {
  const { messages, handleSubmit, input, setInput, handleInputChange } =
    useChat({
      api: "/api/gpt",
    })

  const inputRef = useRef()

  const sampleChats = [
    "น้ำท้วมสวน ทำไงดี?",
    "โรครากเน่า ทำไงดี?",
    "ผลหยุดออก ทำไงดี?",
  ]

  function onClickSuggest(suggest) {
    // inputRef.current.defaultValue = suggest
    setInput(suggest)
  }

  return (
    <>
      <div className="w-11/12 mx-auto  text-center">
        <p className="py-4 font-bold">Smart Assistance</p>
        <hr />
      </div>

      <div className="p-4">
        {messages.length === 0 && (
          <div className="mt-[35vh] -translate-y-1/2 flex w-full flex-col gap-2 text-[#9e9e9e] justify-center items-center">
            <p className="w-fit">Type something like:</p>
            {sampleChats.map((c, i) => {
              return (
                <span
                  key={i}
                  className="bg-zinc-100 px-24 py-4 rounded-[8px] max-w-sm border-2 hover:cursor-pointer"
                  onClick={(e) => onClickSuggest(c)}
                >
                  {c}
                </span>
              )
            })}
          </div>
        )}
        <div className="">
          {messages.map((message, i) => {
            const lines = message.content.split("\n")

            return (
              <div
                key={i}
                className={`my-4 rounded ${
                  message.role !== "user"
                    ? "text-left bg-[#f5f5f5] rounded-[8px] text-black"
                    : "bg-ds-primary mr-0 mx-auto rounded-br-none text-white"
                } w-fit max-w-[80%] px-4 py-2`}
              >
                {lines.map((m, idx) => (
                  <p key={idx}>{m}</p>
                ))}
              </div>
            )
          })}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="absolute bottom-2 p-2 px-4 left-1/2 -translate-x-1/2 w-full flex gap-2"
      >
        <div className="bg-zinc-100 rounded-[8px] border-2 flex w-full max-w-xl mx-auto mr-0">
          <input
            ref={inputRef}
            name="prompt"
            value={input}
            onChange={handleInputChange}
            id="input"
            placeholder="Ask me anything..."
            autoComplete="off"
            className=" px-4 p-3 w-full bg-zinc-100"
          />
          {/* <Image src={qrIcon} alt="Scan me" className="bg-zinc-100 h-full" />
          <Image
            src={microphoneIcon}
            alt="Voice to Text"
            className="bg-zinc-100 mx-1"
          /> */}
        </div>

        <button
          type="submit"
          className="h-full bg-ds-primary rounded-full text-white p-4 z-50 mx-auto ml-0 shadow-md"
        >
          <Image src={sendIcon} alt="Send" />
        </button>
      </form>
    </>
  )
}
