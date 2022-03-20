export default function SubTitle({ content }) {
  return (
    <h3 className="text-container text-xl font-bold pt-12 pl-5 sm:pl-20 text-black" id={content}>
      {content}
    </h3>
  )
}
