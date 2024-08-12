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

    const indicadores = [
      "depresion",
      "suicidio",
      "ansiedad",
      "agresividad",
      "drogas",
      "dificultadesEmocionales",
      "prosocial",
      "autoestima",
      "absentismo",
      "educacionSexual",
      "habitosPositivos",
      "bullying",
      "pertenencia",
      "educacionSMental",
      "relacionPadres",
      "comunidad",
      "cooperacion",
      "integracion",
      "usoRS",
    ]

    return indicadores.map((indicador) => {
      const valores = course.map((item: any) => item.attributes[indicador]);
      return calculateMedia(indicador, valores);
    })
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