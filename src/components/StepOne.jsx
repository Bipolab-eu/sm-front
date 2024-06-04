'use client'
// Este componente envía el Nombre y la Id 
// del centro educativo, así como toda la información del estudiante

export default function StepOne({ collegesData, onSubmit }) {
  
  function handleSubmit(formData) {
    const student = Object.fromEntries(formData.entries())
    
    onSubmit(student)
  }

  return (
    <form action={handleSubmit}>
      {/* Selecciona el nombre del centro escolar */}
      <select name="college" defaultValue='default'>
        <option value='default' disabled>Elige tu centro</option>
        {
          collegesData.map((e) =>
            <option key={e.id} value={e.id}>{e.name}</option>
          )
        }
      </select>

      {/* Selecciona el curso escolar */}
      <select name="course" defaultValue='default'>
        <option value='default' disabled>Elige tu curso</option>
        <option value='ESO 1º'>1º ESO</option>
        <option value='ESO 2º'>2º ESO</option>
        <option value='ESO 3º'>3º ESO</option>
        <option value='ESO 4º'>4º ESO</option>
      </select>

      {/* Selecciona el género del estudiante */}
      <select name="gender" defaultValue='default'>
        <option value='default' disabled>Elige tu género</option>
        <option value='Masculino'>Masculino</option>
        <option value='Femenino'>Femenino</option>
        <option value='Otro'>Otro</option>
      </select>

      {/* Submit */}
      <button type="submit">Siguiente</button>
    </form>
  )
}
