import { API } from '../../api'

export const getAllCourse = async () => {
  try {
    const res = await API.get(`/course`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request for View All Courses failed!')
  }
}

export const getCourseById = async (courseId) => {
  try {
    const res = await API.get(`/course/${courseId}`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request for View Course failed!')
  }
}

export const updateCourse = async (course) => {
  try {
    const res = await API.put(`/course/${course.courseid}`, course)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request for Update Course failed!')
  }
}

export const addCourse = async (course) => {
  try {
    const res = await API.put('/course', course)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed to Add Course!')
  }
}

export const deleteCourse = async (courseId) => {
  try {
    const res = await API.delete(`/course/${courseId}`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed to Delete Course!')
  }
}


export const deleteAllCourses = async () => {
  try {
    const res = await API.delete(`/course`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed to Delete All Courses!')
  }
}