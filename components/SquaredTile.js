import Image from 'next/image'

export default function SquaredTile({ title, subtitle, icon, color }) {
  return (
    <div
      className={
        'w-64 h-full p-8 flex-col shrink-0 text-left text-black font-bold text-xl leading-snug rounded-xl ' +
        (color === 'blue' ? 'bg-blue-50' : '') +
        (color === 'purple' ? 'bg-purple-50' : '') +
        (color === 'rose' ? 'bg-rose-50' : '')
      }
    >
      <div className="">
        <div className="w-full">
          <Image objectFit="contain" src={icon} alt={title} width={60} height={60}></Image>
        </div>
        <div
          className={
            'mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-tr ' +
            (color === 'blue' ? 'from-blue-700 to-blue-500' : '') +
            (color === 'purple' ? 'from-purple-700 to-purple-500' : '') +
            (color === 'rose' ? 'from-rose-700 to-rose-500' : '')
          }
        >
          {title}
        </div>
        <div>{subtitle}</div>
      </div>
    </div>
  )
}
