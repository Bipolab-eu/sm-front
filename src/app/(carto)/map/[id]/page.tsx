import { getCollegeById } from "@/lib/api"
import Card from "@/components/Card"

const calculateMedia = (key:string, indicador: Array<number>) => {
  const sumaTotal = indicador.reduce((acc:any, num:any) => acc + num, 0);
  const cantidadElementos = indicador.length;

  const valorMedio = sumaTotal / cantidadElementos;
  const finalResult = parseFloat(valorMedio.toFixed(2));

  return { [key]: finalResult };
}

export default async function CollegeId ({ params: { id }}:any) {
  const { name, students } = await getCollegeById(id)

  
  const courseFilter = (courseValue:String) => {
    const course = students.data.filter((item:any) => item.attributes.course === courseValue)
    
    const depresion = course.map((item:any) => item.attributes.depresion)
    const suicidio = course.map((item:any) => item.attributes.suicidio)
    const ansiedad = course.map((item:any) => item.attributes.ansiedad)
    const agresividad = course.map((item:any) => item.attributes.agresividad)
    const drogas = course.map((item:any) => item.attributes.drogas)
    const dificultadesEmocionales = course.map((item:any) => item.attributes.dificultadesEmocionales)
    const prosocial = course.map((item:any) => item.attributes.prosocial)
    const autoestima = course.map((item:any) => item.attributes.autoestima)
    const absentismo = course.map((item:any) => item.attributes.absentismo)
    const educacionSexual = course.map((item:any) => item.attributes.educacionSexual)
    const habitosPositivos = course.map((item:any) => item.attributes.habitosPositivos)
    const bullying = course.map((item:any) => item.attributes.bullying)
    const pertenencia = course.map((item:any) => item.attributes.pertenencia)
    const educacionSMental = course.map((item:any) => item.attributes.educacionSMental)
    const relacionPadres = course.map((item:any) => item.attributes.relacionPadres)
    const comunidad = course.map((item:any) => item.attributes.comunidad)
    const cooperacion = course.map((item:any) => item.attributes.cooperacion)
    const integracion = course.map((item:any) => item.attributes.integracion)
    const usoRS = course.map((item:any) => item.attributes.usoRS)

    return [
      calculateMedia('depresion', depresion),
      calculateMedia('suicidio', suicidio),
      calculateMedia('ansiedad', ansiedad),
      calculateMedia('agresividad', agresividad),
      calculateMedia('drogas', drogas),
      calculateMedia('dificultadesEmocionales', dificultadesEmocionales),
      calculateMedia('prosocial', prosocial),
      calculateMedia('autoestima', autoestima),
      calculateMedia('absentismo', absentismo),
      calculateMedia('educacionSexual', educacionSexual),
      calculateMedia('habitosPositivos', habitosPositivos),
      calculateMedia('bullying', bullying),
      calculateMedia('pertenencia', pertenencia),
      calculateMedia('educacionSMental', educacionSMental),
      calculateMedia('relacionPadres', relacionPadres),
      calculateMedia('comunidad', comunidad),
      calculateMedia('cooperacion', cooperacion),
      calculateMedia('integracion', integracion),
      calculateMedia('usoRS', usoRS)
    ]
  }

  return (
    <main className="px-4">
      <h1>{name}</h1>
      <Card
        course="Primero ESO"
        indicator={courseFilter('ESO 1º')}
      />
      <Card
        course="Segundo ESO"
        indicator={courseFilter('ESO 2º')}
      />
      <Card
        course="Tercero ESO"
        indicator={courseFilter('ESO 3º')}
      />
      <Card
        course="Cuarto ESO"
        indicator={courseFilter('ESO 4º')}
      />
    </main>
  )
}