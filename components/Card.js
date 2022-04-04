export default function Card({ title, status }) {
  return (
    <div className="p-8 border border-stone-300 w-80">
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500 font-bold text-xl">
        {title}
      </div>
      <div className="">{status}</div>
    </div>
  )
}
