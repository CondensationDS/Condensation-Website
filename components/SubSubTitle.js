export default function SubTitle({content}) {
    return (
        <h3 className="text-xl font-bold pt-12 pb-4" id={content}>
            {content}
        </h3>
    )
}