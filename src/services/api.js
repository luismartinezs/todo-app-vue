const BASE_PATH_NAME = 'api/v1'
const baseUrl = 'http://localhost:3000'

const checkStatusCode = response => {
  if (response.status >= 200 && response.status < 400) {
    return response
  }
  if ([400, 401, 403, 404].includes(response.status)) {
    throw new Error(response.status)
  }
  throw new Error('Unexpected error')
}

async function getRequest (url) {
  let response = await fetch(url)
  response = checkStatusCode(response)
  return response.json()
}

async function apiRequest ({ url, method = 'POST', payload = null }) {
  const options = {
    method: method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if (payload) options.body = JSON.stringify(payload)
  let response = await fetch(url, options)
  response = checkStatusCode(response)
  return response.json()
}

export const getToDos = () => {
  const url = `${baseUrl}/${BASE_PATH_NAME}/todo`
  return getRequest(url)
}

export const createToDo = toDo => {
  const url = `${baseUrl}/${BASE_PATH_NAME}/todo`
  return apiRequest({ url, payload: toDo })
}

export const editToDo = toDo => {
  const url = `${baseUrl}/${BASE_PATH_NAME}/todo/${toDo.id}`
  const { title, description, done } = toDo
  return apiRequest({
    url,
    method: 'PUT',
    payload: { title, description, done }
  })
}

export const deleteToDo = toDoId => {
  const url = `${baseUrl}/${BASE_PATH_NAME}/todo/${toDoId}`
  return apiRequest({ url, method: 'DELETE' })
}

export const loginWithCredentials = ({ email, password }) => {
  const url = `${baseUrl}/${BASE_PATH_NAME}/login`
  return apiRequest({ url, payload: { email, password } })
}

export const handleRegistration = ({ email, password }) => {
  const url = `${baseUrl}/${BASE_PATH_NAME}/register`
  return apiRequest({ url, payload: { email, password } })
}
