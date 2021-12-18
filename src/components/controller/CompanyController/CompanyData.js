//import { getCompayByIdService } from "../services/CompService";
import { useDispatch, useSelector  } from "react-redux";
import { useState } from "react";
import { getAllCompanyService,getCompanyByIdService,insertCompanyService} from "../services/CompService";
import axios from "axios";
import Company from "../models/Company";


import { getcompanyById,getAllCompany, deletecompanyById, addcompany, updatecompany } from "../../redux/CompSlice";

const CompanyData = () => {

    const [companyId, setCompanyId] = useState('');
    const dispatch = useDispatch();
    const companyDataFromStore = useSelector((state) => state.company.companyState);
    const companyList = useSelector((state) => state.company.companyList);

    const [newCompanyObj, setNewCompanyObj] = useState(new Company());
    const [updtCompanyObj, setUpdtCompanyObj] = useState(new Company());
    const [displayCompanyObj, setDisplayCompanyObj] = useState(new Company());
    const [updateCompanyObj, setUpdateCompanyObj] = useState(new Company());
    const [deleteCompany, setDeleteCompany] = useState('');
    const companyDelete = useSelector((state) => state.company.companyDelete);
    
     
     
     

    const handleCompany = (e) => {
        console.log('handleCompany');
        setCompanyId(e.target.value);
    }

    const handleAddCompany = (e) => {
        console.log(e.target.value);
        setNewCompanyObj({
            ...newCompanyObj,
            [e.target.name]: e.target.value,
        });
    }
    const handleUpdateCompany = (e) => {
        console.log(e.target.value);
        setUpdtCompanyObj({
            ...updtCompanyObj,
            [e.target.name]: e.target.value,
        });
    }

    const handleDeleteCompany = (ev) => {

        console.log('handleDeleteCompany');

        setDeleteCompany(ev.target.value);


    }
     


    const submitGetCompanyById = (evt) => {
        evt.preventDefault();
        console.log('submitGetCompanyById');
        getCompanyByIdService(companyId)
            .then((response) => { 
                dispatch(getcompanyById(response.data)) })
            .catch(() => {
                alert(`Company with ${companyId} not found.`);
            });
        console.log(Object.keys(companyList));
        setCompanyId('');
    }

    const submitGetAllCompany= (evt) => {
        evt.preventDefault();
        console.log('submitGetAllCompany');
        getAllCompanyService()
            .then((response) => {
                dispatch(getAllCompany(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    const submitAddCompany = (evt) => {
        evt.preventDefault();
        console.log('addCompany');
        axios.post(`http://localhost:8082/company/add`, newCompanyObj)
            .then((response) => {
                setDisplayCompanyObj(response.data);
                alert('Company added successfully.');
                setNewCompanyObj({ CompanyName:'', CompanyId:'',mobileNumber:'',email:'',password:'',address:''})
            
            })
            .catch(() => {
                alert("Company could not be added.");
            });
    }

    const submitUpdateCompany = (evt) => {
        evt.preventDefault();
        console.log('addCompany');
        axios.put(`http://localhost:8082//company/update`, updtCompanyObj)
            .then((response) => {
                setUpdateCompanyObj(response.data);
                alert('company details updated successfully.');
                setNewCompanyObj({ companyName:'', mobileNumber:'',email:'',password:'' ,address:''})
            
            })
            .catch(() => {
                alert("Company could not be found.");
            });
    }

    const submitDeleteCompany = (evt) => {

        evt.preventDefault();

        console.log('deleteCompanyDetails');

        axios.delete(`http://localhost:8082//company/delete/${deleteCompany}`) //delete/${companyid}

            .then((response) => {

                alert(`Company details deleted successfully.`);

                //  dispatch(deletecompanyById(response.data));     
            })

            .catch(() => {

               alert(`Company not found.`);

            });
    } 

     
     return (
        <div>
            <h1 className="display-4 text-primary mt-3 mb-3" >Company Component</h1>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find Company by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetCompanyById}>
                    <input className="form-control mt-3" type="number" id="companyId" name="companyId" value={companyId} onChange={handleCompany} placeholder="Enter company id to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Search company" />
                </form>
                <p>Company details: {companyDataFromStore.companyId} {companyDataFromStore.companyName} {companyDataFromStore.email} {companyDataFromStore.mobileNumber}{companyDataFromStore.addess} {companyDataFromStore.password} </p>
            </div>

            <div>
                <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <p>List of all Company</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllCompany} value="Find All Companies" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>CompanyId</th>
                                <th>companyName</th>
                                <th>mobileNumber</th>
                                <th>address</th>
                                <th>email</th>
                                <th>password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companyList.map((company, k) => {
                                return (
                                    <tr k={k}> <td>{company.companyId}</td> <td>{company.companyName}</td><td>{company.email}</td><td>{company.mobileNumber}</td><td>{company.password}</td><td>{company.address}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
            
                <p>Add New Company</p>
                 
                <div id="addNewCompanyDiv">
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={newCompanyObj.companyName}
                        onChange={handleAddCompany}
                        placeholder="Enter Company Name" />
                         <br/><br/>
                    {/* <input
                        type="text"
                        id="companyId"
                        name="companyId"
                        value={newCompanyObj.companyId}
                        onChange={handleAddCompany}
                        placeholder="Enter companyId" />
                        <br/><br/>  */}
                    <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={newCompanyObj.mobileNumber}
                        onChange={handleAddCompany}
                        placeholder="Enter Mobile Number" />
                        <br/>
                        <br/>
                     <input
                        type="text"
                        id="email"
                        name="email"
                        value={newCompanyObj.email}
                        onChange={handleAddCompany}
                        placeholder="Enter Email" /> 
                        <br/><br/> 
                     <input
                        type="text"
                        id="password"
                        name="password"
                        value={newCompanyObj.password}
                        onChange={handleAddCompany}
                        placeholder="Enter password" />   
                        <br/><br/>
                     <input
                        type="text"
                        id="address"
                        name="address"
                        value={newCompanyObj.address}
                        onChange={handleAddCompany}
                        placeholder="Enter address" /> 
                        <br/><br/> 
                    <input
                        type="submit"
                        // type="button"
                        value="Add Company"
                        onClick={submitAddCompany}
                    />
                </div>
                <p>New Company Data:{displayCompanyObj.companyName} {displayCompanyObj.email}{displayCompanyObj.mobileNumber}{displayCompanyObj.password} {displayCompanyObj.address}</p>
            </div>

             
            <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
            
            <p>Update New Company</p>
            {/* <form onSubmit={submitAddEmp}> */}
            <div id="addNewCompanyDiv">
            <input
                    type="text"
                    id="companyId"
                    name="companyId"
                    value={updtCompanyObj.companyId}
                    onChange={handleUpdateCompany}
                    placeholder="Enter company Id" />
                    <br/><br/>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={updtCompanyObj.companyName}
                    onChange={handleUpdateCompany}
                    placeholder="Enter company Name" />
                    <br/><br/>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={updtCompanyObj.address}
                    onChange={handleUpdateCompany}
                    placeholder="Enter address" />
                    <br/><br/>
                <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={updtCompanyObj.mobileNumber}
                    onChange={handleUpdateCompany}
                    placeholder="Enter Mobile Number" />
                    <br/><br/>
                 <input
                    type="text"
                    id="email"
                    name="email"
                    value={updtCompanyObj.email}
                    onChange={handleUpdateCompany}
                    placeholder="Enter Email" />   
                    <br/><br/>
                 <input
                    type="text"
                    id="password"
                    name="password"
                    value={updtCompanyObj.password}
                    onChange={handleUpdateCompany}
                    placeholder="Enter password" /> 
                    <br/><br/>  
                <input
                    type="submit"
                    // type="button"
                    value="update Company"
                    onClick={submitUpdateCompany}
                />
            </div>
        <p>Updated Company Data: {updateCompanyObj.CompanyId} {updateCompanyObj.companyName} {updateCompanyObj.address} {updateCompanyObj.mobileNumber} {updateCompanyObj.email}  {updateCompanyObj.password}</p>
        </div>
 

<div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Delete company by id</p>
                <form className="form form-group form-primary" onSubmit={submitDeleteCompany}>
                    <input className="form-control mt-3" type="number" id="deleteCompany" name="deleteCompany" value={deleteCompany} onChange={handleDeleteCompany} placeholder="Enter Company Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Company" />
                </form>
                 
            </div>

        </div>
    );
}

 
export default CompanyData;