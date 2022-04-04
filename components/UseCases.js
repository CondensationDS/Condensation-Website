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
    <div className="max-w-5xl flex items-center flex-col xl:flex-row mx-3 sm:mx-28 sm:mr-14 py-16 gap-6">
      <div className={'max-w-md flex flex-col content-start my-6 xl:my-auto'}>
        <h3 className={'text-stone-900 font-bold leading-snug text-2xl sm:text-3xl pr-6'}>{content}</h3>
        <div className="mt-4 whitespace-pre-wrap">{awards.join('\n')}</div>
      </div>

      <div className="hidden sm:flex flex order-2 h-[360px] sm:h-[450px]">
        <Image className="object-contain" src={imageSide} alt={altSide} width="300px" />
      </div>

      <div className="flex flex-row sm:flex-col order-2 gap-6">
        <div className="flex">
          <Image src={imageTop} alt={altTop} width="220px" height="220px" />
        </div>
        <div className="flex">
          <Image src={imageBottom} alt={altBottom} width="220px" height="220px" />
        </div>
      </div>
    </div>
  )
}
