import { createSlice } from '@reduxjs/toolkit'

export const personSlice = createSlice({
  name: 'person',
  initialState: {
    name: '',
    img:'',
  },
  reducers: {
    setPersonDetails: (state, action) => {
      state.name = action.payload;
      state.img = '';
    },
    setPerson: (state, action) => {
      state.name = action.payload.p;
      state.img = action.payload.img;
    },
  },
})

export const { setPerson,setPersonDetails } = personSlice.actions;
export default personSlice.reducer;
