import React from "react";
import "./RegistrationForm.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from'axios';

const RegistrationForm = (props) => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodgrp, setBloodgrp] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [count,setCount] =useState(0);

  useEffect(()=>{
    var handle=setInterval(fetchData,10000);    

    return ()=>{
      clearInterval(handle);
    }
  });

  const fetchData = async () =>{
    const request = await axios.get('http://127.0.0.1:8000/request/requests/');
console.log(request.data);
}
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(dob);
    console.log(state);

    var data = {
      name: name,
      email: email,
      dob: dob,
      phone_no: phone,
      blood_group: bloodgrp,
      state: state,
      city: city,
      address: address,
    };

    if (props.type==='Donor')
   {
    axios.post("http://127.0.0.1:8000/donor/register/",data,{headers: {
        'Content-Type' : 'application/json' 
   }})
   .then((res) => {
       console.log("RESPONSE RECEIVED: ", (res.data));
       
     })
     .catch((err) => {
       console.log("AXIOS ERROR: ", err);
     })

    }
    else{
        axios.post("http://127.0.0.1:8000/recipient/register/",data,{headers: {
        'Content-Type' : 'application/json' 
   }})
   .then((res) => {
       console.log("RESPONSE RECEIVED: ", (res.data));
       
     })
     .catch((err) => {
       console.log("AXIOS ERROR: ", err);
     })
    }
    setName("");
    setEmail("");
    setDob("");
    setPhone("");
    setState("");
    setCity("");
    setAddress("");
  };

  return (
    <>
      <div className="center">
        <h2 className="heading">Register as {props.type}</h2>
        <form className="form" method="POST" onSubmit={handleSubmit}>
          <div className="input">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="label">
            <label>Email</label>
            <label>Date-of-Birth</label>
          </div>
          <div className="input-side">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="date" onChange={(e) => setDob(e.target.value)} />
          </div>
          <div className="label">
            <label>Phone</label>
            <label for="bloodgrp">Blood-group</label>
          </div>
          <div className="input-side">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <select
              name="bloodgrp"
              onChange={(e) => setBloodgrp(e.target.value)}
            >
              <option value="none" selected disabled hidden>
                Select blood group
              </option>
              <option value="O+ve">O+ve</option>
              <option value="O-ve">O-ve</option>
              <option value="A+ve">A+ve</option>
              <option value="A-ve">A-ve</option>
              <option value="B+ve">B+ve</option>
              <option value="B-ve">B-ve</option>
              <option value="AB+ve">AB+ve</option>
              <option value="AB-ve">AB-ve</option>
            </select>
          </div>
          <div className="label">
            <label>State</label>
            <label>City</label>
          </div>
          <div className="input-side">
            <select
              name="state"
              id="state"
              class="form-control"
              onChange={(e) => setState(e.target.value)}
            >
              <option value="none" selected disabled hidden>
                Select State
              </option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="submit">
            <button>Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
