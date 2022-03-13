export default function Card({title, status}) {
    return (
        <div className='p-8 bg-stone-100 border border-stone-300 w-80'>
            <div className='text-stone-900 font-bold text-xl'>
                {title}
            </div>
            <div className=''>
                {status}
            </div>
        </div>
    )
  }
  