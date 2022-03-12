export default function SubTitle({ content, title }) {
  return (
    <div>
        <div className='bg-gray-200 h-px my-6'></div>
        <div className="pt-24 text-container">
            <div className="font-bold text-lg">{content}</div>
            <h2 className="text-black text-3xl font-bold" id={content}>
                {title}
            </h2>
        </div>
    </div>

  )
}
