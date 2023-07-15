import { useChat } from 'ai/react'

// Optional but recommended: use the Edge Runtime. This can only be done at the page level, not inside nested components.
export const runtime = 'experimental-edge'

export default function Page() {
    const { messages, handleSubmit, input, handleInputChange } = useChat({
        api: '/api/gpt'
    })

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="input">Prompt</label>
            <input
                name="prompt"
                value={input}
                onChange={handleInputChange}
                id="input"
            />
            <button type="submit">Submit</button>
            <p className="">
                {messages.map((message, i) => (
                    <div key={i} className="py-4">{message.content}</div>
                ))}
            </p>
        </form>
    )
}