export default function SubTitle({ content }) {
  return (
    <h3 className="text-container text-xl md:pr-12 lg:pr-24 font-bold pt-12" id={content}>
      {content}
    </h3>
  )
}
