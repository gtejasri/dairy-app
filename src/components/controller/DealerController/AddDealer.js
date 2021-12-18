// import { getFarmerByIdService } from "../services/FarmService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteDealerService,updateDealerService,insertDealerService,getDealerService,getAllDealersService } from "../services/DealerServices";
import axios from "axios";

import {getDealer,getAllDealers} from "../../redux/DealerSlice";
import Dealer from "../models/Dealer";
const AddDealer = () => {


    const [newDealerObj, setNewDealerObj] = useState(new Dealer());
    const [updtDealerObj, setUpdtDealerObj] = useState(new Dealer());
    const [displayDealerObj, setDisplayDealerObj] = useState(new Dealer());
    const [updateDealerObj, setUpdateDealerObj] = useState(new Dealer());
    const [dealerId, setdealerId] = useState('');
    const [deleteDealer, setDeleteDealer] = useState('');
    const dispatch = useDispatch();
    const dealerDataFromStore = useSelector((state) => state.dealer.dealerState);
    const dealerList = useSelector((state) => state.dealer.dealerList);
    const dealerDelete = useSelector((state) => state.dealer.dealerDelete);
    
    const handleAddDealer = (d) => {
        console.log(d.target.value);
        setNewDealerObj({
            ...newDealerObj,
            [d.target.name]: d.target.value,
        });
    }
    const submitinsertDealer = (evt) => {
        evt.preventDefault();
        console.log('addDealer');
        axios.post(`http://localhost:8082/Dealer/add`, newDealerObj)
            .then((response) => {
                setDisplayDealerObj(response.data);
                alert('dealer added successfully.');
                setNewDealerObj({ firstName:'', lastName:'',mobileNumber:'',email:'',password:''})
            
            })
            .catch(() => {
                alert("Dealer could not be added.");
            });
    }
    return (
        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
        <p>Add New Dealer</p>
        {/* <form onSubmit={submitAddEmp}> */}
        <div id="addNewDealerDiv">
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={newDealerObj.firstName}
                onChange={handleAddDealer}
                placeholder="Enter First Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={newDealerObj.lastName}
                onChange={handleAddDealer}
                placeholder="Enter Last Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={newDealerObj.mobileNumber}
                onChange={handleAddDealer}
                placeholder="Enter Mobile Number" />
                <br/>
                <br/>
             <input
                type="text"
                id="email"
                name="email"
                value={newDealerObj.email}
                onChange={handleAddDealer}
                placeholder="Enter Email" />   
                <br/>
                <br/>
             <input
                type="text"
                id="password"
                name="password"
                value={newDealerObj.password}
                onChange={handleAddDealer}
                placeholder="Enter password" /> 
                <br/>
                <br/>  
            <input
                type="submit"
                // type="button"
                value="Add Dealer"
                onClick={submitinsertDealer}
            />
        </div>
        <p>New Dealer Data: {displayDealerObj.DealerId} {displayDealerObj.firstName} {displayDealerObj.lastName}{displayDealerObj.mobileNumber}{displayDealerObj.email}</p>
        </div>
        );
}
export default InsertDealer;