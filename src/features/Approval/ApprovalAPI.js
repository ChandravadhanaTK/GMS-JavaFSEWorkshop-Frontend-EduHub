import { API } from '../../api'

export const getAllApprovalsAPI = async () => {
  try {
    console.log('getAllApproval()')
    //const res = await API.get(`/Approver`)
    const res = await API.get('/approvals')
    console.log('response = ', res);
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

//export const getApproverById = async (ApproverId) => {
export const getApprovalByIdAPI = async (approvalId) => {
  try {
    const res = await API.get(`/approval/${approvalId}`)
    console.log('GET API response object =',res);

    return res.data;
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

// delete approval by ID
//export const deleteApprover = async (ApproverId) => {
export const deleteApprovalByIdAPI = async (ApprovalId) => {
  try {
    const res = await API.delete(`/approval/${ApprovalId}`)
    console.log('DELETE API response object =', res);

    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

// delete all approvals 
  export const deleteAllApprovalsAPI = async () => {
    try {
      const res = await API.delete(`/approval`)
      console.log('DELETE all API response object =', res);
  
      return res.data
    } catch (error) {
      console.error(error)
      throw new Error('Request failed!')
    }
  }
  
//export const updateApprover = async (Approver) => {
export const updateApprovalAPI = async (updatedApproval) => {
  try {
    //const res = await API.put(`/Approver/${Approver.id}`, Approver)
    const res = await API.put(`/approval`, updatedApproval)
    console.log('PUT update approval API response = ', res)
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Request failed!')
  }
}

//export const addApprover = async (Approver) => {
export const addApprovalAPI = async (newApproval) => {  
  try {
    //const res = await API.put('/Approver', newApproval)
    const res = await API.post('/approval', newApproval);
    console.log('Approval added to database = ', res);
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Add approval Request failed!')
  }
}
