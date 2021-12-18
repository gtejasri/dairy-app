
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

import Farmer from "../../models/Farmer";


const UpdateFarmer = () => {

    const [newFarmerObj, setNewFarmerObj] = useState(new Farmer());
    const [updtFarmerObj, setUpdtFarmerObj] = useState(new Farmer());
    const [displayFarmerObj, setDisplayFarmerObj] = useState(new Farmer());
    const [updateFarmerObj, setUpdateFarmerObj] = useState(new Farmer());
    const [fid, setFid] = useState('');
    const [deleteFarmer, setDeleteFarmer] = useState('');
    const dispatch = useDispatch();
    const farmerDataFromStore = useSelector((state) => state.farm.farmState);
    const farmerList = useSelector((state) => state.farm.farmList);
    const farmerDelete = useSelector((state) => state.farm.farmerDelete);


    const handleUpdateFarmer = (e) => {
        console.log(e.target.value);
        setUpdtFarmerObj({
            ...updtFarmerObj,
            [e.target.name]: e.target.value,
        });
    }


    const submitUpdateFarmer = (evt) => {
        evt.preventDefault();
        console.log('addFarmers');
        axios.put(`http://localhost:8086/farmer/update`, updtFarmerObj)
            .then((response) => {
                setUpdateFarmerObj(response.data);
                alert('Farmer details updated successfully.');
                setNewFarmerObj({ firstName:'', lastName:'',mobileNumber:'',email:'',password:''})
            
            })
            .catch(() => {
                alert("Farmer could not be found.");
            });
    }

    return (


        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
        <p>Update New Farmer</p>
        {/* <form onSubmit={submitAddEmp}> */}
        <div id="addNewFarmerDiv">
        <input
                type="text"
                id="farmerId"
                name="farmerId"
                value={updtFarmerObj.farmerId}
                onChange={handleUpdateFarmer}
                placeholder="Enter farmer Id" />
                <br/>
                <br/>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={updtFarmerObj.firstName}
                onChange={handleUpdateFarmer}
                placeholder="Enter First Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={updtFarmerObj.lastName}
                onChange={handleUpdateFarmer}
                placeholder="Enter Last Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={updtFarmerObj.mobileNumber}
                onChange={handleUpdateFarmer}
                placeholder="Enter Mobile Number" />
                <br/>
                <br/>
             <input
                type="text"
                id="email"
                name="email"
                value={updtFarmerObj.email}
                onChange={handleUpdateFarmer}
                placeholder="Enter Email" />   
                <br/>
                <br/>
             <input
                type="text"
                id="password"
                name="password"
                value={updtFarmerObj.password}
                onChange={handleUpdateFarmer}
                placeholder="Enter password" />  
                <br/> 
            <input
                type="submit"
                // type="button"
                value="update Farmer"
                onClick={submitUpdateFarmer}
            />
        </div>
        <p>Updated Farmer Data: {updateFarmerObj.FarmerId} {updateFarmerObj.firstName} {updateFarmerObj.lastName} {updateFarmerObj.mobileNumber} {updateFarmerObj.email}</p>
    </div>
    


    );


}

export default UpdateFarmer;