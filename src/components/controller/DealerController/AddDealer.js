
import { useState } from "react";
import axios from "axios";
import Dealer from "../../models/Dealer";


const AddDealer = () => {


    const [newDealerObj, setNewDealerObj] = useState(new Dealer());
    const [displayDealerObj, setDisplayDealerObj] = useState(new Dealer());

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
        axios.post(`http://localhost:8086/dealer/add`, newDealerObj)
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
        <div className="container">
        <h1 className="display-4 text-primary mt-3 mb-3" >Add Dealer Component</h1>
        <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
            
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
        </div>
        );
}
export default AddDealer;