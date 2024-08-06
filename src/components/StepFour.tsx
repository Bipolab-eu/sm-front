import Link from "next/link";

interface Props {
  surveyData: any; // Mejorar esto un poco
}

export default function StepFour({ surveyData }:Props) { 
  
  const { collegeId } = surveyData

  return (
    <div className=" text-center flex justify-center items-center h-screen">
      <h1>Gracias por participar, puedes ver los datos de tu centro pulsando <Link href={`/map/${collegeId}`}><strong>Aqui</strong></Link></h1>
    </div>
  )
}
