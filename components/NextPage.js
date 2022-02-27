export default function NextPage({descripton, link}) {
    return (
        <a href={link}>
            <div className="ml-4 p-4 w-96 rounded-xl border	border-gray-300 transition-all hover:bg-gray-200">
                <div className="text-blue-600">
                    Visit next page →
                </div>
                <div className="text-xl font-bold">
                    {descripton}
                </div>
            </div>
        </a>
    )
}