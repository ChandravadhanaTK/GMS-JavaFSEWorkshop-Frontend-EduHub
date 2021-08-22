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

export const deleteMentor = async (userId) => {
    try {
      const res = await API.delete(`/mentor/${userId}`)
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