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
  await fetch(`${url}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          college: {
            id: params[0],
            name: params[1]
          }
        }
      })
    })

    .then(response => response.json())
    .then(error => console.log(error));
}