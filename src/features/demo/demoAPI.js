import { API } from '../../api'

export const getAllDemo = async () => {
  try {
      const res = await API.get(`/demo`);
      console.log(res);
  
      return res.data;
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const getDemoById = async (demoId) => {
  try {
    const res = await API.get(`/demo/${demoId}`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const updateDemo = async (demo) => {
  try {
    const res = await API.put(`/demo/${demo.id}`, demo)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const addDemo = async (demo) => {
  try {
    const res = await API.put('/demo', demo)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const deleteDemo = async (demoId) => {
  try {
    const res = await API.delete(`/demo/${demoId}`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}