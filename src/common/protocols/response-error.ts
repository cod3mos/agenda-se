export interface ResponseErrorBody {
  code: string
  errors?: any[]
  message: string
}

export interface ResponseError {
  getStatusCode: () => number
  getBody: () => ResponseErrorBody
}
