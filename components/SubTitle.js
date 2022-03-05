export default function SubTitle({ content }) {
  return (
    <h2 className="text-container text-3xl md:pr-12 lg:pr-24 font-bold pt-24 mr-20" id={content}>
      {content}
    </h2>
  )
}
