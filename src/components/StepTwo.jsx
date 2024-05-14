'use client'
// Este componente envía los valores de las respuestas 
// de la primera parte del formulario.

import Input from "./Input"

export default function StepTwo ({ data, onSubmit }){

  function handleSubmit(formData) {
    const formJson = Object.fromEntries(formData.entries())
    onSubmit(formJson)
  }

  return (
    <form action={handleSubmit}>
      {
        data.map((e) =>
          <fieldset key={e.id}>
            <p>{e.title}</p>
            <Input label={'Nunca'} type={'radio'} name={e.id} value={e.answer_a} />
            <Input label={'Pocas Veces'} type={'radio'} name={e.id} value={e.answer_b} />
            <Input label={'Muchas Veces'} type={'radio'} name={e.id} value={e.answer_c} />
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
