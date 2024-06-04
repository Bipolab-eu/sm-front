'use client'
// Este componente envía los valores de las respuestas 
// de la primera parte del formulario.

import Input from "./Input"

export default function StepTwo ({ data, onSubmit }){

  function handleSubmit(formData) {
    const formJson = Object.fromEntries(formData.entries())

    // Extrae los valores del objeto y crea un array de números
    const values = Object.values(formJson).map(value => Number(value))

    onSubmit(values)
  }


  return (
    <form action={handleSubmit}>
      {
        data.map((e) =>
          <fieldset key={e.id}>
            <p>{e.title}</p>
            {
              e.answer.map(el =>
                <Input key={el.id} label={el.answer} type={'radio'} name={e.id} value={el.value} />
              )
            }
          </fieldset>
        )
      }
      <button
        type="submit"
      >
        Siguiente
      </button>
    </form>
  )
}
