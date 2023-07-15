import { useChat } from "ai/react"

import { useRef } from "react"

// Optional but recommended: use the Edge Runtime. This can only be done at the page level, not inside nested components.
export const runtime = "experimental-edge"

export default function Page() {
  const { messages, handleSubmit, input, handleInputChange } = useChat({
    api: "/api/gpt",
  })

  const inputRef = useRef()

  const sampleChats = ["น้ำท้วมสวน", "โรครากเน่า", "ผลหยุดออก"]

  function onClickSuggest(suggest) {
    // inputRef.current.defaultValue = suggest
  }

  return (
    <>
      <div className="w-11/12 mx-auto  text-center">
        <p className="py-4 font-bold">Smart Assistance</p>
        <hr />
      </div>

      <div className="p-4">
        <div className="flex w-full justify-end gap-2">
          {/* {messages.length == 0 &&
            sampleChats.map((c, i) => {
              return (
                <span
                  key={i}
                  className="bg-zinc-100 px-2 py-1 rounded-full border-2 hover:cursor-pointer"
                  onClick={(e) => onClickSuggest(c)}
                >
                  {c}
                </span>
              )
            })} */}
        </div>
        <div className="">
          {messages.map((message, i) => {
            const lines = message.content.split("\n")

            return (
              <div
                key={i}
                className={`my-4 rounded ${
                  message.role == "user" ? "text-left" : "mr-0 mx-auto"
                } w-fit max-w-[80%] bg-sky-500 px-4 py-2 text-white`}
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
        className="absolute bottom-2 p-2 left-1/2 -translate-x-1/2 w-full flex gap-2"
      >
        <input
          ref={inputRef}
          name="prompt"
          value={input}
          onChange={handleInputChange}
          id="input"
          placeholder="คำถาม..."
          autoComplete="off"
          className="bg-zinc-100 rounded border-2 px-4 p-3 w-11/12"
        />
        <button
          type="submit"
          className="h-full bg-ds-primary rounded text-white p-4 z-50"
        >
          Submit
        </button>
      </form>
    </>
  )
}
