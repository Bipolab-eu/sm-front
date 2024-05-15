import { findCollege } from "@/lib/api"

export default async function CollegeId ({ params: { id }}:any) {
  const { name, students } = await findCollege(id)

  const course = students.data.map(({ id, attributes: { course } }: any) => ({ id, course }))

  const participantes = students.data.length

  console.log(course)
  return (
    <div>
      <p>{name}</p>
      <p>Número total de participantes: {participantes}</p>
      {
        course.map((e:any) => JSON.stringify(e.course))
      }
    </div>
  )
}
