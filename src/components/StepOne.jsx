'use client'
// Este componente envía el Nombre y la Id 
// del centro educativo

export default function StepOne({ collegesData, courseData, onSubmit }) {
  
  function handleSubmit(formData) {
    const student = Object.fromEntries(formData.entries())
    
    onSubmit(student, 'hola')
  }

  return (
    <form action={handleSubmit}>
      <select name="college" defaultValue='default'>
        <option value='default' disabled>Elige tu centro</option>
        {
          collegesData.map((e) =>
            <option key={e.id} value={e.id}>{e.name}</option>
          )
        }
      </select>
      
      <select name="course" defaultValue='default'>
        <option value='default' disabled>Elige tu curso</option>
        {
          courseData.map((e) =>
            <option key={e.id} value={e.id}>{e.title}</option>
          )
        }
      </select>

      <button type="submit">Siguiente</button>
    </form>
  )
}
