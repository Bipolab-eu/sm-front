import { findCollege } from "@/lib/api"

const calculateMedia = (key:string, indicador: Array<number>) => {
  const sumaTotal = indicador.reduce((acc:any, num:any) => acc + num, 0);
  const cantidadElementos = indicador.length;

  const valorMedio = sumaTotal / cantidadElementos;
  const finalResult = parseFloat(valorMedio.toFixed(2));

  return { [key]: finalResult };
}

export default async function CollegeId ({ params: { id }}:any) {
  const { name, students } = await findCollege(id)

  const courseFilter = (courseValue:String) => {
    const course = students.data.filter((item:any) => item.attributes.course === courseValue)

    const depresion = course.map((item:any) => item.attributes.depresion)
    const suicidio = course.map((item:any) => item.attributes.suicidio)
    const ansiedad = course.map((item:any) => item.attributes.ansiedad)
    const agresividad = course.map((item:any) => item.attributes.agresividad)
    const drogas = course.map((item:any) => item.attributes.drogas)
    
    return [
      calculateMedia('depresion', depresion),
      calculateMedia('suicidio', suicidio),
      calculateMedia('ansiedad', ansiedad),
      calculateMedia('agresividad', agresividad),
      calculateMedia('drogas', drogas)
    ]
  }

  return (
    <main className="px-4">
      <p>{name}</p>
      <div className="bg-slate-200 mb-2">
        <p>Primero ESO</p>
        {
          <section>
            <p>Depresión: {courseFilter('ESO 1º')[0].depresion}</p>
            <p>Suicidio: {courseFilter('ESO 1º')[1].suicidio}</p>
            <p>Ansiedad: {courseFilter('ESO 1º')[2].ansiedad}</p>
            <p>Agresividad: {courseFilter('ESO 1º')[3].agresividad}</p>
            <p>Drogas: {courseFilter('ESO 1º')[4].drogas}</p>
          </section>
          
         }
      </div>
      <div className="bg-slate-200 mb-2">
        <p>Segundo ESO</p>
        {
          <section>
            <p>Depresión: {courseFilter('ESO 2º')[0].depresion}</p>
            <p>Suicidio: {courseFilter('ESO 2º')[1].suicidio}</p>
            <p>Ansiedad: {courseFilter('ESO 2º')[2].ansiedad}</p>
            <p>Agresividad: {courseFilter('ESO 2º')[3].agresividad}</p>
            <p>Drogas: {courseFilter('ESO 2º')[4].drogas}</p>
          </section>
          
         }
      </div>
      <div className="bg-slate-200 mb-2">
        <p>Tercero ESO</p>
        {
          <section>
            <p>Depresión: {courseFilter('ESO 3º')[0].depresion}</p>
            <p>Suicidio: {courseFilter('ESO 3º')[1].suicidio}</p>
            <p>Ansiedad: {courseFilter('ESO 3º')[2].ansiedad}</p>
            <p>Agresividad: {courseFilter('ESO 3º')[3].agresividad}</p>
            <p>Drogas: {courseFilter('ESO 3º')[4].drogas}</p>
          </section>
          
         }
      </div>
      <div className="bg-slate-200 mb-2">
        <p>Cuarto ESO</p>
        {
          <section>
            <p>Depresión: {courseFilter('ESO 4º')[0].depresion}</p>
            <p>Suicidio: {courseFilter('ESO 4º')[1].suicidio}</p>
            <p>Ansiedad: {courseFilter('ESO 4º')[2].ansiedad}</p>
            <p>Agresividad: {courseFilter('ESO 4º')[3].agresividad}</p>
            <p>Drogas: {courseFilter('ESO 4º')[4].drogas}</p>
          </section>
          
         }
      </div>
    </main>
  )
}