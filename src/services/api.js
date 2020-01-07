const BASE_PATH_NAME = 'api/v1'
const baseUrl = 'http://localhost:3000'

const checkStatusCode = response => {
  if (response.status >= 200 && response.status < 400) {
    return response
  }
  if ([400, 401, 403, 404].includes(response.status)) {
    throw new Error(response.status)
  }
  throw new Error('other')
}

async function getRequest (url) {
  try {
    let response = await fetch(url)
    response = checkStatusCode(response)
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getToDos = () => {
  const url = `${baseUrl}/${BASE_PATH_NAME}/todo`
  return getRequest(url)
}
