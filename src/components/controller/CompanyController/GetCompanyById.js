import { useDispatch, useSelector  } from "react-redux";
import { useState } from "react";
import { getCompanyByIdService} from "../../services/CompService";

import { getcompanyById } from "../../../redux/CompSlice";

const GetCompanyById = () => {

    const [companyId, setCompanyId] = useState('');
    const dispatch = useDispatch();
    const companyDataFromStore = useSelector((state) => state.company.companyState);
    const companyList = useSelector((state) => state.company.companyList);

    // const [newCompanyObj, setNewCompanyObj] = useState(new Company());
    // const [updtCompanyObj, setUpdtCompanyObj] = useState(new Company());
    // const [displayCompanyObj, setDisplayCompanyObj] = useState(new Company());
    // const [updateCompanyObj, setUpdateCompanyObj] = useState(new Company());
    // const [deleteCompany, setDeleteCompany] = useState('');
    // const companyDelete = useSelector((state) => state.company.companyDelete);

    const handleCompany = (e) => {
        console.log('handleCompany');
        setCompanyId(e.target.value);
    }

    const submitGetCompanyById = (evt) => {
        evt.preventDefault();
        console.log('submitGetCompanyById');
        getCompanyByIdService(companyId)
            .then((response) => { 
                dispatch(getcompanyById(response.data)) })
            .catch(() => {
                alert(`Company with ${companyId} not found.`);
            });
        console.log(Object.keys(companyList));
        setCompanyId('');
    }
    return (
        <div>
            <h1 className="display-4 text-primary mt-3 mb-3" >Get Company By Id</h1>
            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find Company by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetCompanyById}>
                    <input className="form-control mt-3" type="number" id="companyId" name="companyId" value={companyId} onChange={handleCompany} placeholder="Enter company id to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Search company" />
                </form>
                <p>Company details: {companyDataFromStore.companyId} {companyDataFromStore.companyName} {companyDataFromStore.email} {companyDataFromStore.mobileNumber}{companyDataFromStore.addess} {companyDataFromStore.password} </p>
            </div>
            </div>
    );
}

 
export default GetCompanyById;