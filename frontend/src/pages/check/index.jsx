export default function Page() {
  return (
    <>
      <div className="w-4/5 mx-auto flex justify-center items-center flex-col min-h-screen">
        <h1 className="text-center text-2xl py-4">ตรวจสอบกรมธรรม์</h1>
        <input
          className="border px-4 py-2 w-full"
          placeholder="เลขบัตรประชาชน"
        />
        <button className="bg-green-500 text-white w-full py-2 rounded-md my-4">
          ตรวจ
        </button>
      </div>
    </>
  )
}
