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
    <div
      className="flex justify-center items-center px-4 pt-16"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {
          data.map((e) =>
            <fieldset key={e.id} className="mb-2 bg-slate-100 p-4 border-solid border border-slate-300 rounded-lg">
              <p className="mb-2 text-sm">{e.question}</p>
              {
                e.answer.map(el =>
                  <label key={el.id} className="flex justify-between text-sm leading-none bg-slate-200 mb-2 p-4 rounded-lg border-none">
                    {el.title}
                    <input
                      type="radio"
                      {...register(`${e.id}`)}
                      value={el.value}
                      className="border-none bg-slate-100 w-3 h-3 checked:bg-slate-900"
                    />
                  </label>
                )
              }
              <span className="text-red-500 text-xs">{errors[e.id]?.message}</span>
            </fieldset>
          )
        }
        
        {/* Botón Submit */}
        <button type="submit" className="bg-slate-900 text-slate-100 p-4 rounded-lg">Siguiente</button>
      </form>
    </div>
  )
}
