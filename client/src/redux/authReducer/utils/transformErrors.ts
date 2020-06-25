import { ErrorInputType, ErrorOutputType } from "src/types/authDataTypes"

export const transformErrors = (response: ErrorInputType): ErrorOutputType => {
  let payload = ['Server is not aviable']
  if(!response) return payload


  if(response.data.errors) {
    payload = response.data.errors.map(error => error.msg)
  } else if (response.data.message) {
    payload = [response.data.message]
  }

  return payload
}