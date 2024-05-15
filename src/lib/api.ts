'use server'

const url = process.env.API_URL

const headers = {
  'Content-Type': 'application/json',
};

export async function getColleges () {
  try {
    const response = await fetch(`${url}/colleges`, {
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

export async function getCourses () {
  try {
    const response = await fetch(`${url}/courses`, {
      cache: 'no-store'
    })

    const { data } = await response.json()

    return data.map(({ id, attributes: { title } }: any) => ({ id, title }))


  } catch (error) {
    console.error('Error', error)
    throw error
  }
}

export async function getQuiz (paramId:Number) {
  try {
    const response = await fetch(`${url}/quizzes/${paramId}?populate=*`, {
      cache: 'no-store'
    })

    const { data: {
      attributes: {
        question
      }
    } } = await response.json()

    return question.map(({ id, title, answer_a, answer_b, answer_c }: any) => ({ id, title, answer_a, answer_b, answer_c }));

  } catch (error) {
    console.error('Error', error)
    throw error
  }
}

export async function postStudent (params:any) {
  const { college, course } = params[0]

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
          course: {
            id: course
          }
        }
      })
    })

    .then(response => response.json())
    .then(error => console.log(error));
}