import { getColleges, getQuizzes } from "@/lib/api";
import Stepper from "../../../components/Stepper";


export default async function Dashboard() {
  const colleges = await getColleges()
  const quiz = await getQuizzes()

  return (
    <Stepper collegesData={colleges} quizData={quiz} />
  )
}
