import Image from 'next/image'

export default function People({ picture, name, contribution, role, description }) {
  return (
    <div className="grid grid-cols-1 sm:flex place-items-center sm:place-items-start">
      <div className="shrink-0 w-32 h-32 mt-2">
        <Image
          className="rounded-full sm:rounded-md"
          width="144px"
          height="144px"
          objectFit="container"
          src={picture}
          alt={name}
        ></Image>
      </div>
      <div className="pl-8 mt-5 sm:mt-0">
        <h4 className="font-bold text-xl text-stone-900 mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
            {name}
          </span>{' '}
          {contribution},<br />
          {role}.
        </h4>
        <div className="max-w-md">{description}</div>
      </div>
    </div>
  )
}
