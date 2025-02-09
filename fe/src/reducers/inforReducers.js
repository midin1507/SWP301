import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {}
}

const inforReducers = createSlice({

  name: 'inforReducer',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload;
    }
  }
});

export const {setUser} = inforReducers.actions

export default inforReducers.reducer;