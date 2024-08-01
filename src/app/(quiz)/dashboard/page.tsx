import { getColleges, getSurveys } from "@/lib/api";
import Stepper from "../../../components/Stepper";


export default async function Dashboard() {
  const colleges = await getColleges()
  const firstQuiz = await getSurveys(1)
  const secondQuiz = await getSurveys(2)

  return (
    <Stepper collegesData={colleges} fisrtQuizData={firstQuiz} secondQuizData={secondQuiz} />
  )
}
