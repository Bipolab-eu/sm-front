import Input from "./Input"

export default function StepQuizOne ({ data }:any){
  function handleSubmit(formData: FormData) {

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form action={handleSubmit}>
      {
        data.map((e:any) =>
          <fieldset key={e.id}>
            <p>{e.question}</p>
            <Input label={'Nunca'} type={'radio'} name={e.id} value={e.answer_a} />
            <Input label={'Pocas Veces'} type={'radio'} name={e.id} value={e.answer_b} />
            <Input label={'Muchas Veces'} type={'radio'} name={e.id} value={e.answer_c} />
          </fieldset>
        )
      }
      {/* <button type="submit">Siguiente</button> */}
    </form>
  )
}
