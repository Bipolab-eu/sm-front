'use server'

import { Concert_One } from "next/font/google"

const url = process.env.API_URL

export async function getColleges () {
  try {
    const response = await fetch(`${url}/colleges?sort=name:asc`)

    const { data } = await response.json()

    return data.map(({ id, attributes: { name, latitude, longitude } }: any) => ({ id, name, latitude, longitude }))
  
  } catch (error) {
    console.error('Error', error)
    throw error
  }
}

export async function findOneCollege (params:String) {
  try {
    const response = await fetch(`${url}/colleges?filters[name][$containsi]=${params}&pagination[limit]=10`)
    const { data }  = await response.json()

    if (params !== '') {
      return data.map((item:any) => ({
        id: item.id,
        name: item.attributes.name
      }))
    }
  
    
  } catch (error) {
    console.error('Error', error)
    throw error
  }
  
}

export async function findCollege (paramId: Number) {
  try {
    const response = await fetch(`${url}/colleges/${paramId}?populate[students][populate][0]=course`)

    const { data: { attributes: { name, students} } } = await response.json()

    return { name, students }

  } catch (error) {
    console.error('Error', error)
    throw error
  }

}

export async function getSurveys (paramId:Number) {
  try {
    const response = await fetch(`${url}/surveys/${paramId}?populate[form][populate][0]=answer`)

    const { data: {
      attributes: {
        form
      }
    } } = await response.json()

    return form.map(({ id, question, answer }: any) => ({ id, question, answer }));

  } catch (error) {
    console.error('Error', error)
    throw error
  }
}

export async function postStudent (params:any) {
  const { collegeId, course, gender, age } = params[0]
  
  // Convierte los valores del objeto en array
  const [ Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16 ]:any = Object.values(params[1])
  const depresion = Q1 + Q2 + Q3 + Q4
  const suicidio = Q5 + Q6 + Q7
  const ansiedad = Q8 + Q9 + Q10
  const agresividad = Q11 + Q12 + Q13
  const drogas = Q14 + Q15 + Q16

  // Convierte los valores del objeto en array
  const [ Q17, Q18, Q19, Q20, Q21, Q22, Q23, Q24, Q25, Q26, Q27, Q28, Q29, Q30, Q31, Q32, Q33, Q34, Q35, Q36, Q37 ]:any = Object.values(params[2])
  const dificultadesEmocionales = Q17 + Q18
  const prosocial = Q19 + Q20
  const autoestima = Q21 + Q22
  const absentismo = Q23
  const educacionSexual = Q24
  const habitosPositivos = Q25 + Q26 + Q27
  const bullying = Q28 + Q29
  const pertenencia = Q30 + Q31
  const educacionSMental = Q32 
  const relacionPadres = Q33
  const comunidad = Q34
  const cooperacion = Q35
  const integracion = Q36
  const usoRS = Q37


  await fetch(`${url}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          college: {
            id: collegeId,
          },
          course,
          gender,
          age,
          depresion,
          suicidio,
          ansiedad,
          agresividad,
          drogas,
          dificultadesEmocionales,
          prosocial,
          autoestima,
          absentismo,
          educacionSexual,
          habitosPositivos,
          bullying,
          pertenencia,
          educacionSMental,
          relacionPadres,
          comunidad,
          cooperacion,
          integracion,
          usoRS
        }
      })
    })

    .then(response => response.json())
    .then(error => console.log(error));
}
