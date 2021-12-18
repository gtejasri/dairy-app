
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";


import Farmer from "../../models/Farmer";

const DeleteFarmer = () => {


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

    const handleDeleteFarmer = (ev) => {
        console.log('handleDeleteFarmer');
        setDeleteFarmer(ev.target.value);
    }

    const submitDeleteFarmer = (evt) => {
        evt.preventDefault();
        console.log('deleteFarmerDetails');
        axios.delete(`http://localhost:8086/farmer/delete/${deleteFarmer}`)
            .then((response) => {     
                alert(`Farmer details deleted successfully.`);
            })
            .catch(() => {
                alert(`Farmer not found.`);
            });

    }

    return (

        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
        <p>Delete farmer by id</p>
        <form className="form form-group form-primary" onSubmit={submitDeleteFarmer}>
            <input className="form-control mt-3" type="number" id="deleteFarmer" name="deleteFarmer" value={deleteFarmer} onChange={handleDeleteFarmer} placeholder="Enter Farmer Id" autoFocus required />
            <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Farmer" />
        </form>
    </div>




    );


}

export default DeleteFarmer;