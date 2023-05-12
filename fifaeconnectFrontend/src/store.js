import { configureStore } from '@reduxjs/toolkit'
import managerSlice from './managers/managerSlice'
import coachSlice from './coaches/coachSlice'

const store = configureStore({
  reducer: {
    managers: managerSlice,
    coaches: coachSlice,
  }
})

export default store