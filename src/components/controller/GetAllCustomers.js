import { getAllCustomerService } from "../services/CustomerServiceData";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { viewCustomers } from "../../redux/CustomerSlice";
import Customer from "../models/Customer";


const GetAllCustomers = () => {


    const dispatch = useDispatch();
    const customerList = useSelector((state) => state.customer.customerList);
   
   


    const submitGetAllCustomers = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllCustomers');
        getAllCustomerService()
            .then((response) => {
                dispatch(viewCustomers(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

   
   

    
    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Find All Customer Component</h1>
            <p>Fetch data from backend, store it in redux store and get it to component</p>

            <div>
                <div className="col-9 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find all customers</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllCustomers} value="Find All Customers" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>customerId</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                {/* <th>Password</th> */}
                                <th>mobileNumber</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerList.map((customer, k) => {
                                return (
                                    <tr k={k}> <td>{customer.customerId}</td> 
                                     <td>{customer.firstName}</td>
                                      <td>{customer.lastName}</td>
                                      {/* <td>{customer.password}</td> */}
                                      <td>{customer.mobileNumber}</td>
                                      <td>{customer.email}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
         </div>
            
          
    );
}
export default GetAllCustomers;






