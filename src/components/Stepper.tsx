'use client'

import { useState } from "react"
import StepCollege from "./StepCollege"
import StepQuizOne from "./StepQuizOne"

interface Props {
  collegesData: Array<Object>
  quizData: Array<Object>
}


export default function Stepper({ collegesData, quizData }:Props) {
  const [activeTab, setActiveTab] = useState(0)

  const steps = [
    <div key={'college'}>
      <StepCollege data={collegesData} />
    </div>,
    <div key={'quiz'}>
      <StepQuizOne data={quizData} />
    </div>
  ]

  return (
    <div>
      <div>
        {
          steps[activeTab]
        }
      </div>
      <button
        onClick={() => setActiveTab(prev => prev -1 )}
        disabled={activeTab === 0}
        style={{ display: activeTab === 0 ? 'none' : 'inline' }}
      >
        Atrás
      </button>
      <button
        onClick={() => setActiveTab(prev => prev +1 )}
        disabled={activeTab === steps.length - 1}
      >
        Siguiente
      </button>

    </div>
  )
}
