interface Props {
  title: string
  indicatorValue: any
}


export default function CardValue({ title, indicatorValue }:Props ) {

  return (
    <article className='bg-slate-200 rounded-2xl p-4 text-center'>
      <p>{indicatorValue}</p>
      <p>{title}</p>
    </article>
  )
}
