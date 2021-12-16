import axios from 'axios';

// Create services for other components in this way. 

const getCustomerByIdService = (customerId) => {
    console.log(`getCustomerByIdService`);
    return axios.get(`http://localhost:8086/customer/view/${customerId}`);
}
const getAllCustomerService= () => {
    console.log(`getAllCustomersService`);
    return axios.get(`http://localhost:8086/customer/all`);
}

const AddCustomerService = (customer) => {
    console.log(`AddCustomerService`);
    return axios.post(`http://localhost:8086/customer/add`, customer);
}

const updateCustomerService= (customer) => {
    console.log(`UpdateCustomerIdService`);
    return axios.post(`http://localhost:8086/customer/update`, customer);
}

const deleteCustomerByIdService = (customerId) => {
    console.log(`deleteCustomerByIdService`);
    return axios.post(`http://localhost:8086/customer/delete/${customerId}`);
}



// export { getCustomerByIdService, getAllCustomerService };
export { getCustomerByIdService, getAllCustomerService ,AddCustomerService,updateCustomerService,deleteCustomerByIdService};




