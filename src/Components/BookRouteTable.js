import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AudioTour from './Booking/AudioTour'
import Blogs from './Booking/Blogs'
import CarRental from './Booking/CarRental'
import Deals from './Booking/Deals'
import FlightBooking from './Booking/FlightBooking'
import HotelBooking from './Booking/HotelBooking'
import Restaurants from './Booking/Restaurants'
import ToDo from './Booking/ToDo'
import Main from './Main'

const BookRouteTable = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/flightbooking" element={<FlightBooking/>}/>
            <Route path="/hotelbooking" element={<HotelBooking/>}/>
            <Route path="/carrental" element={<CarRental/>}/>
            <Route path="/restaurant" element={<Restaurants/>}/>
            <Route path="/explore" element={<ToDo/>}/>
            <Route path="/audiotour" element={<AudioTour/>}/>
            <Route path="/deal" element={<Deals/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
export default BookRouteTable