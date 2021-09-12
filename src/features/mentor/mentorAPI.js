import { API } from '../../api';

export const getAllMentors = async () => {
    try {
        const res   = await API.get(`/mentor`);
        console.log(res);

        return res.data;
    } catch (error) {
        console.error(error);
        throw new Error('ViewAllMentors API request failed');
    }
}

export const addMentor = async (mentor) => {
    try {
      const res = await API.put('/mentor', mentor);
      console.log(res);
    
      return res.data;
    } catch (error) {
      console.error(error);
      throw new Error('addMentor API request failed!');
    }
  }
  export const getMentorByUAId = async (userid,availabilityid) => {
    try {
      console.log(userid)
      console.log(availabilityid)
      const res = await API.get(`/mentor/${userid}/${availabilityid}`)
      console.log(res)
    
      return res.data
    } catch (error) {
      console.error(error)
      throw new Error('View MentorByID Request failed!')
    }
  }
  export const getMentorById = async (userid) => {
    try {
      console.log(userid)
      const res = await API.get(`/mentor/${userid}`)
      console.log(res)
    
      return res.data
    } catch (error) {
      console.error(error)
      throw new Error('View MentorByID Request failed!')
    }
  }

  export const updateMentor = async (mentor) => {
    try {
      console.log(mentor)
      const res = await API.post(`/mentor`, mentor)
      console.log(res)
    
      return res.data
    } catch (error) {
      console.error(error)
      throw new Error('EditMentor API Request failed!')
    }
  }

export const deleteMentor = async (userid,availabilityid) => {
    try {
      console.log(availabilityid)
      console.log(userid)
      const res = await API.delete(`/mentor/${userid}/${availabilityid}`)
      console.log(res)
    
      return res.data
    } catch (error) {
      console.error(error)
      throw new Error('Delete mentor API Request failed!')
    }
  }

export const deleteAllMentor = async () => {
    try {
      const res = await API.delete(`/mentor`)
      console.log(res)
    
      return res.data
    } catch (error) {
      console.error(error)
      throw new Error('Delete All mentor API Request failed!')
    }
  }