import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  error: '',
  dataList: [
    {
      id: 1,
      name: 'Demo 1'
    },
    {
      id: 2,
      name: 'Demo 2'
    },
    {
      id: 3,
      name: 'Demo 3'
    }
  ],
  data: ''
}

const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    setDemoLoading(state) {
      state.isLoading = true
    },
    addDemo(state, action) {
      const newData = {
        id: Math.random(),
        name: action.payload.name
      }
      state.dataList = [...state.dataList, newData]
    }
  }
})

export const { setDemoLoading, addDemo } = demoSlice.actions

export default demoSlice.reducer
