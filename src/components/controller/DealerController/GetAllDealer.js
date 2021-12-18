// import { getFarmerByIdService } from "../services/FarmService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteDealerService,updateDealerService,insertDealerService,getDealerService,getAllDealersService } from "../services/DealerServices";
import axios from "axios";

import {getDealer,getAllDealers} from "../../redux/DealerSlice";
import Dealer from "../models/Dealer";

    const GetAllDealer = () => {


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

        
        const submitGetAllDealer = (evt) => {
            evt.preventDefault();
            console.log('submitGetAllDealer');
            getAllDealersService()
                .then((response) => {
                    dispatch(getAllDealersService(response.data));
                })
                .catch(() => {
                    alert(`Something is wrong!`);
                });
        }
        return (
            <div>
                <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <p>List of all Dealers</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllDealer} value="Find All Dealers" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>Dealerid</th>
                                <th>Name</th>
                                <th>lastname</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dealerList.map((dealer, k) => {
                                return (
                                    <tr k={k}> <td>{dealer.dealarId}</td> <td>{dealer.firstName}</td><td>{dealer.lastName}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            );
        }
        export default GetAllDealer;