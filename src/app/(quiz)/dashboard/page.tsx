import { getColleges, getQuiz } from "@/lib/api";
import Stepper from "../../../components/Stepper";


export default async function Dashboard() {
  const colleges = await getColleges()
  const quiz = await getQuiz(2)

  return (
    <Stepper collegesData={colleges} quizData={quiz} />
  )
}
