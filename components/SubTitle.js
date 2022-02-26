export default function SubTitle({content}) {
    return (
        <h2 className="text-container text-3xl font-bold pt-24" id={content}>
            {content}
        </h2>
    )
}