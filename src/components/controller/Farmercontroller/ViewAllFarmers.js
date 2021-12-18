
import { useDispatch, useSelector } from "react-redux";

import { getAllFarmerService } from "../../services/FarmService";

import { getAllFarmer} from "../../../redux/FarmerSlice";


const GetAllFarmer = () => {

    const dispatch = useDispatch();
    const farmerList = useSelector((state) => state.farm.farmList);


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

    return (


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
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>mobileNumber</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {farmerList.map((farm, k) => {
                        return (
                            <tr k={k}> <td>{farm.farmerId}</td> 
                            <td>{farm.firstName}</td>
                            <td>{farm.lastName}</td>
                            <td>{farm.mobileNumber}</td>
                            <td>{farm.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>


    );

}
export default GetAllFarmer;