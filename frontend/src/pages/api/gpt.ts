import { OpenAIStream, streamToResponse } from "ai"
import { NextApiRequest, NextApiResponse } from "next"
import { Configuration, OpenAIApi } from "openai-edge"

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(config)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { messages } = await JSON.parse(req.body)

  if (messages.length == 1) {
    messages[0].content = `ตอบคำถามเกี่ยวกับข้อมูลทางด้านเกษตกรต่างๆ ในด้านการปลูกทุเรียนเมืองนนทบุรี โดย
    - ให้คำตอบออกมาง่ายที่สุดเพราะคนที่อ่านคือ เกษตกร
    - พยายามตอบให้ชัดที่สุด
    - ห้ามตอบเกิน 200 ตัวอักษร
    - ไม่ใส่อารมณ์ในคำตอบ
    คำถามคือ ${messages[0].content}`
  }

  // console.log(messages)

  const aiResponse = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messages,
  })

  const stream = OpenAIStream(aiResponse)

  return streamToResponse(stream, res)
}
