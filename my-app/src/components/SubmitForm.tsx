import { Box, Typography, TextField, Button, FormControl  } from '@mui/material'
import React, { useState } from 'react'
 import {allstyles} from '../style/MuiStyle'
import Users from './Users';
 import { addFormAsync, SubmitFormType } from '../redux/FormSlicse';
import { useAppDispatch } from '../redux/hooks';

export default function SubmitForm() {
  //External Mui
  const MuiStyle = allstyles();

 

  const [name, setName] = useState<string>();
  const [surname, setSurname] = useState<string>();
  const [address, setAdress] = useState<string>();
  const [city, setCity] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phonenNumber, setPhoneNumber] = useState<number | string | undefined>();

  const newUser:SubmitFormType = {
    // id:0,
    name:'',
    surname:'',
    address:'',
    city:'',
    country:'',
    email:'',
    phoneNumber:0
  }

  const dispatch = useAppDispatch();

  const onsubmit=(e:any)=>{
    // newUser.id = Date.now();
    newUser.name = name;
    newUser.surname = surname;
    newUser.address=address;
    newUser.city = city;
    newUser.country = country;
    newUser.email = email;
    newUser.phoneNumber = phonenNumber;

    dispatch(addFormAsync(newUser));
    
    e.preventDefault();
  }
 
 
  return (
    <>
   <form onSubmit={(e)=>onsubmit(e)} >
    <Box    sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}> 
    <TextField type='text' id="outlined-basic" label="name" variant="outlined" className={MuiStyle.classes.submitFormElements} onChange={(e)=>setName(e.target.value)} />
    <TextField type='text' id="outlined-basic" label="surname" variant="outlined" className={MuiStyle.classes.submitFormElements} onChange={(e)=>setSurname(e.target.value)} />
    <TextField type='text' id="outlined-basic" label="address" variant="outlined" className={MuiStyle.classes.submitFormElements} onChange={(e)=>setAdress(e.target.value)} />
    <TextField type='text' id="outlined-basic" label="city" variant="outlined" className={MuiStyle.classes.submitFormElements} onChange={(e)=>setCity(e.target.value)} />
    <TextField type='text' id="outlined-basic" label="country" variant="outlined" className={MuiStyle.classes.submitFormElements} onChange={(e)=>setCountry(e.target.value)} />
    <TextField type='text' id="outlined-basic" label="email" variant="outlined" className={MuiStyle.classes.submitFormElements} onChange={(e)=>setEmail(e.target.value)} />
    <TextField type='text' id="outlined-basic" label="phoneNumber" variant="outlined" className={MuiStyle.classes.submitFormElements} onChange={(e)=>setPhoneNumber(e.target.value)} />
    {/* <TextField type='password' id="outlined-basic" label="PASSWORD" variant="outlined" className={MuiStyle.classes.submitFormElements} onChange={(e)=>setPassword(e.target.value)} />
    <TextField type='number' id="outlined-basic" label="AGE" variant="outlined"  className={MuiStyle.classes.submitFormElements} onChange={(e)=>setAge(e.target.value)} /> */}
    <FormControl>
  {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
   
</FormControl>
<Button type='submit'variant="contained">Create</Button>
    </Box>
    </form>

    <Users    />
    </>
  )
}
