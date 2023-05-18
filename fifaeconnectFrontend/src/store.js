import { configureStore } from '@reduxjs/toolkit'
import managerSlice from './managers/managerSlice'
import coachSlice from './coaches/coachSlice'
import clubSlice from './clubs/clubSlice'
import jugadorSlice from './jugadors/jugadorSlice'
import goldenSlice from './goldens/goldenSlice'

const store = configureStore({
  reducer: {
    managers: managerSlice,
    coaches:  coachSlice,
    clubs:    clubSlice,  
    jugadors: jugadorSlice, 
    goldens: goldenSlice, 
  }
})

export default store