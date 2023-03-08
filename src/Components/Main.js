import React, { useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Autocomplete, TextField } from '@mui/material';
import DetailsModal from './Modals/DetailsModal';

const Main = () => {
  let [tab, setTab] = useState("1")
  let ThemeChange=useRef()
  let VerifyThemeChange=()=>{
    document.body.classList.toggle("dark");
  }
  let [origin, setOrigin] = useState()
  let [from, setFrom] = useState([])
  let [destination, setDestination] = useState()
  let [departureDate, setDepartureDate] = useState()
  let [returnDate, setReturnDate] = useState()
  let [travellerCount, setTravellerCount] = useState(1)
  let [Class, setClass] = useState("Economy")
  let [detailsModal , setDetailsModal] = useState(false);

  // axios.get('https://api.travelpayouts.com/v1/prices/direct?origin=MOW&destination=LED&depart_date=2016-11&return_date=2016-12&token=42812b917b7f842d981b4db0a7c251f5')
  // axios.get('https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=LON&destination=BCN&departure_at=2022-01&return_at=2022-02&unique=false&sorting=price&direct=false&currency=rub&limit=30&page=1&one_way=true&token=42812b917b7f842d981b4db0a7c251f5')
  // axios.get('')
  // .then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
// axios.get('https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=LON&destination=BCN&departure_at=2023-03&return_at=2023-04&unique=false&sorting=route&direct=true&currency=rub&limit=9&page=1&token=42812b917b7f842d981b4db0a7c251f5').then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
// const options = {
//   method: 'GET',
//   url: 'https://cors-proxy.p.rapidapi.com/proxy',
//   params: {url: 'https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=LON&destination=BCN&departure_at=2023-03&return_at=2023-04&unique=false&sorting=route&direct=true&currency=rub&limit=9&page=1&token=42812b917b7f842d981b4db0a7c251f5'},
//   headers: {
//     'X-RapidAPI-Key': 'ba9de0a973msh1822384dd89dfe5p10fa9djsndf0f97642922',
//     'X-RapidAPI-Host': 'cors-proxy.p.rapidapi.com'
//   }
// };
// axios.request(options).then(function (response) {
// 	console.log(response.data);
//   setData(response.data.currency)
// }).catch(function (error) {
// 	console.error(error);
// });
// let flightdata={"host":"12345",
//                 "locale":"en",
//                 "marker":"130544",
//                 "passengers":{adults:1,"children":0,"infants":0},
//                 "segments":[{"date":"2018-05-25","destination":"LON","origin":"MOW"},{"date":"2018-06-18","destination":"MOW","origin":"LON"}],
//                 "signature":"42812b917b7f842d981b4db0a7c251f5","trip_class":true,"user_ip":"192.168.5.62"}
// axios.post('https://api.travelpayouts.com/v1/flight_search',flightdata)
//  .then(function (response) {
// 	console.log(response.data);
//   setData(response.data.currency)
// }).catch(function (error) {
// 	console.error(error);
// });
useEffect(() => {
  axios.get("https://6327cb305731f3db995e3372.mockapi.io/Staff")
.then((response)=>{setFrom(response.data);console.log(response.data)})
}, [])

  return (
    <div>

  <nav className="navbar navbar-light bg-light justify-content-between container">
  <a className="navbar-brand">MySittiVacation</a>
  <form className="form-inline">
  <div className="form-check form-switch">
  <input className="form-check-input" onChange={VerifyThemeChange} ref={ThemeChange}type="checkbox" role="switch"/>
  <label className="form-check-label">Dark</label>
</div>
  </form>
</nav>
{/* Booking section starts */}
  <Tabs>
    <TabList className="text-center">
      <Tab onClick={()=>setTab("1")}>Flights</Tab>
      <Tab onClick={()=>setTab("2")}>Hotels</Tab>
      <Tab onClick={()=>setTab("3")}>Car Rental</Tab>
      <Tab onClick={()=>setTab("4")}>Restaurants</Tab>
      <Tab onClick={()=>setTab("5")}>Things To Do</Tab>
      <Tab onClick={()=>setTab("6")}>Audio Tour</Tab>
      <Tab onClick={()=>setTab("7")}>Deals</Tab>
      <Tab onClick={()=>setTab("8")}>Blogs</Tab>
    </TabList>
    <TabPanel>
       <div className='container' >
        <div style={{display:"flex",justifyContent:"space-between"}}>
           <div>
            <label className="mx-4">ONEWAY</label>
            <input type="checkbox"/>
            <label className="mx-4">ROUND TRIP</label>
            <input type="checkbox"/>
           </div>
         <div>
          <div>
            BOOK INTERNATIONAL AND DOMESTIC FLIGHTS
          </div>
           </div>
           <hr/>
        </div>
        <div>
<div style={{display:"inline"}}>
<Autocomplete
        options={from}
        renderInput={(params) =>
          <TextField
          {...params}
          label="From"
          multiline
          rows={3}
          style = {{width: 250}}
          />}
/>
<TextField
           label="To"
           multiline
           rows={3}
           style = {{width: 250}}
           />
           <TextField
           label="Departure"
           multiline
           rows={3}
           style = {{width: 200}}
           />
           <TextField
           label="Return"
           multiline
           rows={3}
           style = {{width: 200}}
           />
           <TextField
           onClick={()=>setDetailsModal(true)}
           label="Travellers & class"
           multiline
           rows={3}
           style = {{width: 200}}
           />
</div>
            {/* <strong>{passengerCount}</strong> Passenger
            <br/>
            <p>{journeyclass}</p> */}
           </div>
        <div style={{display:"flex",justifyContent:"center"}}>
           <Link to="/flightbooking"><button className='btn btn-success' >Search</button></Link>
        </div>

       </div>
    </TabPanel>
    <TabPanel>
        <div className='container'style={{display:"flex",justifyContent:"center"}}>
                <Link to="/hotelbooking"><button className='btn btn-success'>Search</button></Link>
        </div>
    </TabPanel>
    <TabPanel>
        <div className='container'style={{display:"flex",justifyContent:"center"}}>
                <Link to="/carrental"><button className='btn btn-success'>Search</button></Link>
        </div>
    </TabPanel>
    <TabPanel>
       <div className='container' style={{display:"flex",justifyContent:"center"}}>
                <Link to="/restaurant"><button className='btn btn-success'>Search</button></Link>
       </div>
    </TabPanel>
    <TabPanel>
       <div className='container' style={{display:"flex",justifyContent:"center"}}>
                <Link to="/explore"><button className='btn btn-success'>Search</button></Link>
       </div>
    </TabPanel>
    <TabPanel>
       <div className='container' style={{display:"flex",justifyContent:"center"}}>
                <Link to="/audiotour"><button className='btn btn-success'>Search</button></Link>
       </div>
    </TabPanel>
    <TabPanel>
       <div className='container' style={{display:"flex",justifyContent:"center"}}>
                <Link to="/deal"><button className='btn btn-success'>Search</button></Link>
       </div>
    </TabPanel>
    <TabPanel>
       <div className='container' style={{display:"flex",justifyContent:"center"}}>
                <Link to="/blogs"><button className='btn btn-success'>Search</button></Link>
       </div>
    </TabPanel>
  </Tabs>
  <hr/>
{/* offers section starts */}
       {
        tab=="1"?
        <Tabs >
          <TabList className="text-center">
            <Tab>Flight</Tab>
          </TabList>
          <TabPanel>
          <div className='container '>
             <button className='btn btn-warning btn-sm'>Flight booking offers</button>
           </div>
          </TabPanel>
        </Tabs>
        :""
       }
       {
        tab=="2"?
        <Tabs >
          <TabList className="text-center">
            <Tab>Hotels</Tab>
          </TabList>
          <TabPanel>
          <div className='container '>
             <button className='btn btn-warning btn-sm'>Hotel booking offers</button>
           </div>
          </TabPanel>
        </Tabs>
        :""
       }
       {
        tab=="3"?
        <Tabs >
          <TabList className="text-center">
            <Tab >Car Rental</Tab>
          </TabList>
          <TabPanel>
          <div className='container'>
             <button className='btn btn-warning btn-sm'>Cab booking offers</button>
           </div>
          </TabPanel>
        </Tabs>
     :""
       }
       {
        tab=="4"?
        <Tabs >
          <TabList className="text-center">
            <Tab >Restaurants</Tab>
          </TabList>
          <TabPanel>
          <div className='container'>
             <button className='btn btn-warning btn-sm'>Restaurant offers</button>
           </div>
          </TabPanel>
        </Tabs>
     :""
       }
       {
        tab=="5"?
        <Tabs >
          <TabList className="text-center">
            <Tab >Trip</Tab>
          </TabList>
          <TabPanel>
          <div className='container'>
             <button className='btn btn-warning btn-sm'>Trip offers</button>
           </div>
          </TabPanel>
        </Tabs>
     :""
       }
       {
        tab=="6"?
        <Tabs >
          <TabList className="text-center">
            <Tab >Audio Tour</Tab>
          </TabList>
          <TabPanel>
          <div className='container'>
             <button className='btn btn-warning btn-sm'>Audio  offers</button>
           </div>
          </TabPanel>
        </Tabs>
     :""
       }
       {
        tab=="7"?
        <Tabs >
          <TabList className="text-center">
            <Tab >Deals</Tab>
          </TabList>
          <TabPanel>
          <div className='container'>
             <button className='btn btn-warning btn-sm'>Deals offers</button>
           </div>
          </TabPanel>
        </Tabs>
     :""
       }
       {
        tab=="8"?
        <Tabs >
          <TabList className="text-center">
            <Tab >Blogs</Tab>
          </TabList>
          <TabPanel>
          <div className='container'>
          <h2 style={{fontFamily:"slick"}}>Subscribe to<br />our newsletter</h2>
          <br/>
          <input/>
          <button className='btn btn-danger mx-4'>Get Started</button>
           </div>
          </TabPanel>
        </Tabs>
     :""
       }
{DetailsModal &&<DetailsModal detailsModal={detailsModal} setDetailsModal={setDetailsModal}/>}


    </div>

  )
}
export default Main