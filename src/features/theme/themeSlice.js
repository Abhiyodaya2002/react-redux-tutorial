import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
const initialState = {
  color: "", //name of state is color
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTextColor: (state, action) => {
      state.color = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTextColor } = themeSlice.actions

export default themeSlice.reducer  