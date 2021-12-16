import { createSlice } from "@reduxjs/toolkit";
import Customer from "../components/models/Customer";

// step 3 for redux - create slices for each components 
const CustomerSlice = createSlice({

    name: 'customer',

    initialState: {
        // empState: {
        //     eid: 101,
        //     firstName: 'Sonu',
        //     salary: 10.5
        // }

        customerState: new Customer(),
        customerList: []


    },

    reducers: {

        viewCustomerById: (state, action) => {
            console.log('CustomerSlice reducers getCustomerById');
            state.customerState = action.payload;
        },

        viewCustomers: (state, action) => {
            console.log('CustomerSlice reducers getAllCustomers');
            state.customerList = action.payload;
        },
        // insertCustomer: (state, action) => {
        //     console.log('CustomerSlice reducers AddCustomers');
        //     state.customerList = action.payload;
        // },
        // updateCustomer: (state, action) => {
        //     console.log('CustomerSlice reducers updateCustomers');
        //     state.customerList = action.payload;
        // },
        deleteCustomerById: (state, action) => {
            console.log('CustomerSlice reducers deleteCustomerByID');
            state.customerList = action.payload;
        }


        // more methods will be added 


    }
});

//  export const { viewCustomerById, viewCustomers,insertCustomer,updateCustomer,deleteCustomerById } = CustomerSlice.actions;
 export const { viewCustomerById, viewCustomers ,deleteCustomerById} = CustomerSlice.actions;

export default CustomerSlice.reducer;