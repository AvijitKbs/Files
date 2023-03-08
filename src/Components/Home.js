import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AOS from 'aos';
import Slider from "react-slick";
import Typewriter from "typewriter-effect"
import { useRef } from 'react';
const Home = () => {
	const ContactRef=useRef()
//Slick-carousel
	  var settings = {
		autoplaySpeed:2000,
		dots:false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay:true,
		pauseOnHover:true,
		autoplaySpeed:1000,
		speed: 1500,
		// fade:true,
		// centerMode:true,
		responsive: [
		  {
			breakpoint: 991,
			settings: {
			  slidesToShow: 3,
			}
		  },
		  {
			breakpoint: 767,
			settings: {
			  slidesToShow: 2,
			}
		  },
		  {
			breakpoint: 499,
			settings: {
			  slidesToShow: 1,
			}
		  }
		]
	  };
	   var set={
		autoplaySpeed:2000,
		dots:false,
	    // arrows:true,
		autoplay:true,
		pauseOnHover:true,
		fade:true,
	   }
	AOS.init({ duration : 2000});
	const [contactModalshow, setContactModalShow] = useState(false);
	const [aboutModalshow, setAboutModalShow] = useState(false);
	const [DMCAModalshow, setDMCAModalShow] = useState(false);
	const [policyModalshow, setPolicyModalShow] = useState(false);
	const [conditionModalshow, setConditionModalShow] = useState(false);
	const [searchModalshow, setSearchModalShow] = useState(false);

	const [scroll, setScroll] = useState(0);

	const handleContactClose = () => setContactModalShow(false);
	const handleAboutClose = () => setAboutModalShow(false);
	const handleDMCAClose = () => setDMCAModalShow(false);
	const handlePolicyClose = () => setPolicyModalShow(false);
	const handleConditionClose = () => setConditionModalShow(false);
	const handleSearchClose = () => setSearchModalShow(false);

	const handleContactShow = () => setContactModalShow(true);
	const handleAboutShow = () => setAboutModalShow(true);
	const handleDMCAShow = () => setDMCAModalShow(true);
	const handlePolicyShow = () => setPolicyModalShow(true);
	const handleConditionShow = () => setConditionModalShow(true);
	const handleSearchShow = () => setSearchModalShow(true);

    var i=0;
    var text="Get ready for your next vacation by checking out our website first for"
    function Tagline(){
      if(i<text.length){
        document.getElementById("tagline").innerHTML+=text.charAt(i);
        document.getElementById("tagline").style.fontSize="40px";
        document.getElementById("tagline").style.fontFamily="monospace";
        i++
      }
      if(i>=text.length){
        document.getElementById("tagline").innerText="Get ready for your next vacation by checking out our website first for";
        document.getElementById("tagline").style.fontSize="40px";
        document.getElementById("tagline").style.fontFamily="monospace";
        i=text.length;
      }
        setTimeout(Tagline,400)
    }

useEffect(() => {
	window.addEventListener('scroll', handleScroll);
}, [])
function handleScroll(e){
	// console.log(e.srcElement.body.scrollTop)

	if(window.pageYOffset>75){
		ContactRef.current.style.display="block"
		if(window.pageYOffset>3100){
			ContactRef.current.style.display="none"
	}
	}
    else{
		ContactRef.current.style.display="none"
	}
}
function openNav() {
	document.getElementById("mySidepanel").style.width = "20vw";
  }

  function closeNav() {
	document.getElementById("mySidepanel").style.width = "0";
  }
  return (
<div id="body">
	<div style={{display:"flex",justifyContent:"center"}}>
           <img src='images/logo2.png' style={{height:"100px",zIndex:2,marginTop:"-2vh",position:"absolute",borderRadius:"24px"}}/>
	</div>
<div onLoad={Tagline}>
<div id="mySidepanel" class="sidepanel">
  <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>×</a>
  <a href="#">About us</a>
  <a href="#">Explore</a>
  <a href="#">Attractions</a>
  <a href="#">CSR activities</a>
  <a href="#">Support</a>
  <a href="#">About us</a>
  <a href="#">Services</a>
  <a href="#">Reach us</a>

  <a href="#">Reach us</a>
</div>
	            <div>
<nav className="navbar navbar-expand-lg navbar-light nav_bar">

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
	  <i className="bi bi-menu-button openbtn mx-4"onClick={openNav}style={{fontSize:"20px"}}></i>
      </li>
    </ul>
  </div>
</nav>
		            <Slider {...set} >

						<div>
						<img style={{height:"550px",width:"100%",borderRadius:"26px"}}src="https://img.freepik.com/free-photo/sunset-sisters-monument-valley-usa_268835-1009.jpg?w=996&t=st=1674284891~exp=1674285491~hmac=74d3b3774ceea4b641f0284b48607137ab2e647073d2da4bbc53070195035be0"data-aos="zoom-out"/>
						</div>
						<div>
						<img style={{height:"550px",width:"100%",borderRadius:"26px"}}src="https://img.freepik.com/free-photo/beautiful-shot-small-lake-with-wooden-rowboat-focus-breathtaking-clouds-sky_181624-2490.jpg?w=996&t=st=1674284276~exp=1674284876~hmac=1faa6d69375ce28cd5b06a209f3a3ef21cfa21b7681d683d70d81320c135a575"data-aos="zoom-out"/>
						</div>
						<div>
					    <img style={{height:"550px",width:"100%",borderRadius:"26px"}}src="https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?w=1060&t=st=1674284833~exp=1674285433~hmac=725cb81a8b8d9603a16efc84799864704490bd2b5185bdbc9a10a7ecda102195"data-aos="zoom-in"/>
						</div>
                    </Slider>
		</div>
		<div >
		<h1 style={{color:"rgb(255 255 255)",fontSize:"25px"}}id='tagline'></h1>
	       <div className="container">
			<div className='row'>
			    <div className="col-6 my-4">
				<h1 style={{color:"rgb(136 166 139)",fontStyle:"italic",fontFamily:"auto"}}>
				   <Typewriter
                    options={{
                    strings: ["","vacations.", "flights.", "hotels.", "deals."],
                    autoStart: true,
                    loop: true,
					pauseFor:1000
                    }}
				   />
				   </h1>
				</div>
		       <div className="col-6 d-inline" >
				   <div  style={{display:"flex",justifyContent:"space-between"}}>
				   <button className='btn btn-warning' style={{marginTop:"8vh",
                   marginLeft:"-4vw",borderRadius:"24px"}} onClick={handleSearchShow}>Search</button>
	               <div style={{position:"fixed",marginLeft:"42vw"}}>
	               <img onClick={handleContactShow} ref={ContactRef}src='images/contact-us.png' style={{height:"80px",width:"70px",display:"none",marginTop:"4vh"}} className="contact_img"/>
	               </div>
			       </div>
				   {/* search-modal */}
				   <Modal backdrop="static" show={searchModalshow} onHide={handleSearchClose} centered>
        <Modal.Body>
          <Modal.Title  style={{display:"flex",justifyContent:"center"}}><p style={{fontSize:"30px",color:"#d47373"}}>Wanna see destination details</p></Modal.Title>
        </Modal.Body>
        <Modal.Body>
		<div>
									<ul >
										<li>
											<div className="form-group">
												<input style={{borderRadius:"20px"}}type="Name" className="form-control" id="exampleFormControlInput1" placeholder="City or Hotel Name"/>
											</div>
										</li>
										<li>
											<div className="form-group row" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                 <input style={{borderRadius:"20px"}}placeholder="Check In"className="col-4 m-4"  type="text" onFocus={(e)=>{e.target.type="date"}} onBlur={(e)=>{e.target.type='text'}} />
                                                 <input style={{borderRadius:"20px"}}placeholder="Check Out"className="col-4 m-4"  type="text" onFocus={(e)=>{e.target.type='date'}} onBlur={(e)=>{e.target.type='text'}} />

											</div>
										</li>
										<li>
											<div className="form-group">
												<select style={{borderRadius:"20px"}}className="custom-select form-control" id="searchTeam">
													<option selected="">Solo</option>
													<option selected="">2 Guest</option>
													<option>4 Guest</option>
													<option>6 Guest</option>
												</select>
											</div>
										</li>
										<li style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
											<button className='btn btn-success my-4' onClick={handleSearchClose}>Search </button>
										</li>
									</ul>
				   </div>
		</Modal.Body>

    </Modal>


			   </div>
			</div>
			   <div className="view-all-sec">
					<div className="view-tag" >
						<a href="#">Search</a>
					</div>
			   </div>
			   <div className="free-trail-form">
			       <div className="container">
						<div className="row">
							<div className="col-md-12 col-12">

							</div>
						</div>
					</div>
			   </div>
		   </div>
		</div>

	   <div className="body-content new-body-content" >
	       <div className="feature-section">
		       <div className="container">
					<div className="top-heading-section text-center">
				       <h1 style={{color:"rgb(208, 47, 207)",fontFamily:"cursive"}}>CHOOSE YOUR CATEGORY</h1>
					</div>
					<div className="row" >
				       <div  className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
					       <div className="business-block text-center" data-aos="flip-right">
						      <a href="">
							      <img src="images/2.png"/>
							      <p>Hotels</p>
							  </a>
						   </div>
					   </div>
					   <div  className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
					       <div className="business-block text-center yellow-bg"data-aos="flip-down">
						      <a href="">
							      <img src="images/5.png"/>
							      <p>Flights</p>
							  </a>
						   </div>
					   </div>
					   <div  className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
					       <div className="business-block text-center blue-bg" data-aos="flip-down">
						      <a href="">
							      <img src="images/4.png"/>
							      <p>Car Rentals</p>
							  </a>
						   </div>
					   </div>
					   <div  className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4" >
					       <div className="business-block text-center red-bg"data-aos="flip-right">
						      <a href="">
							      <img src="images/3.png"/>
							      <p>Restaurants</p>
							  </a>
						   </div>
					   </div>
					   <div  className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
					       <div className="business-block text-center purple-bg"data-aos="flip-right">
						      <a href="">
							      <img src="images/1.png"/>
							      <p>Flights</p>
							  </a>
						   </div>
					   </div>
					   <div  className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
					       <div className="business-block text-center green-bg"data-aos="flip-down">
						      <a href="">
							      <img src="images/6.png"/>
							      <p>Audio Tour</p>
							  </a>
						   </div>
					   </div>
					   <div  className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
					       <div className="business-block text-center grey-bg"data-aos="flip-down">
						      <a href="">
							      <img src="images/7.png"/>
							      <p>Blogs</p>
							  </a>
						   </div>
					   </div>
					   <div  className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
					       <div className="business-block text-center saff-bg"data-aos="flip-right">
						      <a href="">
							      <img src="images/8.png"/>
							      <p>Deals</p>
							  </a>
						   </div>
					   </div>
					</div>
			   </div>
		   </div>
	   </div>

		<div className="slider-section flight-sec">
			<div className="container">
				<div className="myheader-sec">
				   <h2 style={{color:"#d02fcf"}}>Cool Flight Deals</h2>
				   <p data-aos="fade-up" style={{fontFamily:"monospace"}}>Checkout what we found for you from</p>
				</div>
				<div>
				   <div >
				   <Slider {...settings}>
				   <figure className='mx-4'>
					   <img src="images/slid4.png" data-aos="zoom-out" />
                         <figcaption style={{fontStyle:"italic",color:"#b38181"}}>Newyork City</figcaption>
                       </figure>
					   <figure className='mx-4'>
					   <img src="images/slid3.png"data-aos="zoom-in"/>
                         <figcaption style={{fontStyle:"italic",color:"#b38181"}}>SanFrancisco</figcaption>
                       </figure>
					   <figure className='mx-4'data-aos="zoom-out">
					   <img src="images/slid2.png"/>
                         <figcaption style={{fontStyle:"italic",color:"#b38181"}}>Chicago</figcaption>
                       </figure>
					   <figure className='mx-4'data-aos="zoom-in">
					   <img src="images/slid1.png"/>
                         <figcaption style={{fontStyle:"italic",color:"#b38181"}}>Washington D.C</figcaption>
                       </figure>
                    </Slider>
				   </div>
				</div>
			</div>
		</div>

		<div className="slider-section discount-section">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12">
						<div  className="myheader-sec">
						   <h2 style={{color:"#d02fcf"}}>Amazing All-Inclusive Discounts</h2>
						   <p data-aos="fade-up" style={{fontFamily:"monospace"}}>Checkout what we found for you from</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div  className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
						<div className="discount-block">
							<img src="images/dis1.png" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/>
							<div className="discount-content" data-aos="flip-right">
								<h3>WickedBall</h3>
								<p>Three-Hour WickedBall Private Rental for Up to 30 People; Valid Monday–Thursday</p>
							</div>
							<div className="discount-action purple-bg" data-aos="flip-left">
								<div className="action-content">
									<p><b>Club Croix, Lombard • 20.1 mi</b> <span><b>$</b> 2,400 <b>$1,800</b> 25% OFF</span></p>
								</div>
								<a href="#"><img src="images/right-blue.png"/></a>
							</div>
						</div>
						<div className="view-all-sec">
							<div className="view-tag" >
								<a href="#">View All</a>
							</div>
					   </div>
					</div>
					<div  className="col-12 col-sm-6 col-md-4 col-lg-4">
						<div className="discount-block" >
							<img src="images/dis2.png" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-delay="500" data-aos-duration="1000"/>
							<div className="discount-content"data-aos="flip-left">
								<h3>A Murder Mystery Dinner</h3>
								<p>Three-Hour WickedBall Private Rental for Up to 30 People; Valid Monday–Thursday</p>
							</div>
							<div className="discount-action saff-bg"data-aos="flip-right">
								<div className="action-content">
									<p><b>Club Croix, Lombard • 20.1 mi</b> <span><b>$</b> 2,400 <b>$1,800</b> 25% OFF</span></p>
								</div>
								<a href="#"><img src="images/right-saff.png"/></a>
							</div>
						</div>
					</div>
					<div  className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
						<div className="discount-block">
							<img src="images/dis3.png"data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/>
							<div className="discount-content"data-aos="flip-right">
								<h3>Ultimate Gaming Trucks</h3>
								<p>Three-Hour WickedBall Private Rental for Up to 30 People; Valid Monday–Thursday</p>
							</div>
							<div className="discount-action green-bg" data-aos="flip-left">
								<div className="action-content">
									<p><b>Club Croix, Lombard • 20.1 mi</b> <span><b>$</b> 2,400 <b>$1,800</b> 25% OFF</span></p>
								</div>
								<a href="#"><img src="images/right-green.png"/></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="slider-section blog-section">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12">
						<div  className="myheader-sec">
						   <h2 style={{color:"rgb(208, 47, 207)"}}>Blog & Resource</h2>
						   <p>Here are some beautiful destinations</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12">
						<div className="blog-block">
							<ul>
								<li className="discount-block first" >
	<img src="images/blog1.png" data-aos="zoom-in-right"/>
									<div className="blog-details first">
										<div className="date-sec">
											<img src="images/cal.png"/> Jul 23,2022</div>
										<h3>Visit Philadelphia, Pennsylvani...</h3>
									</div>
								</li>
								<li>
									<ul>
										<li className="discount-block" >
    <img src="images/blog2.png" data-aos="fade-up"/>
											<div className="blog-details">
												<div className="date-sec"><img src="images/cal.png"/> Jul 23,2022</div>
												<h3>Visit Philadelphia, Pennsylvani...</h3>
											</div>
										</li>
										<li className="discount-block" >


      <img src="images/blog3.png" data-aos="fade-left"
                                  />

											<div className="blog-details">
												<div className="date-sec"><img src="images/cal.png"/> Jul 23,2022</div>
												<h3>Visit Philadelphia, Pennsylvani...</h3>
											</div>
										</li>
										<li className="discount-block" >

      <img src="images/blog4.png" data-aos="fade-down"/>

											<div className="blog-details">
												<div className="date-sec"><img src="images/cal.png"/> Jul 23,2022</div>
												<h3>Visit Philadelphia, Pennsylvani...</h3>
											</div>
										</li>
										<li className="discount-block" >

      <img src="images/blog5.png" data-aos="fade-left"
/>
											<div className="blog-details">
												<div className="date-sec"><img src="images/cal.png"/> Jul 23,2022</div>
												<h3>Visit Philadelphia, Pennsylvani...</h3>
											</div>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div className="view-tag">
							<a href="#">View All</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<footer className="footer-section">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-4">
						<div className="footer-logo">
							<img src="images/logo-footer.png"/>
						</div>
					</div>
					<div className="col-12 col-sm-12 col-md-12 col-lg-12">
						<p>We can help you plan the perfect vacation. Our travel website makes it easy to find the ideal trip and book one today! Check out our deals on flights, hotels, cruises, adventure tours, car rentals, tours, and more. We have partnered with more than 700+ airlines, over 500,000+ hotel locations, and thousands of travel sites worldwide. With so much to see and do, you want to ensure you've got the best travel plans. That's why we created our site: to help you find a great vacation package you can't find anywhere else.</p>
					</div>
					<div className="col-12 col-sm-12 col-md-12 col-lg-12">
						<ul>
							<li><a style={{cursor:"pointer"}} onClick={handleAboutShow}>About Us</a></li>
							<li><a style={{cursor:"pointer"}}onClick={handleDMCAShow}>DMCA Policy</a></li>
							<li><a style={{cursor:"pointer"}}onClick={handleConditionShow}>Terms & Conditions</a></li>
							<li><a style={{cursor:"pointer"}}onClick={handlePolicyShow}>Privacy Policy</a></li>
							<li><a style={{cursor:"pointer"}} onClick={handleContactShow}>Contact Us</a></li>
						</ul>
		{/* Modal section starts */}
		    <Modal backdrop="static" show={contactModalshow} onHide={handleContactClose} centered>
			<Modal.Header closeButton>
			</Modal.Header>
        <Modal.Body>
          <Modal.Title  style={{display:"flex",justifyContent:"center"}}><p style={{fontSize:"30px",color:"#d47373"}}>Feel free to contact us</p></Modal.Title>
        </Modal.Body>
        <Modal.Body onClick={()=>{window.open("tel:+911234567890","_self")}}>
		                      <i className="bi bi-telephone-fill"></i> +91 123-456-7890<img style={{width:"300px"}} className="ms-2" src='images/logo.png'/>
		</Modal.Body>
        <Modal.Body onClick={()=>{window.open("mailto:vacations@mysittivacations.com","_self")}}> <i className="bi bi-envelope-fill"></i> vacations@mysittivacations.com</Modal.Body>
        <Modal.Body style={{textAlign:"center"}}>
			<i style={{color:"green"}} className="bi bi-whatsapp mx-4" onClick={()=>{window.open("https://wa.me/+911234567890")}}></i>
			<i style={{color:"#23c5f9"}} className="bi bi-telegram mx-4" onClick={()=>{window.open("https://t.me/mysittivacation")}}></i>
			<i style={{color:"#23c5f9"}} className="bi bi-twitter mx-4" onClick={()=>{window.open("https://t.me/mysittivacation")}}></i>
		</Modal.Body>
            </Modal>
        {/* About us Modal */}
		    <Modal show={aboutModalshow} backdrop="static" onHide={handleAboutClose}>
		<Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body >
          <Modal.Title  style={{display:"flex",justifyContent:"center"}}><p style={{fontSize:"30px",color:"#d47373"}}>About us</p></Modal.Title>
        </Modal.Body>
        <Modal.Body onClick={()=>{window.open("tel:+911234567890","_self")}}> <i className="bi bi-telephone-fill"></i> +91 123-456-789-0</Modal.Body>
        <Modal.Body onClick={()=>{window.open("mailto:vacations@mysittivacations.com","_self")}}> <i className="bi bi-envelope-fill"></i> vacations@mysittivacations.com</Modal.Body>
        <Modal.Body>
			<i style={{color:"#3737ff"}} className="bi bi-facebook mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-twitter mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-instagram mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-youtube mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-pinterest mx-4"></i>
		</Modal.Body>
            </Modal>
        {/* DMCA Policy Modal */}
		    <Modal show={DMCAModalshow} backdrop="static"  onHide={handleDMCAClose}>
		<Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body >
          <Modal.Title  style={{display:"flex",justifyContent:"center"}}><p style={{fontSize:"30px",color:"#d47373"}}>DMCA policy</p></Modal.Title>
        </Modal.Body>
        <Modal.Body>
		Mysittivacations.com(thereinafter referred to as “OUR”, “WE”, or “US”) have adopted this Copyright Policy and DMCA Notification Process (the “Copyright Policy”) in accordance with the <a href="https://www.copyright.gov/legislation/dmca.pdf">Digital Millennium Copyright Act of 1998</a>, including the Online Copyright Infringement Liability Limitation Act (the “DMCA”).
We respect the intellectual property rights of our users and others, and adhere to the provisions of the DMCA. The Copyright Policy applies to the website www.Mysittivacations.com (the “Site”) to address claims of infringement pertaining to copyrighted material owned or controlled by a third party.

COPYRIGHT

Copyright is a form of legal protection given to authors of original works such as literary, dramatic, musical, artistic, graphic, photographic, software and certain other intellectual works. The copyright owner has the exclusive right to reproduce the work, make new works based on the work, distribute copies, and perform or display the work, during the duration of copyright protection, subject to very limited fair use rights of others to use only such amount as necessary to exercise fair use rights. You should assume all third party content is protected by copyright unless you have determined otherwise with the assistance of legal counsel and you should not rely on fair use except pursuant to advice of legal counsel. You can, however, seek a permission or license to use third party copyright protected content and once obtained will have the right to do so.

POLICY

Pursuant to the General Terms and Conditions of the Site each Site user is responsible for ensuring that the materials they upload to the Site do not infringe any third party copyright. Additionally, the General Terms and Conditions prohibit Site users from using the site to infringe the intellectual property rights of any person or entity.

If you are a copyright holder who believes that any of the material(s) on the Site violates your copyright rights, please follow the guidelines and procedures below to provide us with appropriate notice. We will respond to clear written notices alleging infringement that comply with, or substantially comply with, the DMCA and other applicable laws.

Mysitti will remove or disable access to allegedly infringing material from the Site upon receipt of a valid DMCA notice as required by the DMCA and will provide the allegedly infringing party with a copy of the DMCA notice alleging infringement. If the party who posted the allegedly infringing information files a valid counter-notification, the materials will be reposted unless you file a claim for relief as further set forth in the DMCA.

All notices must be provided to our Designated Agent  (e.g.,through U.S. mail, e-mail, or facsimile) as described below. The Company does not accept notices or counter-notifications under the DMCA submitted by telephone or electronically via Company websites or mobile applications. You may wish to consult with legal counsel to assist you with assessing your claim(s) and understanding your rights and liabilities, including, without limitation, your potential liability for filing a false claim.

Mysitti does not act as an arbiter or judge of disputes about intellectual property rights. We do not adjudicate the substance of the copyright claim: we do not declare winners and losers. Your copyright in an item is determined in the real world, by real-world processes including the DMCA. The DMCA process allows users of an online service to resolve copyright disputes using the adjudication systems available in the real world. By disabling access to or removing content, as a prudential matter, Mysitti is not endorsing or validating a claim of infringement.

 INFRINGEMENT POLICY

Pursuant to the General Terms and Conditions, if a user engages in “repeat infringement” we may terminate the user’s registration and Site account without notice, and the user will no longer be permitted access to the Site or the Services. “Repeat infringement” shall be defined as two (2) or more instances, as determined by us in our reasonable discretion, where a user has infringed the copyright rights of another person. In the event a user’s materials are removed due to a DMCA notice and then subsequently restored due to the filing of a DMCA counter-notification, we will treat the underlying DMCA notice as withdrawn. We reserve the right to terminate Site accounts that are the subject of fewer than two (2) instances of infringement of the copyright rights of another person in appropriate circumstances, such as when the user has a history of violating or willfully disregarding the General Terms and Conditions.

DMCA (Digital Millennium Copyright Act) NOTICE PROCESS

The DMCA provides a process for a copyright owner to give notification to an online service provider concerning alleged copyright infringement. When a valid DMCA notification is received, the service provider responds under this process by taking down the offending content. Upon taking down content pursuant to the DMCA, the online service provider will take reasonable steps to contact the owner of the removed content so that a counter-notification may be filed. On receiving a valid counter-notification, the online service provider generally restores the content in question, unless it receives notice from the notification provider that a legal action has been filed seeking a court order to restrain the alleged infringer from engaging in the infringing activity.

FILING A DMCA NOTICE TO REMOVE COPYRIGHTED CONTENT

If you believe that your work has been copied in a way that constitutes copyright infringement, please provide Mysitti with a completed DMCA NOTICE FORM, or a written notice containing the following information:

(1) Your legal name, mailing address, telephone number, and email address (if any);
(2) A description of the copyrighted work that you claim has been infringed, and the name of the owner of the copyrighted work;
(3) A description of where on the Site the material that you claim is infringing the copyright may be found, sufficient for Mysitti to locate the material (e.g., the URL);
(4) A statement that you have a good faith belief that the use of the copyrighted work is not authorized by the copyright owner, its agent, or the law;
(5) A statement by you UNDER PENALTY OF PERJURY that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf;
(6) Your electronic or physical signature.

Completed DMCA Notice Forms may be submitted to our Designated Agent, identified below, via: U.S. Mail; Email; or Facsimile.

Please note that we may disclose any complete DMCA Notices and any communications concerning DMCA notices or other intellectual property complaints with third parties, including the users who have posted the allegedly infringing material.

FILING A DMCA COUNTER-NOTIFICATION TO RESTORE REMOVED CONTENT

If you believe that your material has been removed by mistake or misidentification, please provide Mysitti with a written counter-notification containing all of the following information:

(1) Your legal name, mailing address, telephone number, and email (if any);
(2) A description of the material that was removed and the location on the Site (e.g., the URL) where it previously appeared;
(3) A statement UNDER PENALTY OF PERJURY that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification;
(4) A statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located.
(5) Your electronic or physical signature.

Completed DMCA counter-notifications may be submitted to our Designated Agent, identified below, via: U.S. Mail; Email; or Facsimile.

Please note that Mysitti will send any complete counter-notifications Mysitti receive to the person who submitted the original DMCA notice. That person may elect to file a lawsuit against you for copyright infringement. If we do not receive notice that a lawsuit has been filed within ten (10) business days after we provide notice of a counter-notification, Mysitti will restore the removed materials. Until that time, the materials will remain removed.

WARNING

UNDER SECTION 512(f) OF THE COPYRIGHT ACT, 17 U.S.C. § 512(f), ANY PERSON WHO KNOWINGLY MATERIALLY MISREPRESENTS THAT MATERIAL OR ACTIVITY IS INFRINGING OR WAS REMOVED OR DISABLED BY MISTAKE OR MISIDENTIFICATION MAY BE SUBJECT TO LIABILITY.

If you have questions about the legal requirements of a DMCA notice, please contact an attorney or see Section 512(c)(3) of the U.S. Copyright Act, 17 U.S.C. § 512(c)(3), for more information. If you have questions about the legal requirements of a DMCA counter-notification, please contact an attorney or see Section 512(g)(3) of the U.S. Copyright Act, 17 U.S.C. § 512(g)(3), for more information. For the full text of the DMCA, click here.

DESIGNATED COPYRIGHT AGENT



You can send your notifications and counter-notifications of claimed infringement to Mysittivacations.com‘s Designated Copyright Agent who can be reached as below:



Attention: Copyright Agent

Mysittivacations.com [INSERT ADDRESS]

Email: [INSERT EMAIL ADDRESS]

You acknowledge that if you fail to comply with all of the requirements, your DMCA notification may not be valid.
		</Modal.Body>
        <Modal.Body onClick={()=>{window.open("mailto:vacations@mysittivacations.com","_self")}} className="text-center"> <i className="bi bi-envelope-fill"></i> vacations@mysittivacations.com</Modal.Body>
        <Modal.Body style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
			<i style={{color:"#3737ff"}} className="bi bi-facebook mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-twitter mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-instagram mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-youtube mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-pinterest mx-4"></i>
		</Modal.Body>
            </Modal>
        {/*Terms and Conditions Modal */}
		    <Modal show={conditionModalshow} backdrop="static"  onHide={handleConditionClose}>
		<Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body >
          <Modal.Title  style={{display:"flex",justifyContent:"center"}}><p style={{fontSize:"30px",color:"#d47373"}}>Terms and conditions</p></Modal.Title>
        </Modal.Body>
        <Modal.Body onClick={()=>{window.open("tel:+911234567890","_self")}}> <i className="bi bi-telephone-fill"></i> +91 123-456-789-0</Modal.Body>
        <Modal.Body onClick={()=>{window.open("mailto:vacations@mysittivacations.com","_self")}}> <i className="bi bi-envelope-fill"></i> vacations@mysittivacations.com</Modal.Body>
        <Modal.Body>
			<i style={{color:"#3737ff"}} className="bi bi-facebook mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-twitter mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-instagram mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-youtube mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-pinterest mx-4"></i>
		</Modal.Body>
            </Modal>
        {/* Privacy Policy Modal */}
		    <Modal show={policyModalshow} backdrop="static"  onHide={handlePolicyClose}>
		<Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body >
          <Modal.Title  style={{display:"flex",justifyContent:"center"}}><p style={{fontSize:"30px",color:"#d47373"}}>Privacy Policy</p></Modal.Title>
        </Modal.Body>
        <Modal.Body onClick={()=>{window.open("tel:+911234567890","_self")}}> <i className="bi bi-telephone-fill"></i> +91 123-456-789-0</Modal.Body>
        <Modal.Body onClick={()=>{window.open("mailto:vacations@mysittivacations.com","_self")}}> <i className="bi bi-envelope-fill"></i> vacations@mysittivacations.com</Modal.Body>
        <Modal.Body>
			<i style={{color:"#3737ff"}} className="bi bi-facebook mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-twitter mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-instagram mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-youtube mx-4"></i>
			<i style={{color:"#3737ff"}} className="bi bi-pinterest mx-4"></i>
		</Modal.Body>
            </Modal>
	    {/* Modal section ends */}
						<div className="mailer-sec">
							<img src="images/mail.png"/>
							<a onClick={()=>{window.open("mailto:vacations@mysittivacations.com","_self")}}>vacations@mysittivacations.com</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<div className="copyright-section">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-4">
						<a href="#">© 2022 mysittivacations.com</a>
					</div>
					<div className="col-12 col-sm-12 col-md-12 col-lg-8">
					</div>
				</div>
			</div>
		</div>
    </div>
</div>

  )
}

export default Home