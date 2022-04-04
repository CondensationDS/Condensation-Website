const Contribution = ({ link }) => {
  return (
    <div className="m-8 sm:ml-28 text-xs text-gray-400 h-16 flex flex-col justify-center underline underline-offset-8">
      <a target="_blank" href={link}>Edit this page on GitHub</a>
    </div>
  )
}

export default Contribution
