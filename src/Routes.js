import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Page404 from "./components/Page404";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UpdateFarmer from "./components/controller/Farmercontroller/UpdateFarmer";
import FarmerById from "./components/controller/Farmercontroller/FarmerById";
import GetAllCompany from "./components/controller/CompanyController/GetAllCompany";
import ViewAllFarmers from "./components/controller/Farmercontroller/ViewAllFarmers";
import AddFarmer from "./components/controller/Farmercontroller/AddFarmer";
import DeleteFarmer from "./components/controller/Farmercontroller/DeleteFarmer";

const Routes = () => {


    let [loginStatus, setLoginStatus] = useState(false);
    let [user, setUser] = useState('ADMIN');

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
        setUser(sessionStorage.getItem('user'))
    }, []);

    if (loginStatus) {
        if (user === 'FARMER') {
            return (
                <div>
                    <Router>
                        <div>
                            <Header />
                            <div className="container">
                                <Switch>
                                    <Route exact path="/" loginStatus > <Home /> </Route>
                                    <Route path="/home" loginStatus> <Home /> </Route>
                                    <Route path="/addFarmer"> <AddFarmer /> </Route>
                                    <Route path="/updateFarmer"> <UpdateFarmer /> </Route>
                                    <Route path="/viewFarmer"> <FarmerById /> </Route>
                                    <Route path="/allCompanies"> < GetAllCompany /> </Route>
                                    <Route path="/logout"> <Logout /> </Route>
                                    <Route path="/*"> <Page404 /> </Route>
                                </Switch>
                            </div>
                            {/* <Footer /> */}
                        </div>
                    </Router>
                </div>
            );
        }
     else if (user === 'ADMIN') {
            return (
                <div>
                    <Router>
                    <div>
                            <Header />
                            <div className="container">
                                <Switch>
                                    <Route exact path="/" loginStatus > <Home /> </Route>
                                    <Route path="/home" loginStatus> <Home /> </Route>
                                    <Route path="/addFarmer"> <AddFarmer /> </Route>
                                    <Route path="/deleteFarmer"> <DeleteFarmer /> </Route>
                                    <Route path="/viewAllFarmer"> <ViewAllFarmers /> </Route>
                                   <Route path="/viewFarmer"> <FarmerById /> </Route>
                        
                                    <Route path="/logout"> <Logout /> </Route>
                                    <Route path="/*"> <Page404 /> </Route>
                                </Switch>
                            </div>
                            {/* <Footer /> */}
                        </div>
                    </Router>
                </div>
            );
        }
     else if (user === 'DEALER') {
            return (
                <div>
                    <Router>
                        <Header />
                    </Router>
                </div>
            );
        }
        else{
            return (
                <div>
                    <Router>
                        <Header />
                    </Router>
                </div>
            );

        }
    }
    else {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                <Route path="/register"> <Register /> </Route>
                                <Route path="/login"> <Login /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
}



export default Routes;















// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import CustomerData from './components/controller/CustomerData';
// import Header from "./components/Header";
// import Home from './components/Home';
// import Login from "./components/Login";
// import Logout from './components/Logout';
// import Page404 from './components/Page404';
// import Register from "./components/Register";
// import SpringCustomerData from './components/SpringCustomerData';

// const Routes = () => {

//     let [loginStatus, setLoginStatus] = useState(false);

//     useEffect(() => {
//         setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
//     }, []);

//     if (loginStatus) {
//         return (
//             <div>
//                 <Router>
//                     <div>
//                         <Header />
//                         <div>
//                             <Switch>
//                                 <Route exact path="/" loginStatus > <Home /> </Route>
//                                 <Route path="/home" loginStatus> <Home /> </Route>
//                                 <Route path="/customer"> <CustomerData /> </Route>
//                                 <Route path="/spring"> <SpringCustomerData /> </Route>
//                                 <Route path="/logout"> <Logout /> </Route>
//                                 <Route path="/*"> <Page404 /> </Route>
//                             </Switch>
//                         </div>
//                         {/* <Footer /> */}
//                     </div>
//                 </Router>
//             </div>
//         );
//     }
//     else {
//         return (
//             <div>
//                 <Router>
//                     <div>
//                         <Header />
//                         <div>
//                             <Switch>
//                                 <Route exact path="/" loginStatus > <Home /> </Route>
//                                 <Route path="/home" loginStatus> <Home /> </Route>
//                                 <Route path="/register"> <Register /> </Route>
//                                 <Route path="/login"> <Login /> </Route>
//                                 <Route path="/*"> <Page404 /> </Route>
//                             </Switch>
//                         </div>
//                         {/* <Footer /> */}
//                     </div>
//                 </Router>
//             </div>
//         );
//     }
// }


// export default Routes;
