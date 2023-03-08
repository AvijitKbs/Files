import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'react-tabs/style/react-tabs.css';
import FirebaseRouteTable from './Firebase OTP Authentication/FirebaseRouteTable';
import { UserAuthContextProvider } from './Firebase OTP Authentication/UserAuthContext';
import Translation from './Translation/Transaltion';
import Main from './Components/Main';
import BookRouteTable from './Components/BookRouteTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<BookRouteTable/>
  <>
  <UserAuthContextProvider>
    {/* <FirebaseRouteTable/> */}
    {/* <CRUDLandlingPage/> */}
    {/* <Translation/> */}
     <BookRouteTable/>
  </UserAuthContextProvider>
 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
