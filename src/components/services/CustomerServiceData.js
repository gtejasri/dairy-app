import axios from 'axios';

// Create services for other components in this way. 

const viewCustomerByIdService = (customerId) => {
    console.log(`getCustomerByIdService`);
    return axios.get(`/customer/view/${customerId}`);
}
const viewCustomersService= () => {
    console.log(`getAllCustomersService`);
    return axios.get(`/customer/all`);
}

// const insertCustomerService = (customer) => {
//     console.log(`getCustomerByIdService`);
//     return axios.post(`/customer/add`, customer);
// }

// const updateCustomerService= (customer) => {
//     console.log(`getCustomerByIdService`);
//     return axios.post(`/customer/update`, customer);
// }

// const deleteCustomerByIdService = (customerId) => {
//     console.log(`getCustomerByIdService`);
//     return axios.post(`/customer/delete/${customerId}`);
// }



export { viewCustomerByIdService, viewCustomersService };
