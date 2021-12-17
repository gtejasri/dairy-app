// import CustomerData from "./components/controller/CustomerData";
// import SpringCustomerData from "./components/SpringCustomerData";
// import Routes from "./Routes";
import AddCustomer from "./components/controller/AddCustomer";
import GetAllCustomers from "./components/controller/GetAllCustomers";
import GetCustomerById from "./components/controller/GetCustomerById";
import UpdateCustomer from "./components/controller/UpdateCustomer";
import DeleteCustomer from "./components/controller/DeleteCustomer";

const App = () => {
  return (
    <div className="bg-light">
      <AddCustomer/>
      <GetAllCustomers/>
      <GetCustomerById/>
      <UpdateCustomer/>
      <DeleteCustomer/>
       {/* <Routes />  */}
       {/* <CustomerData/>  */}
       {/* <SpringCustomerData/> */}
    </ div>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
