'use client'
// Este componente envía el Nombre y la Id 
// del centro educativo

export default function StepOne({ data, onSubmit }) {
  
  function handleSubmit(formData) {
    const { college } = Object.fromEntries(formData.entries())
    onSubmit(college)
  }

  return (
    <form action={handleSubmit}>
      <select name="college" defaultValue='default'>
        <option value='default' disabled>Elige tu centro</option>
        {
          data.map((e) =>
            <option key={e.id} value={[e.id, e.name]}>{e.name}</option>
          )
        }
      </select>
      <button type="submit">Siguiente</button>
    </form>
  )
}
