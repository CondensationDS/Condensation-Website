import Image from 'next/image'

export default function Step({ number, title, description, illustration }) {
  return (
    <div className="flex flex-row my-28 bottom">
      <div className="text-container px-8 sm:px-28">
        <div className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
          {number}
        </div>
        <h2 className="text-3xl text-black font-bold mb-4">{title}</h2>
        <div className="w-full py-8">
          <Image
            objectFit="contain"
            src={illustration}
            alt={title}
            width={300}
            height={140}
          ></Image>
        </div>
        <div>{description}</div>
      </div>
    </div>
  )
}
