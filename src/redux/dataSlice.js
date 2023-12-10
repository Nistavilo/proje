import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createDataFunc: (state,action) => {
      state.value += action.payload
    }

},
})

// Action creators are generated for each case reducer function
export const {  } = dataSlice.actions

export default dataSlice.reducer