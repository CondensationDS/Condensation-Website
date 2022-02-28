const Contribution = ({ link }) => {
  return (
    <div className="pl-24 pr-8 text-xs text-gray-400 h-16 flex flex-col justify-center underline underline-offset-8">
      <a href={link}>Edit this page on GitHub</a>
    </div>
  )
}

export default Contribution
