import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'
const initialState = {
  data: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createDataFunc: (state,action) => {
      state.value = [...state.data, action.payload]
    }

},
})

// Action creators are generated for each case reducer function
export const { createDataFunc } = dataSlice.actions

export default dataSlice.reducer