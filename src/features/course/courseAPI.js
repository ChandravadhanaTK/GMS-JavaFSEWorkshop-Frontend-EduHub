import { API } from '../../api'

export const getAllCourse = async () => {
  try {
    const res = await API.get(`/Course`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request for View All Courses failed!')
  }
}

export const getCourseById = async (courseId) => {
  try {
    const res = await API.get(`/Course/${courseId}`)
    console.log('inside get course by id')
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request for View Course failed!')
  }
}

export const updateCourse = async (course) => {
  try {
    const res = await API.put(`/Course/${course.courseId}`, course)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request for Update Course failed!')
  }
}

export const addCourse = async (course) => {
  console.log('entered api for add');
  try {
    console.log('inside API')
    console.log(course)

    const res = await API.put('/Course', course)
    console.log('response' + res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed to Add Course!')
  }
}

export const deleteCourse = async (courseId) => {
  try {
    const res = await API.delete(`/Course/${courseId}`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed to Delete Course!')
  }
}


export const deleteAllCourses = async () => {
  try {
    const res = await API.delete(`/Course`)
    console.log(res)
  
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed to Delete All Courses!')
  }
}