'use client'

import Input from "./Input"

export default function StepThree({ data, onSubmit  }) {
  
  async function handleSubmit(formData) {
    const formJson = Object.fromEntries(formData.entries())
    onSubmit(formJson)
  }
  
  return (
    <form action={handleSubmit}>
      {
        data.map((e) =>
          <fieldset key={e.id}>
            <p>{e.title}</p>
            <Input label={'Si'} type={'radio'} name={e.id} value={e.answer_a} />
            <Input label={'No'} type={'radio'} name={e.id} value={e.answer_b} />
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
