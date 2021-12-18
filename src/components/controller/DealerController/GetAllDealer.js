
import { useDispatch, useSelector } from "react-redux";
import { getAllDealersService} from "../../../components/services/DealerServices";
import { getAllDealers } from "../../../redux/DealerSlice";

    const GetAllDealer = () => {


        
        const dispatch = useDispatch();
        const dealerList = useSelector((state) => state.dealer.dealerList);

        
        const submitGetAllDealer = (evt) => {
            evt.preventDefault();
            console.log('submitGetAllDealer');
            getAllDealersService()
                .then((response) => {
                    dispatch(getAllDealers(response.data));
                })
                .catch(() => {
                    alert(`Something is wrong!`);
                });
        }
        return (
            <div className="container">
            <h1 className="display-5 text-primary mt-3 mb-3" >Find All Customer Component</h1>
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
                                <th>DealerId</th>
                                <th>Name</th>
                                <th>lastname</th>
                                <th>mobileNumber</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dealerList.map((dealer, k) => {
                                return (
                                    <tr k={k}> 
                                    <td>{dealer.dealerId}</td>
                                     <td>{dealer.firstName}</td>
                                     <td>{dealer.lastName}</td>
                                     <td>{dealer.mobileNumber}</td>
                                     <td>{dealer.email}</td>
                                     </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            );
        }
        export default GetAllDealer;