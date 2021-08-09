import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  error: '',
  dataList: [],
  data: ''
}

const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {}
})