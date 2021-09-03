import { API } from '../../api'

export const getAllLearner = async () => {
  try {
    const res = await API.get(`/learner`)
    console.log(res.data)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const getLearnerById = async (requestId) => {
  try {
    const res = await API.get(`/learner/${requestId}`)
    console.log(res.data)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const getLearnerByUser = async (userId) => {
  try {
    const res = await API.get(`/learner/user/${userId}`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const updateLearner = async (learner) => {
  try {
    const res = await API.put(`/learner/${learner.requestId}`, learner)
    console.log(res)
  
    return res
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const addLearner = async (learner) => {
  try {
    const res = await API.put('/learner', learner)
    console.log(res)
  
    return res
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const deleteLearner = async (requestId) => {
  try {
    const res = await API.delete(`/learner/${requestId}`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const deleteLearnerUser = async (userId) => {
  try {
    const res = await API.delete(`/learner/user/${userId}`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const deleteAllLearner = async () => {
  try {
    const res = await API.delete(`/learner`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}


