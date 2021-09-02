import { API } from '../../api'

export const getAllApprover = async () => {
  try {
    const res = await API.get(`/Approver`)
    console.log(res)

    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const getApproverById = async (ApproverId) => {
  try {
    const res = await API.get(`/Approver/${ApproverId}`)
    console.log(res)

    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const updateApprover = async (Approver) => {
  try {
    const res = await API.put(`/Approver/${Approver.id}`, Approver)
    console.log(res)

    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const addApprover = async (Approver) => {
  try {
    const res = await API.put('/Approver', Approver)
    console.log(res)

    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

export const deleteApprover = async (ApproverId) => {
  try {
    const res = await API.delete(`/Approver/${ApproverId}`)
    console.log(res)

    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}