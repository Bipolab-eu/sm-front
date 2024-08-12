import React from 'react'
import CardValue from './CardValue'

interface Props {
  course: string,
  indicator: Array<any>
}

export default function Card({ course, indicator }: Props) {

  return (
    <div className="mb-8">
      <p>{course}</p>
      <section className='grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-8'>
        <CardValue title='Depresión' indicatorValue={indicator[0].depresion} />
        <CardValue title='Suicidio' indicatorValue={indicator[1].suicidio} />
        <CardValue title='Ansiedad' indicatorValue={indicator[2].ansiedad} />
        <CardValue title='Agresividad' indicatorValue={indicator[3].agresividad} />
        <CardValue title='Drogas' indicatorValue={indicator[4].drogas} />
        <CardValue title='Dificultades Emocionales y Conductuales' indicatorValue={indicator[5].dificultadesEmocionales} />
        <CardValue title='Conducta Prosocial' indicatorValue={indicator[6].prosocial} />
        <CardValue title='Autoestima y Bienestar Subjetivo' indicatorValue={indicator[7].autoestima} />
        <CardValue title='Absentismo Escolar y Faltas de Asistencia' indicatorValue={indicator[8].absentismo} />
        <CardValue title='Salud/Educación Sexual' indicatorValue={indicator[9].educacionSexual} />
        <CardValue title='Hábitos Positivos:' indicatorValue={indicator[10].habitosPositivos} />
        <CardValue title='Conocimiento/Formación Protocolo Bullying' indicatorValue={indicator[11].bullying} />
        <CardValue title='Sentido de Pertenencia y Relación Estudiante-Docente' indicatorValue={indicator[12].pertenencia} />
        <CardValue title='Educación/Formación en Salud Mental' indicatorValue={indicator[13].educacionSMental} />
        <CardValue title='Relación Escuela-Padres' indicatorValue={indicator[14].relacionPadres} />
        <CardValue title='Intervención Comunitaria Multidisciplinar en la escuela' indicatorValue={indicator[15].comunidad} />
        <CardValue title='Cooperación y Apoyo Escolar' indicatorValue={indicator[16].cooperacion} />
        <CardValue title='Integración y Voz de Colectivos Vulnerables' indicatorValue={indicator[17].integracion} />
        <CardValue title='Uso de Redes Sociales' indicatorValue={indicator[18].usoRS} />
      </section>
    </div>
  )
}
