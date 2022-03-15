import SubTitle from './SubTitle'

export default function Title({ content, title }) {
  return (
    <div className="flex justify-between p-24 items-stretch">
      <div>
        <div className="font-bold text-lg">{content}</div>
        <h1 className="text-black font-bold text-7xl max-w-xl leading-tight">{title}</h1>
      </div>
      <div className="w-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-500"></div>
    </div>
  )
}
