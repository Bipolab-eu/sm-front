import { getColleges, getCourses, getQuiz } from "@/lib/api";
import Stepper from "../../../components/Stepper";


export default async function Dashboard() {
  const colleges = await getColleges()
  const courses = await getCourses()
  const firstQuiz = await getQuiz(2)
  const secondQuiz = await getQuiz(3)

  return (
    <Stepper collegesData={colleges} coursesData={courses} fisrtQuizData={firstQuiz} secondQuizData={secondQuiz} />
  )
}
