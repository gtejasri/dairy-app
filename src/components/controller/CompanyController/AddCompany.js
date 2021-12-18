
import { useState } from "react";
import axios from "axios";
import Company from "../../models/Company";



const AddCompany = () => {

    
    const [newCompanyObj, setNewCompanyObj] = useState(new Company());
    const [displayCompanyObj, setDisplayCompanyObj] = useState(new Company());
    
    const handleAddCompany = (e) => {
        console.log(e.target.value);
        setNewCompanyObj({
            ...newCompanyObj,
            [e.target.name]: e.target.value,
        });
    }

    const submitAddCompany = (evt) => {
        evt.preventDefault();
        console.log('addCompany');
        axios.post(`http://localhost:8086/company/add`, newCompanyObj)
            .then((response) => {
                setDisplayCompanyObj(response.data);
                alert('Company added successfully.');
                setNewCompanyObj({ CompanyName:'', CompanyId:'',mobileNumber:'',email:'',password:'',address:''})
            
            })
            .catch(() => {
                alert("Company could not be added.");
            });
    }

    return (
        <div>
            <h1 className="display-4 text-primary mt-3 mb-3" >Add Company</h1>
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
                     {/* <input
                        // type="submit"
                        // // type="button"
                        // value="Add Company"
                        // onClick={submitAddCompany} 
                        
                    /> */}
                    <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitAddCompany} value="Add Company" />
                        </form>
                </div>

                <p>Company Name: {displayCompanyObj.companyName}<br/></p>
                <p>email: {displayCompanyObj.email}<br/></p>
                <p>mobileNumber: {displayCompanyObj.mobileNumber}<br/></p>
                {/* <p>password: {displayCompanyObj.password} <br/></p> */}
                <p>address: {displayCompanyObj.address}</p>
            </div>
            </div>
    );
}

 
export default AddCompany;

