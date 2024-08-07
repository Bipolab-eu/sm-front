import { getSurveys } from "@/lib/api";
import Stepper from "@/components/Stepper";


export default async function Dashboard() {
  const firstQuiz = await getSurveys(1)
  const secondQuiz = await getSurveys(2)

  return (
    <Stepper fisrtQuizData={firstQuiz} secondQuizData={secondQuiz} />
  )
}
