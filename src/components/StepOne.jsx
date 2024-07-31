'use client'
// Este componente envía el Nombre y la Id 
// del centro educativo, así como toda la información del estudiante

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export default function StepOne({ collegesData, onSubmit }) {

  const StudentSchema = Yup.object().shape({

    college: Yup.string()
      .oneOf(collegesData.map(college => college.id.toString()),'*Tienes que elegir tu centro escolar')
      .required('Required'),
  
    course: Yup.string()
      .oneOf(['ESO 1º', 'ESO 2º', 'ESO 3º', 'ESO 4º'], '*Tienes que elegir tu curso') 
      .required('Required'),
      
    gender: Yup.string()
      .oneOf(['Masculino', 'Femenino', 'Otro'], '*Elige tu género') 
      .required('Required'),
  
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(StudentSchema)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Selecciona el Instituto */}
      <select
        {...register('college')}
        defaultValue='default' 
      >
        <option value='default' disabled>Elige tu centro</option>
        {
          collegesData.map((e) =>
            <option key={e.id} value={[e.id]}>{e.name}</option>
          )
        }
      </select>
      <span>{errors.college?.message}</span>

      {/* Selecciona el Curso */}
      <select {...register('course')} defaultValue='default'>
        <option value='default' disabled>Elige tu curso</option>
        <option value='ESO 1º'>1º ESO</option>
        <option value='ESO 2º'>2º ESO</option>
        <option value='ESO 3º'>3º ESO</option>
        <option value='ESO 4º'>4º ESO</option>
      </select>
      <span>{errors.course?.message}</span>


      {/* Selecciona el Género */}
      <select {...register('gender')} defaultValue='default'>
        <option value='default' disabled>Elige tu género</option>
        <option value='Masculino'>Masculino</option>
        <option value='Femenino'>Femenino</option>
        <option value='Otro'>Otro</option>
      </select>
      <span>{errors.gender?.message}</span>

      {/* Botón Submit */}
      <button type="submit">Siguiente</button>
    </form>
  )
}
