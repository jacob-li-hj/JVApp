import type { RequestContext } from '@rest/types'
import type { Method, AxiosResponse } from 'axios'
import axiosRequest from '@commerce/utils/axios-request'


const fetchData = async <T>({
  url,
  method: requestMethod,
  data: inputData,
  header = { 'Content-Type': 'application/json' }
}: RequestContext): Promise<AxiosResponse<T>> => {
  console.log(
    `fetchData request url: ${url} request data:`,
    JSON.stringify(inputData)
  )
  const data = await axiosRequest(url, {
    method: requestMethod as Method,
    data: inputData,
    headers: header
  })

  console.log('3333333', data)
  
  return (data as AxiosResponse<T>) || ({} as T)
}

export default fetchData
