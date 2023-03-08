import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
// import Main from '../Main';
const DetailsModal = ({detailsModal,setDetailsModal}) => {
const [passengerCount, setpassengerCount] = useState(1)
const [journeyclass,setJourneyClass] = useState("Economy")
  return (
    <>
    <Modal backdrop="static" show={detailsModal} onHide={() => setDetailsModal(false)} centered>
			<Modal.Header closeButton>
			</Modal.Header>
        <Modal.Body>
          <div className='row'>
          <select onChange={(e)=>setpassengerCount(e.target.value)} className='col-4' style={{backgroundColor:"aliceblue"}}>
                   <option>--Passengers count--</option>
                   <option>1</option>
                   <option>2</option>
                   <option>3</option>
                   <option>4</option>
                   <option>5</option>
                   <option>6</option>
                   <option>7</option>
                   <option>8</option>
                   <option>9</option>
                   <option>10</option>
          </select>
          <select onChange={(e)=>setJourneyClass(e.target.value)}className='col-4 '>
                   <option>--Select class--</option>
                   <option>Economy</option>
                   <option>Business</option>
          </select>
          </div>
              <br/>

		    </Modal.Body>
    </Modal>
    {/* {<Main passengerCount={passengerCount} journeyclass={journeyclass}/>} */}
    </>


  )
}

export default DetailsModal