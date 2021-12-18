
import { getFarmerByIdService } from "../services/FarmService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getAllFarmerService,addFarmerService,updateFarmerService,deleteFarmerService,companyBuysMilkService } from "../services/FarmService";
// import { getEmpById, getAllEmps } from '../redux/EmpSlice';
import axios from "axios";

import { getFarmerById,getAllFarmer,deleteFarmerByID } from "../../redux/FarmerSlice";
import Farmer from "../../models/Farmer";
import CompanyBuysMilk from "../models/companybuysmilk";

const FarmerData = () => {


    const [newFarmerObj, setNewFarmerObj] = useState(new Farmer());
    const [updtFarmerObj, setUpdtFarmerObj] = useState(new Farmer());
    const [displayFarmerObj, setDisplayFarmerObj] = useState(new Farmer());
    const [updateFarmerObj, setUpdateFarmerObj] = useState(new Farmer());
    const [fid, setFid] = useState('');
    const [deleteFarmer, setDeleteFarmer] = useState('');
    const dispatch = useDispatch();
    const farmerDataFromStore = useSelector((state) => state.farm.farmState);
    const farmerList = useSelector((state) => state.farm.farmList);
    const [newPaymentObj, setNewPaymentObj] = useState(new CompanyBuysMilk());
    const [displayPaymentObj, setDisplayPaymentObj] = useState(new CompanyBuysMilk());

    const handleFarmer = (e) => {
        console.log('handlefarmer');
        setFid(e.target.value);
    }

    const handleAddFarmer = (e) => {
        console.log(e.target.value);
        setNewFarmerObj({
            ...newFarmerObj,
            [e.target.name]: e.target.value,
        });
    }
    const handleUpdateFarmer = (e) => {
        console.log(e.target.value);
        setUpdtFarmerObj({
            ...updtFarmerObj,
            [e.target.name]: e.target.value,
        });
    }

    const handleDeleteFarmer = (ev) => {
        console.log('handleDeleteFarmer');
        setDeleteFarmer(ev.target.value);
    }

    const submitGetFarmerById = (evt) => {
        evt.preventDefault();
        console.log('submitGetFarmerById');
        getFarmerByIdService(fid)
            .then((response) => { dispatch(getFarmerById(response.data)) })
            .catch(() => {
                alert(`Employee with ${fid} not found.`);
            });
        console.log(Object.keys(farmerList));
        setFid('');
    }

    const submitGetAllFarmer = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllFarmers');
        getAllFarmerService()
            .then((response) => {
                dispatch(getAllFarmer(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    const submitAddFarmer = (evt) => {
        evt.preventDefault();
        console.log('addFarmers');
        axios.post(`http://localhost:8082/farmer/add`, newFarmerObj)
            .then((response) => {
                setDisplayFarmerObj(response.data);
                alert('Farmer added successfully.');
                setNewFarmerObj({ firstName:'', lastName:'',mobileNumber:'',email:'',password:''})
            
            })
            .catch(() => {
                alert("Farmer could not be added.");
            });
    }

    const submitUpdateFarmer = (evt) => {
        evt.preventDefault();
        console.log('addFarmers');
        axios.put(`http://localhost:8082/farmer/update`, updtFarmerObj)
            .then((response) => {
                setUpdateFarmerObj(response.data);
                alert('Farmer details updated successfully.');
                setNewFarmerObj({ firstName:'', lastName:'',mobileNumber:'',email:'',password:''})
            
            })
            .catch(() => {
                alert("Farmer could not be found.");
            });
    }

    const submitDeleteFarmer = (evt) => {
        evt.preventDefault();
        console.log('deleteFarmerDetails');
        axios.delete(`http://localhost:8082/farmer/delete/${deleteFarmer}`)
            .then((response) => {     
                alert(`Farmer details deleted successfully.`);
                    
            
            })
            .catch(() => {
                alert(`Farmer not found.`);
            });


    const handleAddPayment = (e) => {
         console.log(e.target.value);
                setNewPaymentObj({
                    ...newPaymentObj,
                    [e.target.name]: e.target.value,
                });
            }

            const submitAddPayment = (evt) => {
                evt.preventDefault();
                console.log('comp buys');
                axios.post(`/payment/company/buys`, newFarmerObj)
                    .then((response) => {
                        setDisplayPaymentObj(response.data);
                        alert('Farmer added successfully.');
                        // setNewFarmerObj({ firstName:'', lastName:'',mobileNumber:'',email:'',password:''})
                    
                    })
                    .catch(() => {
                        alert("Farmer could not be added.");
                    });
            }

    }

    return (
        <div>
            <h1 className="display-4 text-primary mt-3 mb-3" >Farmer Component</h1>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find farmer by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetFarmerById}>
                    <input className="form-control mt-3" type="number" id="fid" name="fid" value={fid} onChange={handleFarmer} placeholder="Enter farmer id to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Search farmer" />
                </form>
                <p>Farmer details: {farmerDataFromStore.farmerId} {farmerDataFromStore.firstName} {farmerDataFromStore.lastName} </p>
            </div>

            <div>
                <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <p>List of all Farmers</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllFarmer} value="Find All Farmers" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>Farmerid</th>
                                <th>Name</th>
                                <th>lastname</th>
                            </tr>
                        </thead>
                        <tbody>
                            {farmerList.map((farm, k) => {
                                return (
                                    <tr k={k}> <td>{farm.farmerId}</td> <td>{farm.firstName}</td><td>{farm.lastName}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
                <p>Add New Farmer</p>
                {/* <form onSubmit={submitAddEmp}> */}
                <div id="addNewFarmerDiv">
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={newFarmerObj.firstName}
                        onChange={handleAddFarmer}
                        placeholder="Enter First Name" />
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={newFarmerObj.lastName}
                        onChange={handleAddFarmer}
                        placeholder="Enter Last Name" />
                    <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={newFarmerObj.mobileNumber}
                        onChange={handleAddFarmer}
                        placeholder="Enter Mobile Number" />
                     <input
                        type="text"
                        id="email"
                        name="email"
                        value={newFarmerObj.email}
                        onChange={handleAddFarmer}
                        placeholder="Enter Email" />   
                     <input
                        type="text"
                        id="password"
                        name="password"
                        value={newFarmerObj.password}
                        onChange={handleAddFarmer}
                        placeholder="Enter password" />   
                    <input
                        type="submit"
                        // type="button"
                        value="Add Farmer"
                        onClick={submitAddFarmer}
                    />
                </div>
                <p>New Farmer Data: {displayFarmerObj.farmerId} {displayFarmerObj.firstName} {displayFarmerObj.lastName}{displayFarmerObj.mobileNumber}{displayFarmerObj.email}</p>
            </div>
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
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={updtFarmerObj.firstName}
                    onChange={handleUpdateFarmer}
                    placeholder="Enter First Name" />
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={updtFarmerObj.lastName}
                    onChange={handleUpdateFarmer}
                    placeholder="Enter Last Name" />
                <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={updtFarmerObj.mobileNumber}
                    onChange={handleUpdateFarmer}
                    placeholder="Enter Mobile Number" />
                 <input
                    type="text"
                    id="email"
                    name="email"
                    value={updtFarmerObj.email}
                    onChange={handleUpdateFarmer}
                    placeholder="Enter Email" />   
                 <input
                    type="text"
                    id="password"
                    name="password"
                    value={updtFarmerObj.password}
                    onChange={handleUpdateFarmer}
                    placeholder="Enter password" />   
                <input
                    type="submit"
                    // type="button"
                    value="update Farmer"
                    onClick={submitUpdateFarmer}
                />
            </div>
            <p>Updated Farmer Data: {updateFarmerObj.FarmerId} {updateFarmerObj.firstName} {updateFarmerObj.lastName} {updateFarmerObj.mobileNumber} {updateFarmerObj.email}</p>
        </div>
        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Delete farmer by id</p>
                <form className="form form-group form-primary" onSubmit={submitDeleteFarmer}>
                    <input className="form-control mt-3" type="number" id="deleteFarmer" name="deleteFarmer" value={deleteFarmer} onChange={handleDeleteFarmer} placeholder="Enter Farmer Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Farmer" />
                </form>
                {/* <p>Deleted Farmer details:  {farmerDelete.firstName} {farmerDelete.lastName} </p> */}
            </div>



        </div>
    );
}
export default FarmerData;