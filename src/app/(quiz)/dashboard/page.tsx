import { getColleges, getQuiz } from "@/lib/api";
import Stepper from "../../../components/Stepper";


export default async function Dashboard() {
  const colleges = await getColleges()
  const firstQuiz = await getQuiz(2)
  const secondQuiz = await getQuiz(3)

  return (
    <Stepper collegesData={colleges} fisrtQuizData={firstQuiz} secondQuizData={secondQuiz} />
  )
}
