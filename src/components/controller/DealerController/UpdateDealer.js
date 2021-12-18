
import { useState } from "react";

import axios from "axios";


import Dealer from "../../models/Dealer";

const UpdateDealer = () => {


    const [newDealerObj, setNewDealerObj] = useState(new Dealer());
    const [updtDealerObj, setUpdtDealerObj] = useState(new Dealer());
    const [updateDealerObj, setUpdateDealerObj] = useState(new Dealer());
    
   
    const handleUpdateDealer = (d) => {
        console.log(d.target.value);
        setUpdtDealerObj({
            ...updtDealerObj,
            [d.target.name]: d.target.value,
        });
    }
    const submitUpdateDealer = (evt) => {
        evt.preventDefault();
        console.log('addDealer');
        axios.put(`http://localhost:8086/dealer/update`, updtDealerObj)
            .then((response) => {
                setUpdateDealerObj(response.data);
                alert('Dealer details updated successfully.');
                setNewDealerObj({ firstName:'', lastName:'',mobileNumber:'',email:'',password:''})
            
            })
            .catch(() => {
                alert("Dealer could not be found.");
            });
    }
    return (
        <div className="container">
        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
        <p>Update New Dealer</p>
        {/* <form onSubmit={submitAddEmp}> */}
        <div id="addNewDealerDiv">
        <input
                type="text"
                id="dealerId"
                name="dealerId"
                value={updtDealerObj.dealerId}
                onChange={handleUpdateDealer}
                placeholder="Enter Dealer Id" />
                <br/>
                <br/>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={updtDealerObj.firstName}
                onChange={handleUpdateDealer}
                placeholder="Enter First Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={updtDealerObj.lastName}
                onChange={handleUpdateDealer}
                placeholder="Enter Last Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={updtDealerObj.mobileNumber}
                onChange={handleUpdateDealer}
                placeholder="Enter Mobile Number" />
                <br/>
                <br/>
             <input
                type="text"
                id="email"
                name="email"
                value={updtDealerObj.email}
                onChange={handleUpdateDealer}
                placeholder="Enter Email" /> 
                <br/>
                <br/>  
             <input
                type="text"
                id="password"
                name="password"
                value={updtDealerObj.password}
                onChange={handleUpdateDealer}
                placeholder="Enter password" />  
                <br/>
                <br/> 
            <input
                type="submit"
                // type="button"
                value="update Dealer"
                onClick={submitUpdateDealer}
            />
        </div>
        <p>Updated Dealer Data: {updateDealerObj.DealerId} {updateDealerObj.firstName} {updateDealerObj.lastName} {updateDealerObj.mobileNumber} {updateDealerObj.email}</p>
    </div>
    </div>
    );
}
export default UpdateDealer;