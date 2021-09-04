import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  error: '',
  dataList: [
    {
      id: 1,
      userName: 'User 1'
    },
    {
      id: 2,
      userName: 'User 2'
    },
    {
      id: 3,
      userName: 'User 3'
    },
    {
      id: 4,
      userName: 'User 4'
    }
  ],
  data: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoading(state) {
      state.isLoading = true
    },
    addUser(state, action) {
      const newData = {
        id: Math.random(),
        userName: action.payload.userName,
        password: action.payload.password,
        firstName: action.payload.firstName,
        secondName: action.payload.secondName,
        emailId: action.payload.emailId,
        mobile: action.payload.mobile,
        location: action.payload.location,
        designation: action.payload.designation,
        experience: action.payload.experience,
        primarySkills: action.payload.primarySkills,
        secondarySkills: action.payload.secondarySkills,
        role: action.payload.role,
        createdOn: action.payload.createdOn,
        lastLogin: action.payload.lastLogin

      }
      state.dataList = [...state.dataList, newData]
    }
  }
})

export const { setUserLoading, addUser } = userSlice.actions

export default userSlice.reducer
