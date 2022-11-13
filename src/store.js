import { configureStore } from '@reduxjs/toolkit'
import counterReducerSlice from '../src/reducers/counterReducer';
//create store and reducers
const store = configureStore({
    reducer: {
        counter:counterReducerSlice
    },
})

export default store;