'use client'
/* 
  Paso 1 del componente Stepper.
  Este componente envía:
  College: La id del centro
  Course: El curso escolar del alumno
  Gender: El género del alumno
  Age: Edad del alumno
*/

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export default function StepOne({ collegesData, onSubmit }) {

  const StudentSchema = Yup.object().shape({

    college: Yup.string()
      .oneOf(collegesData.map(college => college.id.toString()),'Campo obligatorio')
      .required('Required'),
  
    course: Yup.string()
      .oneOf(['ESO 1º', 'ESO 2º', 'ESO 3º', 'ESO 4º'], 'Campo obligatorio') 
      .required('Required'),
      
    gender: Yup.string()
      .oneOf(['Masculino', 'Femenino', 'Otro'], 'Campo obligatorio') 
      .required('Required'),

    age: Yup.number()
      .integer('No se admiten números decimales')
      .min(9, 'Para realizar la encuesta, debes de tener entre 9 y 18 años')
      .max(18, 'Para realizar la encuesta, debes de tener entre 9 y 18 años')
      .required('Introduce tu edad')
  
  });

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(StudentSchema)
  })

  return (
    <div
      className="flex justify-center items-center px-4 pt-16"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-full" >

        {/* Selecciona el Instituto */}
        <fieldset className="mb-4">
          <label htmlFor="text" className="block mb-2 leading-none text-slate-900"><span className="text-red-500 text-xs leading-none align-top">*</span>Selecciona tu centro</label>
          
          <select
            {...register('college')}
            defaultValue='default'
            className="block w-full px-4 py-2 rounded-lg border-solid border border-slate-950 bg-slate-100"
          >
            <option value='default' disabled> – </option>
            {
              collegesData.map((e) =>
                <option key={e.id} value={[e.id]}>{e.name}</option>
              )
            }
          </select>

          <span className="text-red-500 text-xs">{errors.college?.message}</span>
        </fieldset>

        {/* Selecciona el Curso */}
        <fieldset className="mb-4">
          <label htmlFor="text" className="block mb-2 leading-none text-slate-900"><span className="text-red-500 text-xs leading-none align-top">*</span>¿En qué curso estás?</label>

          <select
            {...register('course')}
            defaultValue='default'
            className="block w-full px-4 py-2 rounded-lg border-solid border border-slate-950 bg-slate-100"
          >
            <option value='default' disabled> – </option>
            <option value='ESO 1º'>1º ESO</option>
            <option value='ESO 2º'>2º ESO</option>
            <option value='ESO 3º'>3º ESO</option>
            <option value='ESO 4º'>4º ESO</option>
          </select>

          <span className="text-red-500 text-xs">{errors.course?.message}</span>
        </fieldset>
  

        {/* Selecciona el Género */}
        <fieldset className="mb-4">
          <label htmlFor="text" className="block mb-2 leading-none text-slate-900"><span className="text-red-500 text-xs leading-none align-top">*</span>¿Con qué genero te identificas?</label>

          <select
            {...register('gender')}
            defaultValue='default'
            className="block w-full px-4 py-2 rounded-lg border-solid border border-slate-950 bg-slate-100"
          >
            <option value='default' disabled>–</option>
            <option value='Masculino'>Masculino</option>
            <option value='Femenino'>Femenino</option>
            <option value='Otro'>Otro</option>
          </select>

          <span className="text-red-500 text-xs">{errors.gender?.message}</span>
        </fieldset>

        {/* Introduce la edad */}
        <fieldset className="mb-4">
          <label htmlFor="age" className="block mb-2 leading-none text-slate-900"><span className="text-red-500 text-xs leading-none align-top">*</span>¿Qué edad tienes?</label>

          <input
            id="age"
            {...register('age')}
            type="number"
            placeholder="Introduce tu edad"
            className="block w-full px-4 py-2 rounded-lg border-solid border border-slate-950 bg-slate-100"

          />
          <span className="text-red-500 text-xs">{errors.age?.message}</span>
          </fieldset>

        {/* Botón Submit */}
        <button type="submit" className="bg-slate-900 text-slate-100 p-4 rounded-lg">Siguiente</button>
      </form>
    </div>
  )
}
