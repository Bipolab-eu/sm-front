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

    return data.map(({ id, attributes: { name } }: any) => ({ id, name }));
  
  } catch (error) {
    console.error('Error', error)
    throw error
  }
}

export async function getQuizzes () {
  try {
    const response = await fetch(`${url}/quizzes`, {
      cache: 'no-store'
    })

    const { data } = await response.json()

    return data.map(({ id, attributes: { question, answer_a, answer_b, answer_c } }:any) => ({ id,question, answer_a, answer_b, answer_c }));

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