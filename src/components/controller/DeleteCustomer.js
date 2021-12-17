
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";



const DeleteCustomer = () => {



    const [deleteCustomer, setDeleteCustomer] = useState('');

    // const customerDelete = useSelector((state) => state.customer.customerDelete);



    const handleDeleteCustomer = (ev) => {
        console.log('handleDeleteCustomer');
        setDeleteCustomer(ev.target.value);
    }

    const submitDeleteCustomer = (evt) => {
        evt.preventDefault();
        console.log('deleteCustomerDetails');
        axios.delete(`http://localhost:8086/customer/delete/${deleteCustomer}`)
            .then((response) => {
                alert(`Customer details deleted successfully.`)
            })
            .catch(() => {
                alert(`Customer not found.`);
            });

    }

    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Delete Customer Component</h1>



            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Delete customer by id</p>
                <form className="form form-group form-primary" onSubmit={submitDeleteCustomer}>
                    <input className="form-control mt-3" type="number" id="deleteCustomer" name="deleteCustomer" value={deleteCustomer} onChange={handleDeleteCustomer} placeholder="Enter Customer Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Customer" />
                </form>

            </div>


        </div>
    );
}
export default DeleteCustomer;












