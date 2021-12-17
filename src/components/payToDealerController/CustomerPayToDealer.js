
import { useState } from "react";
import axios from "axios";
// import Customer from "../models/Customer";
import PayToDealer from "../models/PayToDealer";



const CustomerPayToDealer = () => {

    const [newPayToDealerObj, setNewPayToDealerObj] = useState(new PayToDealer());
    const [displayPayToDealerObj, setDisplayPayToDealerObj] = useState('');
    
    const handleCustomerPayToDealer = (e) => {
        console.log(e.target.value);
        setNewPayToDealerObj({
            ...newPayToDealerObj,
            [e.target.name]: e.target.value,
        });
    }

    const submitCustomerPayToDealer = (evt) => {
        evt.preventDefault();
        console.log('CustomerPayToDealer');
        axios.post(`http://localhost:8086/paytodealer/register`, newPayToDealerObj)
            .then((response) => {
                setDisplayPayToDealerObj(response.data);
                alert('Customer paid to dealer successfully.');
                setNewPayToDealerObj({ transactionId: '', totalMilkunits: '', avgUnitPrice: '', billAmount: '', paymentDate: '',AccountNumber:'',status:'',bankName:'',month:'',dealer:'',customer:'' })

            })
            .catch(() => {
                alert("Customer to dealer payment failed.");
            });
    }

    return (

        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" > Customer To Dealer Payment Component</h1>
            <div className="col-6 border border-light shadow p-3 mb-5 bg-white">


                <p>Customer To Dealer Payment</p>

                <div id="CustomerToPayDealerDiv">
            

                    <input
                        type="text"
                        id="transactionId"
                        name="transactionId"
                        value={newPayToDealerObj.transactionId}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter Transaction Id" />
                    <br />
                    <br />
                    <input
                        type="text"
                        id="totalMilkunits"
                        name="totalMilkunits"
                        value={newPayToDealerObj.totalMilkunits}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter total MilkUnits" />
                    <br />
                    <br />

                    <input
                        type="text"
                        id="avgUnitPrice"
                        name="avgUnitPrice"
                        value={newPayToDealerObj.avgUnitPrice}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter average unit price" />
                    <br />
                    <br />

                    <input
                        type="text"
                        id="billAmount"
                        name="billAmount"
                        value={newPayToDealerObj.billAmount}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter bill amount" />
                    <br />
                    <br />

                    <input
                        type="text"
                        id="paymentDate"
                        name="paymentDate"
                        value={newPayToDealerObj.paymentDate}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter payment Date" />
                    <br />
                    <br />
                    <input
                        type="text"
                        id="paymentmethod"
                        name="paymentmethod"
                        value={newPayToDealerObj.paymentmethod}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter payment method" />
                    <br />
                    <br />

                    <input
                        type="text"
                        id="AccountNumber"
                        name="AccountNumber"
                        value={newPayToDealerObj.AccountNumber}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter Account Number" />
                    <br />
                    <br />

                    <input
                        type="text"
                        id="status"
                        name="status"
                        value={newPayToDealerObj.status}
                        onChange={handleCustomerPayToDealer}
                        placeholder="status" />
                    <br />
                    <br />

                    <input
                        type="text"
                        id="bankName"
                        name="bankName"
                        value={newPayToDealerObj.bankName}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter bank Name" />
                    <br />
                    <br />

                    <input
                        type="text"
                        id="month"
                        name="month"
                        value={newPayToDealerObj.month}
                        onChange={handleCustomerPayToDealer}
                        placeholder="month" />
                    <br />
                    <br />

                    <input
                        type="text"
                        id="customerId"
                        name="customerId"
                        value={newPayToDealerObj.customerId}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter customer id" />
                    <br />
                    <br />
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={newPayToDealerObj.firstName}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter customer name" />
                    <br />
                    <br />

                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={newPayToDealerObj.lastName}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter customer last name" />
                    <br />
                    <br />

                    <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={newPayToDealerObj.mobileNumber}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter customer mobile Number" />
                    <br />
                    <br />

                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={newPayToDealerObj.password}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter customer password" />
                    <br />
                    <br />
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={newPayToDealerObj.email}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter customer email" />
                    <br />
                    <br />

                    <input
                        type="text"
                        id="dealerId"
                        name="dealerId"
                        value={newPayToDealerObj.dealerId}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter dealerid" />
                    <br />
                    <br />

                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={newPayToDealerObj.firstName}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter dealer first Name" />
                    <br />
                    <br />

                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={newPayToDealerObj.firstName}
                        onChange={handleCustomerPayToDealer}
                        placeholder="Enter dealer first Name" />
                    <br />
                    <br />



                    <form className="form form-group form-primary" onSubmit={submitCustomerPayToDealer}>
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="CustomerPayToDealer" />
                    </form>
                </div>

                <p>New Customer Data:<p />
                    <p>transactionId:{displayPayToDealerObj.transactionId}</p>
                    <p>totalMilkunits:{displayPayToDealerObj.totalMilkunits}</p>
                    <p>LastName:{displayPayToDealerObj.avgUnitPrice}</p>
                    <p>Password:{displayPayToDealerObj.billAmount}</p> 
                    <p>PaymentDate:{displayPayToDealerObj.paymentDate}</p>
                    <p>Paymentmethod:{displayPayToDealerObj.paymentmethod}</p>
                    <p>AccountNumber:{displayPayToDealerObj.AccountNumber}</p>
                    <p>status:{displayPayToDealerObj.status}</p>
                    <p>bankName:{displayPayToDealerObj.bankName}</p>
                    <p>month:{displayPayToDealerObj.month}</p>
                    <p>customerID:{displayPayToDealerObj.customerId}</p>
                    <p>customerFirstName:{displayPayToDealerObj.firstName}</p>
                    <p>customerLastName:{displayPayToDealerObj.lastName}</p>
                    <p>customerMobileNumber:{displayPayToDealerObj.mobileNumber}</p>
                    <p>customerPassword:{displayPayToDealerObj.password}</p>
                    <p>customerEmail:{displayPayToDealerObj.email}</p>
                </p>

                    {/* // transactionId;
                // totalMilkunits;
                // avgUnitPrice;
                // billAmount;
                // paymentDate;
                // paymentmethod;
                // AccountNumber;
                // status;
                // bankName;
                // month;
                // dealer;
                // customer; */}
            </div>
        </div>


    );
}
export default CustomerPayToDealer;