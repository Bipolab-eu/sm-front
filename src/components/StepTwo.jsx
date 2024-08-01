'use client'

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export default function StepTwo ({ data, onSubmit }) {

  // Crea el esquema dinámicamente en base a los IDs de las preguntas
  const StudentSchema = Yup.object().shape(
    data.reduce((acc, curr) => {
      acc[curr.id] = Yup.number().required('Elige una respuesta');
      return acc;
    }, {})
  );

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(StudentSchema)
  })


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {
        data.map((e) =>
          <fieldset key={e.id}>
            <p>{e.question}</p>
            {
              e.answer.map(el =>
                <label key={el.id}>
                  <input 
                    type="radio" 
                    {...register(`${e.id}`)}
                    value={el.value}
                  />
                  { el.title }
                </label>
              )
            }
            <span>{errors[e.id]?.message}</span>
          </fieldset>
        )
      }
      <button
        type="submit"
      >
        Siguiente
      </button>
    </form>
  )
}
