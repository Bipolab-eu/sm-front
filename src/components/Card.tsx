import React from 'react'
import CardValue from './CardValue'

interface Indicator {
  [key: string]: number;
}

interface Props {
  course: string;
  indicator: Array<Indicator>;
}

export default function Card({ course, indicator }: Props) {
  console.log(indicator)

  return (
    <div className="mb-8">
      <p>{course}</p>
      <section className='grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-8'>
        {
          indicator.map((item:any, index:any) => {
            const value = Object.values(indicator[index])[0];
            return (
              <CardValue
                key={item.key}
                title={item.title}
                indicatorValue={isNaN(value) ? 'Valor no disponible' : value}
              />
            );
          })}
      </section>
    </div>
  )
}
