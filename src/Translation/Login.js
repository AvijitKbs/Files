import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react'
import { Container } from 'react-bootstrap';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
function Login() {

    const [details, setDetails] = useState({
        name:"",
        password:"",
        login:false,
        token:"",
    });

    // const handleLogin = async () => {
    //   const res = await axios.post('http://localhost:2050/login', { username, password });
    //   localStorage.setItem('token', res.data.accessToken);
    // //   axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
    //   const decodedToken = jwtDecode(res.data.accessToken);
    //   console.log("token",decodedToken);
    // };
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:2050/login', {
          details
        })
        .then(function (response) {
          console.log(response);
          localStorage.setItem("token",response.data.accessToken)
          localStorage.setItem("name",response.data.userName)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  return (
    <>
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>UserId</Form.Label>
        <Form.Control name="username" placeholder="Enter username" onChange={(e) => setDetails({...details,name:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" onChange={(e) => setDetails({...details,password:e.target.value})}/>
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </Container>

    </>
  );
}

export default Login;