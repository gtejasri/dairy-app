import { getCustomerByIdService } from "../services/CustomerServiceData";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { viewCustomerById } from "../../redux/CustomerSlice";



const GetCustomerById = () => {



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
        getCustomerByIdService(customerId)
            .then((response) => { dispatch(viewCustomerById(response.data)) })
            .catch(() => {
                alert(`Customer with ${customerId} not found.`);
            });
        console.log(Object.keys(customerList));
        setCustomerId('');
    }

    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Get Customer By ID Component</h1>

            <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                <p>Find customer by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetCustomerById}>
                    <input className="form-control mt-3" type="number" id="customerId" name="customerId" value={customerId} onChange={handleCustomer} placeholder="Enter customerId to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Customer" />
                </form>
                <p>Data from store: {customerDataFromStore.customerId} {customerDataFromStore.firstName} {customerDataFromStore.lastName}{customerDataFromStore.password}{customerDataFromStore.mobileNumber}{customerDataFromStore.email}</p>
            </div>


        </div>
    );
}
export default GetCustomerById;














