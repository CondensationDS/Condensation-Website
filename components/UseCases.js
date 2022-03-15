import Image from 'next/image'

export default function UseCases({
  content,
  imageTop,
  altTop,
  imageBottom,
  altBottom,
  imageSide,
  altSide,
  awards
}) {
  return (
    <div className="max-w-5xl bg-stone-100 flex items-center flex-col xl:flex-row mb-12 ml-24 mr-14">
      <div className={'max-w-md flex flex-col content-start pl-12 my-6 xl:my-auto'}>
        <h3 className={'text-stone-900 font-bold leading-snug text-3xl'}>{content}</h3>
        <div className="mt-4 whitespace-pre-wrap">{awards.join('\n')}</div>
      </div>

      <div className="flex p-10 order-2">
        <Image src={imageSide} alt={altSide} height="610px" width="300px" />
      </div>

      <div className="flex flex-col my-auto order-2 mr-10">
        <div className="pb-10">
          <Image src={imageTop} alt={altTop} height="285px" />
        </div>
        <div className="flex">
          <Image src={imageBottom} alt={altBottom} height="285px" />
        </div>
      </div>
    </div>
  )
}
