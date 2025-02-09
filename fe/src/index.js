import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeaderComp from './component/HeaderComp';
import ContentComp from './component/ContentComp';
import FooterComp from './component/FooterComp';
import BodyInformation from './component/UpdateInformation';
import UserTable from './component/UserTable';
import ViewInformation from './component/ViewInformation';
import UpdateInformation from './component/UpdateInformation';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* <FooterComp/> 
<ContentComp/> */}
{/* <UpdateInformation/> */}
<UserTable/>
{/* <ViewInformation/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
