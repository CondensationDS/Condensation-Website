import Image from 'next/image'

export default function SquaredTile({ title, subtitle, icon, color }) {
  return (
    <div className={
      "w-64 h-64 p-8 flex flex-col shrink-0 content-center justify-center text-black font-bold text-xl leading-snug rounded-xl "
      + (color === "blue" ? "bg-blue-50" : "")
      + (color === "purple" ? "bg-purple-50" : "")
      + (color === "rose" ? "bg-rose-50" : "")
    }>
      <div className="h-14 w-14">
        <Image width="100%" height="100%" objectFit="contain" src={icon} alt={title}></Image>
      </div>
      <div className={
        "mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-tr " 
        + (color === "blue" ? "from-blue-700 to-blue-500" : "")
        + (color === "purple" ? "from-purple-700 to-purple-500" : "")
        + (color === "rose" ? "from-rose-700 to-rose-500" : "")
        }>
        {title}
      </div>
      <div>{subtitle}</div>
    </div>
  )
}
