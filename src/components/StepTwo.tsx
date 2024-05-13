'use client'
// Este componente envía los valores de las respuestas 
// de la primera parte del formulario.

import Input from "./Input"

interface Props {
  data: Array<Object>
  setStep: Function,
  setFormValues: Function
  formValues: any
}

export default function StepTwo ({ data, setStep, setFormValues, formValues }:Props){

  function handleSubmit(formData: FormData) {
    const formJson = Object.fromEntries(formData.entries())

    setStep((prev:any) => prev +1)

    setFormValues([...formValues, formJson])
  }

  return (
    <form action={handleSubmit}>
      {
        data.map((e:any) =>
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
