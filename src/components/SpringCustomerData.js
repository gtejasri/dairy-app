import axios from "axios";
import { useEffect, useState } from "react";
import Customer from "./models/Customer";

const SpringCustomerData = () => {

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
            [e.target.name]: e.target.value
        });
    }

    const submitGetAllCustomer= () => {
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
                setNewCustomerObj({customerId:'', firstName: '', lastName: '',password: '' , mobileNumber: '',email: '' })
            })
            .catch(() => {
                alert("Customer could not be added.");
            });
    }

    // const submitDeleteCompany= () => {
    //     axios.get(`http://localhost:8082/company/delete/{companyid}`)
         
         
    //         .then((response) => {
    //             setCompanyList(response.data);
    //             console.log(response.data);
    //             console.log(companyList);
    //         })
    //         .catch(() => {
    //             alert('Something is wrong!');
    //         });

    
    // }


    return (
        <div className="container">
            <p className="display-4 text-primary mt-3">Spring Customer Data</p>
            <p>Search Customer By Id</p>
            <input type="number" id="customerId" name="customerId" value={customer.customerId} onChange={handleCustomer} placeholder="Enter customerId to search" />
            <input type="submit" name="Find Customer" onClick={submitGetCustomerById} />
            <p className="text-primary">{customer.customerId} {customer.firstName} {customer.lastName} {customer.password} {customer.mobileNumber}{customer.email}</p>
            <p>----------------</p>
            <div>
                <p>Add New Customer</p>
                {/* <form onSubmit={submitAddEmp}> */}
                <div id="addNewCustomerDiv">
                   <input
                    type="number"
                    id="customerId"
                    name="customerId"
                    value={newCustomerObj.customerId}
                    onChange={handleAddCustomer}
                    placeholder="Enter CustomerId" />
                    <br/>
                    <br/>
                
                    
                    
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={newCustomerObj.firstName}
                        onChange={handleAddCustomer}
                        placeholder="Enter Customer Name" />
                        <br/>
                        <br/>
                   
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={newCustomerObj.lastName}
                        onChange={handleAddCustomer}
                        placeholder="Enter Customer lastName" />
                        <br/>
                        <br/>

                   <input
                        type="text"
                        id="password"
                        name="password"
                        value={newCustomerObj.password}
                        onChange={handleAddCustomer}
                        placeholder="Enter Customer password" />  
                        <br/>
                        <br/>

                    <input
                        type="number"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={newCustomerObj.mobileNumber}
                        onChange={handleAddCustomer}
                        placeholder="Enter Customer mobileNumber" /> 
                        <br/>
                        <br/>

                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={newCustomerObj.email}
                        onChange={handleAddCustomer}
                        placeholder="Enter Customer email" /> 
                        <br/>
                        <br/>

                    <input
                        type="submit"
                        // type="button"
                        value="Add Customer"
                        onClick={submitAddCustomer}
                    />
                </div>
                {/* </form> */}
                <p>New Customer Data: {displayCustomerObj.customerId} {displayCustomerObj.firstName} {displayCustomerObj.lastName} {displayCustomerObj.password} {displayCustomerObj.mobileNumber} {displayCustomerObj.email}</p>
            </div>
            <p>----------------</p>
            <div>
                <div>
                    <p>Get All Customer</p>
                    <input
                        className="btn btn-primary mb-3"
                        type="button"
                        value="Search All Customer"
                        onClick={submitGetAllCustomer}
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
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">customerId</th>
                                    <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">firstName</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">lastName</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">password</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">mobileNumber</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">email</th>
                                </tr>
                            </thead>
                            <tbody class="mdc-data-table__content">
                                {customerList.map((customer, k) => {
                                    return (
                                        <tr k={k} className="mdc-data-table__row" scope="row">
                                            <td className="mdc-data-table__cell">{customer.customerId}</td>
                                            <td className="mdc-data-table__cell">{customer.firstName}</td>
                                            <td className="mdc-data-table__cell">{customer.lastName}</td>
                                             <td className="mdc-data-table__cell">{customer.password}</td>
                                             <td className="mdc-data-table__cell">{customer.mobileNumber}</td>
                                             <td className="mdc-data-table__cell">{customer.email}</td></tr>
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

export default SpringCustomerData;





















// import axios from "axios";
// import {  useState } from "react";
// import Customer from "./models/Customer";

// const SpringCustomerData = () => {

//     // state - for the component 
//     const [customer, setCustomer] = useState(new Customer());
//     const [newCustomerObj, setNewCustomerObj] = useState(new Customer());
//     const [displayCustomerObj, setDisplayCustomerObj] = useState(new Customer());
//     const [customerList, setCustomerList] = useState([]);
//     // const [list, updateList] = useState(defaultList);

// //    const handleRemoveCustomer = (e) => {
// //    const name = e.target.getAttribute("customerId")
// //     setCustomerList(customerList.filter(item => item.customerId !== name));
// //   };

// //   const App = () => {
// //     const defaultList = [
// //       { name: "ItemOne" },
// //       { name: "ItemTwo" },
// //       { name: "ItemThree" }
// //     ];
  
// //     const [list, updateList] = useState(defaultList);
  
// //     const handleRemoveItem = (e) => {
// //      const name = e.target.getAttribute("name")
// //       updateList(list.filter(item => item.name !== name));
// //     };

//     const handleCustomer = (e) => {
//         setCustomer({
//             ...customer,
//             [e.target.name]: e.target.value
//         });
//     }

//     const handleAddCustomer = (e) => {
//         console.log(e.target.value);
//         setNewCustomerObj({
//             ...newCustomerObj,
//             [e.target.name]: e.target.value,
//         });
//     }

//     // export async function deleteStudent(id) {
//     //     const response = await fetch(`/students/${id}`, {
//     //       method: "DELETE"
//     //     });
//     //     return response.json();
//     //   }

    

//     const submitGetAllCustomers = () => {
//         axios.get(`http://localhost:8086/customer/all`)
//             .then((response) => {
//                 setCustomerList(response.data);
//                 console.log(response.data);
//                 console.log(customerList);
//             })
//             .catch(() => {
//                 alert('Something is wrong!');
//             });
//     }

//     const submitGetCustomerById = (evt) => {
//         console.log(customer.customerId);
//         axios.get(`http://localhost:8086/customer/view/${customer.customerId}`)
//             .then((response) => {
//                 setCustomer(response.data);
//             })
//             .catch(() => {
//                 setCustomer({});
//                 alert("Customer not found.");
//             });
//         // evt.preventDefault();
//     }

//     const submitAddCustomer = (evt) => {
//         evt.preventDefault();
//         axios.post(`http://localhost:8086/customer/add`, newCustomerObj)
//             .then((response) => {
//                 setDisplayCustomerObj(response.data);
//                 alert('Customer added successfully.');
//                 setNewCustomerObj({ firstName: '', lastName: '',password:'',mobileNumber:'',email:'' })
            
//             })
//             .catch(() => {
//                 alert("Customer could not be added.");
//             });
//     }


//     // const submitDeleteCustomerById = (evt) => {
//     //     console.log(customer.customerId);
//     //     axios.get(`http://localhost:8086/customer/delete/${customer.customerId}`)
//     //         .then((response) => {
//     //             setCustomer(response.data);
//     //         })
//     //         .catch(() => {
//     //             setCustomer({});
//     //             alert("Customer not deleted.");
//     //         });
//     //     // evt.preventDefault();
//     // }
// //    const submitDeleteCustomerById = (customerId) => {
// //         axios.delete("http://localhost:8086/customer/delete/${customer.customerId}" + customerId)
// //         .then((response) => {
// //                 alert("Record Deleted Successfully");
// //                 setCustomer({customer:customer.filter(customer=>customer.customerId != customerId)})
// //                 })
// //              .catch(() => {
// //                  setCustomer({});
// //                 alert("Operation Failed Here");
// //             });
// //     }

   

//     return (
//         <div className="container">
//             <p className="display-4 text-primary mt-3">Spring Customer Data</p>
//             <p>Search Customer By Id</p>
//             <input type="number" id="customerId" name="customerId" value={customer.customerId} onChange={handleCustomer} placeholder="Enter customerId to search" />
//             <input type="submit" name="Find Customer" onClick={submitGetCustomerById} />
//             <p className="text-primary">{customer.customerId} {customer.firstName} {customer.lastName}{customer.password}{customer.mobileNumber}{customer.email}</p>
//             <p>----------------</p>
            
//             <div>
//                 <p>Add New Customer</p>
//                 {/* <form onSubmit={submitAddEmp}> */}
//                 <div id="addNewCustomerDiv">
//                     <input
//                         type="text"
//                         id="firstName"
//                         name="firstName"
//                         value={newCustomerObj.firstName}
//                         onChange={handleAddCustomer}
//                         placeholder="Enter First Name" />
//                         <br/>
//                         <br/>
//                     <input
//                         type="text"
//                         id="lastName"
//                         name="lastName"
//                         value={newCustomerObj.lastName}
//                         onChange={handleAddCustomer}
//                         placeholder="Enter Last Name" />
//                         <br/>
//                         <br/>
//                     <input
//                         type="text"
//                         id="password"
//                         name="password"
//                         value={newCustomerObj.password}
//                         onChange={handleAddCustomer}
//                         placeholder="Enter password" />
//                         <br/>
//                         <br/>
//                     <input
//                         type="text"
//                         id="mobileNumber"
//                         name="mobileNumber"
//                         value={newCustomerObj.mobileNumber}
//                         onChange={handleAddCustomer}
//                         placeholder="Enter Mobile Number" />
//                         <br/>
//                         <br/>
//                      <input
//                         type="text"
//                         id="email"
//                         name="email"
//                         value={newCustomerObj.email}
//                         onChange={handleAddCustomer}
//                         placeholder="Enter Email" />   
//                         <br/>
//                         <br/>
//                     <input
//                         type="submit"
//                         // type="button"
//                         value="Add Customer"
//                         onClick={submitAddCustomer}
//                     />
//                 </div>
//                 {/* </form> */}
//                 <p>New Customer Data: {displayCustomerObj.customerId} {displayCustomerObj.firstName} {displayCustomerObj.lastName}{displayCustomerObj.password}{displayCustomerObj.mobileNumber}{displayCustomerObj.email}</p>
//             </div>
//             <p>----------------</p>
//             {/* <p>Delete Customer By Id</p>
//             <input type="number" id="customerId" name="customerId" value={customer.customerId} onChange={handleRemoveCustomer} placeholder="Enter customerId to delete" />
//             <input type="submit" name="delete Customer" onClick={submitDeleteCustomerById} />
//             <p className="text-primary">{customer.customerId} {customer.firstName} {customer.lastName}{customer.mobileNumber}{customer.email}</p>
//            <p>-----------------</p> */}
//             <div>
//                 <div>
//                     <p>Get All Customers</p>
//                     <input
//                         className="btn btn-primary mb-3"
//                         type="button"
//                         value="Search All Customers"
//                         onClick={submitGetAllCustomers}
//                     />
//                 </div>
//                 <div className="col-4">
//                     <div className="border border-light">
//                     </div>
//                 </div>
//                 <p>----------------</p>
//             </div>
//             {/* Google Material UI Table  */}
//             <div className="container">
//                 <div class="mdc-data-table">
//                     <div class="mdc-data-table__table-container">
//                         <table class="mdc-data-table__table">
//                             <thead>
//                                 <tr class="mdc-data-table__header-row">
//                                     <th class="mdc-data-table__header-cell" role="columnheader" scope="col">CustomerId</th>
//                                     <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">FirstName</th>
//                                     <th class="mdc-data-table__header-cell" role="columnheader" scope="col">LastName</th>
//                                     <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Password</th>
//                                     <th class="mdc-data-table__header-cell" role="columnheader" scope="col">MobileNumber</th>
//                                     <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Email</th>

//                                 </tr>
//                             </thead>
//                             <tbody class="mdc-data-table__content">
//                                 {customerList.map((customer, k) => {
//                                     return (
//                                         <tr k={k} className="mdc-data-table__row" scope="row">
//                                             <td className="mdc-data-table__cell">{customer.customerId}</td>
//                                             <td className="mdc-data-table__cell">{customer.firstName}</td>
//                                             <td className="mdc-data-table__cell">{customer.lastName}</td>
//                                             <td className="mdc-data-table__cell">{customer.password}</td>
//                                             <td className="mdc-data-table__cell">{customer.mobileNumber}</td>
//                                             <td className="mdc-data-table__cell">{customer.email}</td>
//                                             </tr>
//                                     )
//                                 })}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SpringCustomerData;