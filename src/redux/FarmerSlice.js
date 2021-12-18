import { createSlice } from "@reduxjs/toolkit";
import Farmer from "../components/models/Farmer";

// step 3 for redux - create slices for each components 
const FarmerSlice = createSlice({

    name: 'farm',

    initialState: {
        // empState: {
        //     eid: 101,
        //     firstName: 'Sonu',
        //     salary: 10.5
        // }

        farmState: new Farmer(),
        farmList: []


    },

    reducers: {

        getFarmerById: (state, action) => {
            console.log('farmer slice reducer');
            state.farmState = action.payload;
        },

        getAllFarmer: (state, action) => {
            console.log('farmSlice reducers getAllfarmer');
            state.farmList = action.payload;
        },
        deleteFarmerByID: (state, action) => {
            console.log('farmSlice reducers deleteFarmerById');
            state.farmList = action.payload;
        },
        
        // more methods will be added 
    }
});

export const { getFarmerById, getAllFarmer,deleteFarmerByID } = FarmerSlice.actions;

export default FarmerSlice.reducer;