import { render, screen } from '@testing-library/react';


import { Provider } from 'react-redux';
import store from './redux/store';


import AddCustomer from "./components/controller/CustomerController/AddCustomer";
import GetAllCustomer from "./components/controller/CustomerController/GetAllCustomers";
import GetCustomerById from "./components/controller/CustomerController/GetCustomerById";
import DeleteCustomer from "./components/controller/CustomerController/DeleteCustomer";
import UpdateCustomer from './components/controller/CustomerController/UpdateCustomer';

import UpdateDealer from "./components/controller/DealerController/UpdateDealer";
import DeleteDealer from './components/controller/DealerController/DeleteDealer';
import AddDealer from "./components/controller/DealerController/AddDealer";
import GetAllDealer from './components/controller/DealerController/GetAllDealer';
import GetDealerById from "./components/controller/DealerController/GetDealerById";




beforeAll(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  console.log('beforreEach');
});

test('render Data  Delete customer by id', () => {
  render(
    <Provider store={store} >
      <DeleteCustomer />
    </Provider>)
  const linkElement = screen.getByText('Delete customer by id');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Add New Customer', () => {
  render(
    <Provider store={store} >
      <AddCustomer/>
    </Provider>)
  const linkElement = screen.getByText('Add New Customer');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Find all customers', () => {
  render(
    <Provider store={store} >
       <GetAllCustomer/>
    </Provider>)
  const linkElement = screen.getByText('Find all customers');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Find customer by id', () => {
   
  render(
    <Provider store={store} >
       <GetCustomerById/>
    </Provider>)
  const linkElement = screen.getByText('Find customer by id');
  expect(linkElement).toBeInTheDocument();
});
 
test('render Data from Update New Customer', () => {
   
  render(
    <Provider store={store} >
       <UpdateCustomer/>
    </Provider>)
  const linkElement = screen.getByText('Update New Customer');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Update New Dealer', () => {
   
  render(
    <Provider store={store} >
       <UpdateDealer/>
    </Provider>)
  const linkElement = screen.getByText('Update New Dealer');
  expect(linkElement).toBeInTheDocument();
});

test('render Data  Delete dealer by id', () => {
  render(
    <Provider store={store} >
      <DeleteDealer/>
    </Provider>)
  const linkElement = screen.getByText('Delete Dealer by id');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Add New Dealer', () => {
  render(
    <Provider store={store} >
      <AddDealer/>
    </Provider>)
  const linkElement = screen.getByText('Add New Dealer');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from List of all Dealers', () => {
  render(
    <Provider store={store} >
       <GetAllDealer/>
    </Provider>)
  const linkElement = screen.getByText('List of all Dealers');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Find Dealer by id', () => {
   
  render(
    <Provider store={store} >
       <GetDealerById/>
    </Provider>)
  const linkElement = screen.getByText('Find Dealer by id');
  expect(linkElement).toBeInTheDocument();
});

 























// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
