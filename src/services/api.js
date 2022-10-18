/* eslint-disable no-param-reassign */
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "https://devapigw.bluex.cl/api/tms/v1",
  headers: {
    apikey: "Gt295TfRawWPxkrFkxwWQVlM1MuXJhIS",
  },
})

const axiosInstanceFree = axios.create()

export const useApi = () => {
  const configAuthorization = (session) => {
    axiosInstance.defaults.headers.common.Authorization = session?.ssoToken
    axiosInstance.defaults.headers.common.sessionId = session?.sessionid
  }

  return { axiosInstance, configAuthorization, axiosInstanceFree }
}
