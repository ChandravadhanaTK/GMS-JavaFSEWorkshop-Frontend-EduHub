import { API } from '../../api'

export const getAllCourse = async () => {
  try {
    const res = await API.get(`/course`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const getCourseById = async (courseId) => {
  try {
    const res = await API.get(`/course/${courseId}`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const updateCourse = async (course) => {
  try {
    const res = await API.put(`/course/${course.courseid}`, course)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const addCourse = async (course) => {
  try {
    const res = await API.put('/course', course)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const deleteCourse = async (courseId) => {
  try {
    const res = await API.delete(`/course/${courseId}`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}