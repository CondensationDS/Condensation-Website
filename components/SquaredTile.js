import Image from 'next/image'

export default function SquaredTile({ title, subtitle, icon }) {
  return (
    <div className="w-64 h-64 p-8 flex flex-col shrink-0 content-center justify-center bg-gray-200 font-bold text-xl leading-snug rounded-xl w-[100%]">
      <div className="h-14 w-14">
        <Image width="100%" height="100%" objectFit="contain" src={icon} alt={title}></Image>
      </div>
      <div className="mt-6 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-cyan-500">
        {title}
      </div>
      <div>{subtitle}</div>
    </div>
  )
}
