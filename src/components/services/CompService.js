import axios from 'axios';

// Create services for other components in this way. 

const getCompanyByIdService = (companyId) => {
    console.log(`getCompanyByIdService`);
    return axios.get(`http://localhost:8086/company/get/${companyId}`);//http://localhost:8082//company/add
}
const getAllCompanyService = () => {
    console.log(`getAllCompanyService`);
    return axios.get(`http://localhost:8086/company/all`);
}

const insertCompanyService = (company) => {
    console.log(`addcompany`);
    return axios.post(`http://localhost:8086/company/add`, company);
}

const updateCompanyService = (company) => {
    console.log(`updateCompany`);
    return axios.put(`http://localhost:8086/company/update`, company);
}

const deleteCompanyService = (companyId) => {
    console.log(`deleteCompany`);
    return axios.post(`http://localhost:8086/company/delete/${companyId}`);
}




export { getCompanyByIdService, getAllCompanyService, insertCompanyService, updateCompanyService, deleteCompanyService };
//  import axios from 'axios';

//  // Create services for other components in this way. 
 
//  const getCompanyByIdService = (companyId) => {
//      console.log(`getCompanyByIdService`);
//     return axios.get(`/company/get/${companyId}`);
//  }
//  const getAllCompanyService = () => {
//      console.log(`getCompanyByIdService`);
//      return axios.get(`/company/all`);
//  }
 
//  const addcompanyService = (company) => {
//      console.log(`getCompanyByIdService`);
//      return axios.post(`/company/add`, company);
//  }
 
//  const updatecompanyService = (company) => {
//      console.log(`getCompanyByIdService`);
//      return axios.put(`/company/update`, company);
//  }
 
//  const deletecompanyByIdService = (companyid) => {
//      console.log(`getCompanyByIdService`);
//      return axios.post(`/company/delete/${companyid}`);
//  }
 
//  const getCompanyByNameService = (firstName) => {
//      console.log(`getEmpByIdService`);
//      return axios.post(`/emp/getbyname/${firstName}`);
//  }
 
 //const deletecompanyByIdService = (companyid) => {
     
    // export { getCompanyByIdService, getAllCompanyService};
    //export { getCompanyByIdService, getAllCompanyService, addcompanyService, updatecompanyService,  deletecompanyByIdService};