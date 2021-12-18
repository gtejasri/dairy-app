
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getDealerService } from "../../services/DealerServices";
import {getDealById} from "../../../redux/DealerSlice";


const GetDealerById = () => {


    const [dealerId, setdealerId] = useState('');
    
    const dispatch = useDispatch();
    const dealerDataFromStore = useSelector((state) => state.dealer.dealerState);
    const dealerList = useSelector((state) => state.dealer.dealerList);
   
    const handleDealer = (d) => {
        console.log('handleDealer');
        setdealerId(d.target.value);
    }
    const submitGetDealer = (evt) => {
        evt.preventDefault();
        console.log('submitGetDealerservice');
        getDealerService(dealerId)
            .then((response) => { dispatch(getDealById(response.data)) })
            .catch(() => {
                alert(`Dealer with ${dealerId} not found.`);
            });
        console.log(Object.keys(dealerList));
        setdealerId('');
    }
    return (
        <div>
            <h1 className="display-4 text-primary mt-3 mb-3" >Dealer Component</h1>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find Dealer by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetDealer}>
                    <input className="form-control mt-3" type="number" id="dealerId" name="dealerId" value={dealerId} onChange={handleDealer} placeholder="Enter dealer id to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Search dealer" />
                </form>
                <p>Dealer details: {dealerDataFromStore.dealerId} {dealerDataFromStore.firstName} {dealerDataFromStore.lastName} </p>
            </div>
            </div>
    );
}
export default GetDealerById;