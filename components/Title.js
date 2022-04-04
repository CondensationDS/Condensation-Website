export default function Title({ content, title }) {
  return (
    <div className="flex justify-between px-8 py-12 sm:px-28 sm:py-20 items-stretch">
      <div>
        <div className="font-bold text-lg">{content}</div>
        <h1 className="text-black font-bold text-5xl sm:text-7xl max-w-xl leading-tight">
          {title}
        </h1>
      </div>
      <div className="hidden lg:block w-8 sm:w-10 ml-10 lg:w-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-500"></div>
    </div>
  )
}
