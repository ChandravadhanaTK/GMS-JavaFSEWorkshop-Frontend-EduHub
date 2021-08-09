import { API } from '../api'

const getTest = async () => {
  const res = await API.get('/todo/1')
  console.log(res)

  return res.data
}