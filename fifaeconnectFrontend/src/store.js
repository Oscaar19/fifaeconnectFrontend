import { configureStore } from '@reduxjs/toolkit'
import managerSlice from './managers/managerSlice'
import coachSlice from './coaches/coachSlice'
import usuariSlice from './usuaris/usuariSlice'

const store = configureStore({
  reducer: {
    managers: managerSlice,
    coaches: coachSlice,
    usuaris: usuariSlice,
  }
})

export default store