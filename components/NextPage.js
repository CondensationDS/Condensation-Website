export default function NextPage({descripton, link}) {
    return (
        <a href={link}>
            <div className="p-12 b-gray-400">
                <div className="text-blue-600">
                    Visit next page →
                </div>
                <div className="text-xl">
                    {descripton}
                </div>
            </div>
        </a>
    )
}