import { createSlice } from '@reduxjs/toolkit';
const initialValue ={
    count:0
}
const counterReducerSlice = createSlice({
    name: 'counter', //name of reducer state value in store => (state=state.counter //extracts state value from whole store)
    initialState:initialValue, //initial value of this partiicular reducer state
    reducers: {
        //direct actions logic only --> no need of returning object in action functions in toolkit

        //action method takes --> whole (store state) and payload
        incrementFn: (state) => {
        state.count += 1
      },
      decrementFn: (state) => {
        state.count -= 1
      },
      multipleByNumFn: (state, action) => {
        //action.payload --> value passed to action in jsx
        state.count *= action.payload
      },
    },
  });
export const {incrementFn,decrementFn,multipleByNumFn}=counterReducerSlice.actions;//extraction actions from slice
export default counterReducerSlice.reducer; //export only reducer

//******* Important note in slice we add reducers ---> but in export reducer and aslo in store configuration (reducer) */