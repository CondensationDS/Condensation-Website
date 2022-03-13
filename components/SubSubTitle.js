export default function SubTitle({ content }) {
  return (
    <h3 className="text-container text-xl font-bold pt-12 text-black" id={content}>
      {content}
    </h3>
  )
}
