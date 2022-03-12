export default function NextPage({ descripton, link }) {
  return (
    <a href={link}>
      <div className="ml-4 p-4 w-96 rounded-xl border border-gray-200 transition-all hover:border-blue-500">
        <div className="text-blue-500">Visit next page →</div>
        <div className="text-xl font-bold text-black">{descripton}</div>
      </div>
    </a>
  )
}
