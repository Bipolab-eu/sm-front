import Link from "next/link";

interface Props {
  surveyData: any; // Mejorar esto un poco
}

export default function StepFour({ surveyData }:Props) { 
  
  const { college } = surveyData

  return (
    <h1>gracias por participar, puedes ver los datos de tu centro pulsando <Link href={`/map/${college}`}><strong>Aqui</strong></Link></h1>
  )
}
