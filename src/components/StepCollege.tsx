'use client'

export default function StepCollege({ data }:any) {

  function handleSubmit(formData: FormData) {
    const { college }:any = Object.fromEntries(formData.entries())
  }

  return (
    <form action={handleSubmit}>
      <select name="college">
        <option disabled>Elige tu centro</option>
        {
          data.map((e:any) =>
            <option key={e.id} value={[e.id, e.name]}>{e.name}</option>
          )
        }
      </select>
      {/* <button type="submit">Siguiente</button> */}
    </form>
  )
}
