export default function SubTitle({ content }) {
  return (
    <h3 className="text-container text-xl font-bold pt-12 px-5 sm:px-20 text-black" id={content}>
      {content}
    </h3>
  )
}
