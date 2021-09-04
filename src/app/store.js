import { configureStore, combineReducers } from "@reduxjs/toolkit";

import DemoReducer from '../features/demo/demoSlice'
import UserReducer from '../features/user/userSlice'

const rootReducer = combineReducers({
  demo: DemoReducer,
  user: UserReducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store