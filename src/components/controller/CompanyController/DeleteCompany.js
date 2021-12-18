
import { useState } from "react";
import axios from "axios";





const DeleteCompany = () => {
    
   
    const [deleteCompany, setDeleteCompany] = useState('');
    
    
    const handleDeleteCompany = (ev) => {

        console.log('handleDeleteCompany');

        setDeleteCompany(ev.target.value);
 }

 const submitDeleteCompany = (evt) => {

    evt.preventDefault();

    console.log('deleteCompanyDetails');

    axios.delete(`http://localhost:8086/company/delete/${deleteCompany}`) 

        .then((response) => {

            alert(`Company details deleted successfully.`);

            //  dispatch(deletecompanyById(response.data));     
        })

        .catch(() => {

           alert(`Company not found.`);

        });
} 

return (
    <div>
        <h1 className="display-4 text-primary mt-3 mb-3" >Delete Company</h1>
        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Delete company by id</p>
                <form className="form form-group form-primary" onSubmit={submitDeleteCompany}>
                    <input className="form-control mt-3" type="number" id="deleteCompany" name="deleteCompany" value={deleteCompany} onChange={handleDeleteCompany} placeholder="Enter Company Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Company" />
                </form>
                 
            </div>

        </div>
    );
}

 
export default DeleteCompany;