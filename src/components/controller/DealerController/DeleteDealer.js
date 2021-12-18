import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteDealerService,updateDealerService,insertDealerService,getDealerService,getAllDealersService } from "../services/DealerServices";
import axios from "axios";

import {getDealer,getAllDealers} from "../../redux/DealerSlice";
import Dealer from "../models/Dealer";
import { deleteDealer } from "../../../redux/DealerSlice";

const DeleteDealer = () => {

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

    const handleDeleteDealer = (ev) => {
        console.log('handleDeleteDealer');
        setDeleteDealer(ev.target.value);
    }
    const submitDeleteDealer = (evt) => {
        evt.preventDefault();
        console.log('deleteDealerDetails');
        axios.delete(`http://localhost:8082/farmer/delete/${deleteDealer}`)
            .then((response) => {
                alert(`Dealer details deleted successfully.`)
                dispatch(deleteDealer(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Dealer not found.`);
            });
            return (
                
        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Delete Dealer by id</p>
                <form className="form form-group form-primary" onSubmit={submitDeleteDealer}>
                    <input className="form-control mt-3" type="number" id="deleteDealer" name="deleteDealer" value={deleteDealer} onChange={handleDeleteDealer} placeholder="Enter Dealer Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Dealer" />
                </form>
                {/* <p>Deleted Farmer details: {farmerDataFromStore.farmerId} {farmerDataFromStore.firstName} {farmerDataFromStore.lastName} </p> */}
            </div>

        
    );
}
}
export default DeleteDealer;