export default function SubTitle({ content, title }) {
  return (
    <div>
      <div className="bg-gray-200 h-px my-6"></div>
      <div className="pt-10 sm:pt-28 px-8 sm:px-28 text-container">
        <div className="font-bold text-lg">{content}</div>
        <h2 className="text-black text-2xl sm:text-3xl font-bold mb-4" id={content}>
          {title}
        </h2>
      </div>
    </div>
  )
}
