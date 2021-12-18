import axios from 'axios';

// Create services for other components in this way. 

const getFarmerByIdService = (fid) => {
    console.log(`getFarmerByIdService`);
    return axios.get(`http://localhost:8086/farmer/get/${fid}`);
}
const getAllFarmerService = () => {
    console.log(`getAllFarmerService`);
    return axios.get(`http://localhost:8086/farmer/all`);
}

const addFarmerService = (farmer) => {
    console.log(`addFarmer`);
    return axios.post(`http://localhost:8086/farmer/add`, farmer);
}

const updateFarmerService = (farmer) => {
    console.log(`updateService`);
    return axios.put(`http://localhost:8086/farmer/update`, farmer);
}

const deleteFarmerService = (fid) => {
    console.log(`deleteFarmer`);
    return axios.delete(`http://localhost:8086/farmer/delete/${fid}`);
}






export { getFarmerByIdService, getAllFarmerService, addFarmerService, updateFarmerService, deleteFarmerService};