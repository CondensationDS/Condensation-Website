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
    <div className="max-w-5xl bg-stone-100 flex items-center flex-col xl:flex-row mb-12 ml-3 mr-3 sm:ml-24 sm:mr-14">
      <div className={'max-w-md flex flex-col content-start pl-3 sm:pl-12 my-6 xl:my-auto'}>
        <h3 className={'text-stone-900 font-bold leading-snug text-3xl'}>{content}</h3>
        <div className="mt-4 whitespace-pre-wrap">{awards.join('\n')}</div>
      </div>

      <div className="flex p-10 order-2 h-[400px] sm:h-[600px]">
        <Image className="object-contain" src={imageSide} alt={altSide} width="300px" />
      </div>

      <div className="hidden sm:block flex flex-col my-auto order-2 mr-10">
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
