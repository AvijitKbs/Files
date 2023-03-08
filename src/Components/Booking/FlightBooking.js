import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
const FlightBooking = () => {
  return (
    <>
    <div className='container-fluid m-4 row'>
        <TextField InputLabelProps={{style: {fontSize:20,width:100}}} label="From-To" className='mx-1 col-3'/>
        <TextField InputLabelProps={{style: {fontSize:20}}} label="Trip" className='mx-2 col-2' />
        <TextField InputLabelProps={{style: {fontSize:20}}} label="Depart-Return" className='mx-2 col-4' />
        <TextField InputLabelProps={{style: {fontSize:20}}} label="Passenger-class" className='mx-2 col-2' />
    </div>
    <div style={{display:"flex",justifyContent:"center" }} className="my-4">
    <Button variant="contained" color="warning">Search</Button>
    </div>
    </>
  )
}
export default FlightBooking