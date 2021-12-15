import axios from "axios";
import {  useState } from "react";
import Customer from "./models/Customer";

const SpringBootData = () => {

    // state - for the component 
    const [customer, setCustomer] = useState(new Customer());
    const [newCustomerObj, setNewCustomerObj] = useState(new Customer());
    const [displayCustomerObj, setDisplayCustomerObj] = useState(new Customer());
    const [customerList, setCustomerList] = useState([]);

    const handleCustomer = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    }

    const handleAddCustomer = (e) => {
        console.log(e.target.value);
        setNewCustomerObj({
            ...newCustomerObj,
            [e.target.name]: e.target.value,
        });
    }

    const submitGetAllCustomers = () => {
        axios.get(`http://localhost:8086/customer/all`)
            .then((response) => {
                setCustomerList(response.data);
                console.log(response.data);
                console.log(customerList);
            })
            .catch(() => {
                alert('Something is wrong!');
            });
    }

    const submitGetCustomerById = (evt) => {
        console.log(customer.customerId);
        axios.get(`http://localhost:8086/customer/view/${customer.customerId}`)
            .then((response) => {
                setCustomer(response.data);
            })
            .catch(() => {
                setCustomer({});
                alert("Customer not found.");
            });
        // evt.preventDefault();
    }

    const submitAddCustomer = (evt) => {
        evt.preventDefault();
        axios.post(`http://localhost:8086/customer/add`, newCustomerObj)
            .then((response) => {
                setDisplayCustomerObj(response.data);
                alert('Customer added successfully.');
                setNewCustomerObj({ firstName: '', lastName: '',mobileNumber:'',email:'' })
            
            })
            .catch(() => {
                alert("Customer could not be added.");
            });
    }

    // const submitAddCustomer = (event) => {

    //     axios.post(`http://localhost:8086/customer/add`, newCustomerObj)
    //         .then((response) => {
    //             console.log(response.data);
    //             localStorage.setItem('newCustomerObj', newCustomerObj);
    //             alert('You are added successfully');
    //             // // check this method to navigate 
    //         }).catch((error) => {
    //             console.log(error.response);
    //             setNewCustomerObj("Enter proper credentials.");
    //         });
    //     event.preventDefault();
    // }

    return (
        <div className="container">
            <p className="display-4 text-primary mt-3">Spring Boot Data</p>
            <p>Search Customer By Id</p>
            <input type="number" id="customerId" name="customerId" value={customer.customerId} onChange={handleCustomer} placeholder="Enter customerId to search" />
            <input type="submit" name="Find Customer" onClick={submitGetCustomerById} />
            <p className="text-primary">{customer.customerId} {customer.firstName} {customer.lastName}{customer.mobileNumber}{customer.email}</p>
            <p>----------------</p>
            <div>
                <p>Add New Customer</p>
                {/* <form onSubmit={submitAddEmp}> */}
                <div id="addNewCustomerDiv">
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={newCustomerObj.firstName}
                        onChange={handleAddCustomer}
                        placeholder="Enter First Name" />
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={newCustomerObj.lastName}
                        onChange={handleAddCustomer}
                        placeholder="Enter Last Name" />
                    <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={newCustomerObj.mobileNumber}
                        onChange={handleAddCustomer}
                        placeholder="Enter Mobile Number" />
                     <input
                        type="text"
                        id="email"
                        name="email"
                        value={newCustomerObj.email}
                        onChange={handleAddCustomer}
                        placeholder="Enter Email" />   
                    <input
                        type="submit"
                        // type="button"
                        value="Add Customer"
                        onClick={submitAddCustomer}
                    />
                </div>
                {/* </form> */}
                <p>New Customer Data: {displayCustomerObj.customerId} {displayCustomerObj.firstName} {displayCustomerObj.lastName}{displayCustomerObj.mobileNumber}{displayCustomerObj.email}</p>
            </div>
            <p>----------------</p>
            <div>
                <div>
                    <p>Get All Customers</p>
                    <input
                        className="btn btn-primary mb-3"
                        type="button"
                        value="Search All Customers"
                        onClick={submitGetAllCustomers}
                    />
                </div>
                <div className="col-4">
                    <div className="border border-light">
                    </div>
                </div>
                <p>----------------</p>
            </div>
            {/* Google Material UI Table  */}
            <div className="container">
                <div class="mdc-data-table">
                    <div class="mdc-data-table__table-container">
                        <table class="mdc-data-table__table">
                            <thead>
                                <tr class="mdc-data-table__header-row">
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">CustomerId</th>
                                    <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">FirstName</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">LastName</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">MobileNumber</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Email</th>

                                </tr>
                            </thead>
                            <tbody class="mdc-data-table__content">
                                {customerList.map((customer, k) => {
                                    return (
                                        <tr k={k} className="mdc-data-table__row" scope="row">
                                            <td className="mdc-data-table__cell">{customer.customerId}</td>
                                            <td className="mdc-data-table__cell">{customer.firstName}</td>
                                            <td className="mdc-data-table__cell">{customer.lastName}</td>
                                            <td className="mdc-data-table__cell">{customer.mobileNumber}</td>
                                            <td className="mdc-data-table__cell">{customer.email}</td>
                                            </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpringBootData;