export default function Button({ content }) {
  return (
    <button
      type="button"
      className="inline-flex items-center py-2 text-center text-blue-500 text-xl border-b"
    >
      {content}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 ml-6 mt-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  )
}
