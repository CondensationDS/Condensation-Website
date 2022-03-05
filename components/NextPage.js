export default function NextPage({ descripton, link }) {
  return (
    <a href={link}>
      <div className="p-4 mt-10 w-96 rounded-xl border border-gray-300 transition-all hover:bg-gray-200">
        <div className="text-blue-600">Visit next page →</div>
        <div className="text-xl font-bold">{descripton}</div>
      </div>
    </a>
  )
}
