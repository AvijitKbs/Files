import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react';
import Resizer from "react-image-file-resizer";
const Upload = () => {
    let UploadedImage=useRef()
    const [image, setImage] = useState("")
    const [facebookImage,setFacebookImage]=useState("")
    const [twitterImage,setTwitterImage]=useState("")
    const [instagramImage,setInstagramImage]=useState("")
    const [linkedinImage,setLinkedinImage]=useState("")
    const [images,setImages]=useState([])

    const handleImageUpload=()=>{
        let Image=UploadedImage.current.files[0]
        // console.log("Image",Image)
         let reader=new FileReader()
         reader.readAsDataURL(Image)
         reader.onloadend=function(){
             setImage(reader.result)
         }
        Resizer.imageFileResizer(
            Image,
            1200,
            628,
            "JPEG",
            100,
            0,
            (uri) => {
            //   console.log(uri);
              setFacebookImage(uri);
            },
            "base64",
            200,
            200
          );
          Resizer.imageFileResizer(
            Image,
            900,
            450,
            "JPEG",
            100,
            0,
            (uri) => {
            //   console.log(uri);
              setTwitterImage(uri);
            },
            "base64",
            200,
            200
          );
          Resizer.imageFileResizer(
            Image,
            1080,
            1080,
            "JPEG",
            100,
            0,
            (uri) => {
            //   console.log(uri);
              setInstagramImage(uri);
            },
            "base64",
            200,
            200
          );
          Resizer.imageFileResizer(
            Image,
            1350,
            440,
            "JPEG",
            100,
            0,
            (uri) => {
            //   console.log(uri);
              setLinkedinImage(uri);
            },
            "base64",
            200,
            200
          );
          let Images={
            "Name":UploadedImage.current.value,
            "Facebook_image":facebookImage,
            "Twitter_image":twitterImage,
            "Instagram_image":instagramImage,
            "Linkedin_image":linkedinImage
          }
          axios.post("http://localhost:5005/sendData",Images)
          .then((response)=>{
            console.log(response.data)
          })
          axios.get("http://localhost:5005/getData")
          .then((res)=>{
            console.log("images",res.data)
            setImages(res.data)
            // console.log(res.data)
          })
        // console.log("Images",facebookImage);
     }
useEffect(() => {


    })
  return (
<div>
  <div className='container m-4'>
  <b>Upload photo : </b>
    <input type="file" ref={UploadedImage} />
    <button className='btn btn-warning m-2' onClick={handleImageUpload}>Send</button>
    <figure>
  <img style={{height:"100vh",width:"100vw"}}src={image?image:"https://t4.ftcdn.net/jpg/01/43/23/83/360_F_143238306_lh0ap42wgot36y44WybfQpvsJB5A1CHc.jpg"}/>
  <figcaption>Original Image</figcaption>
  </figure>
  </div>
  {
    images.length<1?
    "":    <>
          <div>
         <figure >
          <img  src={images[images.length-1].Facebook_image}/>
          <figcaption className='text-center text-success'>Facebook Image</figcaption>
         </figure>
          <hr/>
         <figure>
           <img src={images[images.length-1].Twitter_image}/>
           <figcaption className='text-center text-success'>Twitter Image</figcaption>
         </figure>
          <hr/>
         <figure >
          <img src={images[images.length-1].Instagram_image}/>
          <figcaption className=' text-center text-success'>Instagram Image</figcaption>
         </figure>
          <hr/>
         <figure >
          <img src={images[images.length-1].Linkedin_image}/>
          <figcaption className='text-center text-success'>LinkedIn Image</figcaption>
         </figure>
  </div>
  </>
  }



</div>
  )
}

export default Upload