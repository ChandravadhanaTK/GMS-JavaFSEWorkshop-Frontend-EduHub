import { configureStore, combineReducers } from "@reduxjs/toolkit";

import DemoReducer from '../features/demo/demoSlice'

const rootReducer = combineReducers({
  demo: DemoReducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store