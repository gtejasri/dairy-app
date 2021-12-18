
import { useState } from "react";
import axios from "axios";
import Customer from "../../models/Customer";


const AddCustomer = () => {

    const [newCustomerObj, setNewCustomerObj] = useState(new Customer());
    const [displayCustomerObj, setDisplayCustomerObj] = useState('');

    const handleAddCustomer = (e) => {
        console.log(e.target.value);
        setNewCustomerObj({
            ...newCustomerObj,
            [e.target.name]: e.target.value,
        });
    }

    const submitAddCustomer = (evt) => {
        evt.preventDefault();
        console.log('addCustomers');
        axios.post(`http://localhost:8086/customer/add`, newCustomerObj)
            .then((response) => {
                setDisplayCustomerObj(response.data);
                alert('Customer added successfully.');
                setNewCustomerObj({ firstName:'', lastName:'',password:'',mobileNumber:'',email:''})
            
            })
            .catch(() => {
                alert("Customer could not be added.");
            });
    }

    return (
        
        <div className="container">
        <h1 className="display-4 text-primary mt-3 mb-3" >Add Customer Component</h1>
        <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
 
            
            <p>Add New Customer</p>
             
            <div id="addNewCustomerDiv">
            
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={newCustomerObj.firstName}
                    onChange={handleAddCustomer}
                    placeholder="Enter First Name" />
                    <br/>
                    <br/>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={newCustomerObj.lastName}
                    onChange={handleAddCustomer}
                    placeholder="Enter Last Name" />
                    <br/>
                    <br/>

                <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={newCustomerObj.mobileNumber}
                    onChange={handleAddCustomer}
                    placeholder="Enter Mobile Number" />
                    <br/>
                    <br/>

                 <input
                    type="text"
                    id="email"
                    name="email"
                    value={newCustomerObj.email}
                    onChange={handleAddCustomer}
                    placeholder="Enter Email" />   
                    <br/>
                    <br/>

                 <input
                    type="text"
                    id="password"
                    name="password"
                    value={newCustomerObj.password}
                    onChange={handleAddCustomer}
                    placeholder="Enter password" />   
                    <br/>
                    <br/>

                {/* <input
                    type="submit"
                    // type="button"
                    value="Add Customer"
                    onClick={submitAddCustomer}
                /> */}
                 <form className="form form-group form-primary" onSubmit={submitAddCustomer}>
                    {/* <input className="form-control mt-3" type="number" id="AddCustomer" name="AddCustomer" value={AddCustomer} onChange={handleAddCustomer} placeholder="Add Customer" autoFocus required /> */}
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Add Customer" />
                </form>
            </div>
           
            <p>New Customer Data:<p/> 
            <p>CustomerId:{displayCustomerObj.customerId}</p> 
            <p>FirstName:{displayCustomerObj.firstName}</p>  
            <p>LastName:{displayCustomerObj.lastName}</p>
            {/* <p>Password:{displayCustomerObj.password}</p> */}
            <p>MobileNumber:{displayCustomerObj.mobileNumber}</p>
            <p>Email:{displayCustomerObj.email}</p></p>
        </div>
        </div>

        
    );
}
export default AddCustomer;