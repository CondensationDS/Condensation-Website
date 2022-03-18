export default function SubTitle({ content, title }) {
  return (
    <div>
      <div className="bg-gray-200 h-px my-6"></div>
      <div className="pt-10 sm:pt-20 px-5 sm:px-20 text-container">
        <div className="font-bold text-lg">{content}</div>
        <h2 className="text-black text-xl sm:text-3xl font-bold" id={content}>
          {title}
        </h2>
      </div>
    </div>
  )
}
