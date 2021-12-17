
import { useState } from "react";
import axios from "axios";
import Customer from "../models/Customer";


const UpdateCustomer = () => {


    const [newCustomerObj, setNewCustomerObj] = useState(new Customer());
    const [updtCustomerObj, setUpdtCustomerObj] = useState(new Customer());
    const [updateCustomerObj, setUpdateCustomerObj] = useState(new Customer());

    
   
    
    const handleUpdateCustomer = (e) => {
        console.log(e.target.value);
        setUpdtCustomerObj({
            ...updtCustomerObj,
            [e.target.name]: e.target.value,
        });
    }

    
   

    const submitUpdateCustomer = (evt) => {
        evt.preventDefault();
        console.log('UpdateCustomers');
        axios.put(`http://localhost:8086/customer/update`, updtCustomerObj)
            .then((response) => {
                setUpdateCustomerObj(response.data);
                alert('Customer details updated successfully.');
                setNewCustomerObj({ firstName:'', lastName:'',password:'',mobileNumber:'',email:''})
            
            })
            .catch(() => {
                alert("Customer could not be found.");
            });
    }

   

    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Update Customer Component</h1>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
            <p>Update New Customer</p>
            {/* <form onSubmit={submitAddEmp}> */}
            <div id="addNewCustomerDiv">
            <input
                    type="text"
                    id="customerId"
                    name="customerId"
                    value={updtCustomerObj.customerId}
                    onChange={handleUpdateCustomer}
                    placeholder="Enter farmer Id" />
                    <br/>
                    <br/>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={updtCustomerObj.firstName}
                    onChange={handleUpdateCustomer}
                    placeholder="Enter First Name" />
                    <br/>
                    <br/>

                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={updtCustomerObj.lastName}
                    onChange={handleUpdateCustomer}
                    placeholder="Enter Last Name" />
                    <br/>
                    <br/>

                <input
                    type="text"
                    id="password"
                    name="password"
                    value={updtCustomerObj.password}
                    onChange={handleUpdateCustomer}
                    placeholder="Enter password" />  
                    <br/>
                    <br/> 
                <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={updtCustomerObj.mobileNumber}
                    onChange={handleUpdateCustomer}
                    placeholder="Enter Mobile Number" />
                    <br/>
                    <br/>

                 <input
                    type="text"
                    id="email"
                    name="email"
                    value={updtCustomerObj.email}
                    onChange={handleUpdateCustomer}
                    placeholder="Enter Email" />   
                    <br/>
                    <br/>
                
                {/* <input
                    type="submit"
                    // type="button"
                    value="update Customer"
                    onClick={submitUpdateCustomer}
                /> */}

              <form className="form form-group form-primary" onSubmit={submitUpdateCustomer}>
                    
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Update Customer" />
                </form>
            </div>
            <p>Updated Farmer Data:
             <p>CustomerId:{updateCustomerObj.customerId}</p>  
             <p>FirstName:{updateCustomerObj.firstName}</p> 
             <p>LastName:{updateCustomerObj.lastName}</p>
             {/* <p>Password:{updateCustomerObj.password}</p>  */}
             <p>MobileNumber:{updateCustomerObj.mobileNumber}</p> 
             <p>Email:{updateCustomerObj.email}</p></p>
        </div>


        </div>
    );
}
export default UpdateCustomer;














