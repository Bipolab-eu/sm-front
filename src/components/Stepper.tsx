'use client'

import { useState } from "react"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"

interface Props {
  collegesData: Array<Object>
  quizData: Array<Object>
}


export default function Stepper({ collegesData, quizData }:Props) {
  const [step, setStep] = useState(0)
  const [formValues, setFormValues] = useState(Array)

  const steps = [
    <div key={1}>
      <StepOne data={collegesData} setStep={setStep} setFormValues={setFormValues} formValues={formValues} />
    </div>,
    <div key={2}>
      <StepTwo data={quizData} setStep={setStep} setFormValues={setFormValues} formValues={formValues} />
    </div>,
    <div key={3}>
      <StepThree />
    </div>
  ]

  console.log(formValues) // borrar en producción

  return (
    steps[step]
  )
}
