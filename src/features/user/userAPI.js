import { API } from '../../api';

export const getAllUser = async () => {
    try {
        const res   = await API.get(`/user`);
        console.log(res);

        return res.data;
    } catch (error) {
        console.error(error);
        throw new Error('Request failed for getAllUser');
    }
}

export const addUser = async (user) => {
    try {
      const res = await API.put('/user', user);
      console.log(res);
    
      return res.data;
    } catch (error) {
      console.error(error);
      throw new Error('Request failed for Add User!');
    }
  }
  export const getUserById = async (id) => {
    try {
      const res = await API.get(`/user/${id}`)
      console.log(res)
    
      return res.data
    } catch (error) {
      console.error(error)
      throw new Error('Request failed for Getuser By Id!')
    }
  }

  export const updateUser = async (user) => {
    try {
      const res = await API.put(`/user/${user.id}`, user)
      console.log(res)
    
      return res.data
    } catch (error) {
      console.error(error)
      throw new Error('Request failed for Update User!')
    }
  }

export const deleteUser = async (id) => {
    try {
      const res = await API.delete(`/user/${id}`)
      console.log(res)
    
      return res.data
    } catch (error) {
      console.error(error)
      throw new Error('Request failed for Delete User!')
    }
  }

export const deleteAllUsers = async () => {
    try {
      const res = await API.delete(`/users`)
      console.log(res)
    
      return res.data
    } catch (error) {
      console.error(error)
      throw new Error('Request failed for Delete All User!')
    }
  }