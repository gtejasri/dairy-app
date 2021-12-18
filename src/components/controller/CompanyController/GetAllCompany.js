import { useDispatch, useSelector  } from "react-redux";
import { getAllCompanyService} from "../../services/CompService";
import { getAllCompany } from "../../../redux/CompSlice";

const GetAllCompany = () => {

    
    const dispatch = useDispatch();
    const companyList = useSelector((state) => state.company.companyList);


    const submitGetAllCompany= (evt) => {
        evt.preventDefault();
        console.log('submitGetAllCompany');
        getAllCompanyService()
            .then((response) => {
                dispatch(getAllCompany(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    return (
        <div>
            <h1 className="display-4 text-primary mt-3 mb-3" >All Company Details</h1>
            <div>
                <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <p>List of all Company</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllCompany} value="Find All Companies" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>CompanyId</th>
                                <th>companyName</th>
                                <th>mobileNumber</th>
                                <th>address</th>
                                <th>email</th>
                                <th>password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companyList.map((company, k) => {
                                return (
                                    <tr k={k}> <td>{company.companyId}</td> <td>{company.companyName}</td><td>{company.email}</td><td>{company.mobileNumber}</td><td>{company.password}</td><td>{company.address}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
    );
}

 
export default GetAllCompany;