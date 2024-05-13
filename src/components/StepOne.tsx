'use client'
// Este componente envía el Nombre y la Id 
// del centro educativo

interface Props {
  data: Array<Object>,
  setStep: Function,
  setFormValues: Function
  formValues: any
}

export default function StepOne({ data, setStep, setFormValues, formValues }:Props) {
  
  function handleSubmit(formData: FormData) {
    const { college }:any = Object.fromEntries(formData.entries())

    setStep((prev:any) => prev +1)

    setFormValues([...formValues, college])
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
      <button type="submit">Siguiente</button>
    </form>
  )
}
