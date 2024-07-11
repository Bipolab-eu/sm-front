'use server'

const url = process.env.API_URL

export async function getColleges () {
  try {
    const response = await fetch(`${url}/colleges?sort=name:asc`, {
      cache: 'no-store'
    })

    const { data } = await response.json()

    return data.map(({ id, attributes: { name, latitude, longitude } }: any) => ({ id, name, latitude, longitude }))
  
  } catch (error) {
    console.error('Error', error)
    throw error
  }
}

export async function findCollege (paramId: Number) {
  try {
    const response = await fetch(`${url}/colleges/${paramId}?populate[students][populate][0]=course`, {
      cache: 'no-store'
    })

    const { data: { attributes: { name, students} } } = await response.json()

    return { name, students }

  } catch (error) {
    console.error('Error', error)
    throw error
  }

}

export async function getQuiz (paramId:Number) {
  try {
    const response = await fetch(`${url}/quizzes/${paramId}?populate[question][populate][0]=answer`, {
      cache: 'no-store'
    })

    const { data: {
      attributes: {
        question
      }
    } } = await response.json()

    return question.map(({ id, title, answer }: any) => ({ id, title, answer }));

  } catch (error) {
    console.error('Error', error)
    throw error
  }
}

export async function postStudent (params:any) {
  const { college, course, gender } = params[0]
  const [ a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p ] = params[1]
  const depresion = a + b + c + d
  const suicidio = e + f + g
  const ansiedad = h + i + j
  const agresividad = k + l + m
  const drogas = n + o + p

  await fetch(`${url}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          college: {
            id: college,
          },
          course,
          gender,
          depresion,
          suicidio,
          ansiedad,
          agresividad,
          drogas
        }
      })
    })

    .then(response => response.json())
    .then(error => console.log(error));
}