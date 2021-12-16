// import { getEmpByIdService, getAllEmpsService } from "./services/EmpService";
import {viewCustomerByIdService,viewCustomersService,insertCustomerService,updateCustomerService, deleteCustomerByIdService} from "./services/CustomerServiceData";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { viewCustomerById, viewCustomers,insertCustomer} from '../redux/CustomerSlice';

const CustomerData = () => {

    const [customerId, setCustomerId] = useState('');
    const dispatch = useDispatch();
    const customerDataFromStore = useSelector((state) => state.customer.customerState);
    const customerList = useSelector((state) => state.customer.customerList);

    const handleCustomer = (e) => {
        console.log('handleCustomer');
        setCustomerId(e.target.value);
    }

    const submitGetCustomerById = (evt) => {
        evt.preventDefault();
        console.log('submitGetCustomerById');
        viewCustomerByIdService(customerId)
            .then((response) => { 
                dispatch(viewCustomerById(response.data)) })
            .catch(() => {
                alert(`Customer with ${customerId} not found.`);
            });
        console.log(Object.keys(customerList));
        setCustomerId('');
    }

    const submitGetAllCustomers = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllCustomers');
        viewCustomersService()
            .then((response) => {
                dispatch(viewCustomers(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    // const submitAddCustomers = (evt) => {
    //     evt.preventDefault();
    //     console.log('submitAddCustomers');
    //     insertCustomerService()
    //         .then((response) => {
    //             dispatch(insertCustomer(response.data));
    //         })
    //         .catch(() => {
    //             alert(`Something is wrong!`);
    //         });
    // }

    // const submitUpdateCustomers = (evt) => {
    //     evt.preventDefault();
    //     console.log('submitUpdateCustomers');
    //     updateCustomerService()
    //         .then((response) => {
    //             dispatch(updateCustomer(response.data));
    //         })
    //         .catch(() => {
    //             alert(`Something is wrong!`);
    //         });
    // }

    // const submitDeleteCustomers = (evt) => {
    //     evt.preventDefault();
    //     console.log('submitDeleteCustomers');
    //     deleteCustomerByIdService()
    //         .then((response) => {
    //             dispatch(deleteCustomerById(response.data));
    //         })
    //         .catch(() => {
    //             alert(`Something is wrong!`);
    //         });
    // }

    

    

    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Customer Component</h1>
            <p>Fetch data from backend, store it in redux store and get it to component</p>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find customer by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetCustomerById}>
                    <input className="form-control mt-3" type="number" id="customerId" name="customerId" value={customerId} onChange={handleCustomer} placeholder="Enter customerId to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Customer" />
                </form>
                <p>Data from store: {customerDataFromStore.customerId} {customerDataFromStore.firstName} </p>
            </div>

            {/* <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Delete by id</p>
                <form className="form form-group form-primary" onSubmit={submitDeleteCustomers}>
                    <input className="form-control mt-3" type="number" id="customerId" name="customerId" value={customerId} onChange={handleCustomer} placeholder="Enter customerId to delete" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="delete Customer" />
                </form>
                <p>Data from store: {customerDataFromStore.customerId} {customerDataFromStore.firstName} </p>
            </div>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Update by id</p>
                <form className="form form-group form-primary" onSubmit={submitUpdateCustomers}>
                    <input className="form-control mt-3" type="number" id="customerId" name="customerId" value={customerId} onChange={handleCustomer} placeholder="Enter customerId to update" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="update Customer" />
                </form>
                <p>Data from store: {customerDataFromStore.customerId} {customerDataFromStore.firstName} </p>
            </div> */}

            {/* <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Add Customer</p>
                <form className="form form-group form-primary" onSubmit={submitAddCustomers}>
                    <input className="form-control mt-3" type="number" id="customerId" name="customerId" value={customerId} onChange={handleCustomer} placeholder="Add customers" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Add Customer" />
                </form>
                <p>Data from store: {customerDataFromStore.customerId} {customerDataFromStore.firstName} </p>
            </div> */}

            <div>
                <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find all Customers</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllCustomers} value="Find All Customer" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>customerId</th>
                                <th>firstName</th>
                                <th>lastName</th>
                                <th>mobileNumber</th>
                                <th>email</th>


                                
                            </tr>
                        </thead>
                        <tbody>
                            {customerList.map((customer, k) => {
                                return (
                                    <tr k={k}> <td>{customer.customerId}</td>  <td>{customer.firstName}</td> <td>{customer.lastName}</td><td>{customer.mobileNumber}</td><td>{customer.email}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Some other functionality</p>
            </div>



        </div>
    );
}
export default CustomerData;
