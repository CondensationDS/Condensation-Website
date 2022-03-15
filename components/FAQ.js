export default function FAQ({ title, content }) {
    return (
        <div class="space-y-4">
            <details className="group">
                <summary
                class="flex items-center justify-between py-4 pl-4 rounded-xl cursor-pointer bg-gray-200 mx-24 min-w-min">
                    <h3 className="font-bold">{title}</h3>
                    <svg
                        class="h-5 min-w-fit mx-4 transition-transform duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            d="M19 9l-7 7-7-7"/>
                    </svg>
                </summary>
                <div className="leading-relaxed mx-24 p-4">
                    {content}
                </div>
            </details>
        </div>
    )
  }
  