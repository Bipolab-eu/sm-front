'use client'

import { useEffect, useState } from "react"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import StepFour from "./StepFour"
import { postStudent } from "@/lib/api"

interface Props {
  collegesData: Array<Object>
  coursesData: Array<Object>
  fisrtQuizData: Array<Object>
  secondQuizData: Array<Object>
}


export default function Stepper({ collegesData, coursesData, fisrtQuizData, secondQuizData }:Props) {
  const [step, setStep] = useState(0)
  const [formValues, setFormValues] = useState(Array)

  const getFormData = (params:any) => {
    setFormValues([...formValues, params]);
    setStep((prev:any) => prev +1)
  };

  useEffect(() => {
    if (step === 3) {
      postStudent(formValues)
    }
    
  }, [step, formValues])

  console.log(formValues) // borrar en producción
  
  const steps = [
    <div key={1}>
      <StepOne collegesData={collegesData} courseData={coursesData} onSubmit={getFormData} />
    </div>,
    <div key={2}>
      <StepTwo data={fisrtQuizData} onSubmit={getFormData}/>
    </div>,
    <div key={3}>
      <StepThree data={secondQuizData} onSubmit={getFormData}  />
    </div>,
    <div key={4}>
      <StepFour />
    </div>
  ]

  return (
    steps[step]
  )
}
