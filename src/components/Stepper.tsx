'use client'

import { useEffect, useState } from "react"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepFour from "./StepFour"
import { postStudent } from "@/lib/api"

interface Props {
  collegesData: Array<Object>
  fisrtQuizData: Array<Object>
  secondQuizData: Array<Object>
}


export default function Stepper({ collegesData, fisrtQuizData, secondQuizData }:Props) {
  const [step, setStep] = useState(0)
  const [formValues, setFormValues] = useState(Array)

  const getFormData = (params:Object) => {
    setFormValues([...formValues, params]);
    setStep((prev:any) => prev +1)
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Reinicia la posición del scroll cuando avanza un step
    if (step === 3) {
      postStudent(formValues)
    }
    
  }, [step, formValues])
  
  const steps = [
    <div key={1}>
      <StepOne collegesData={collegesData} onSubmit={getFormData} />
    </div>,
    <div key={2}>
      <StepTwo data={fisrtQuizData} onSubmit={getFormData}/>
    </div>,
    <div key={3}>
      <StepTwo data={secondQuizData} onSubmit={getFormData}  />
    </div>,
    <div key={4}>
      <StepFour surveyData={formValues[0]} />
    </div>
  ]

  return (
    steps[step]
  )
}
