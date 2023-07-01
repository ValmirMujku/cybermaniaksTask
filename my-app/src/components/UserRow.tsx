import { TableRow, TableCell, Box, TextField, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { deletFormAsync, forms, getFormsAsync,modifyFormAsync,SubmitFormType } from '../redux/FormSlicse';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
 

export default function UserRow({id,name,surname,address,city,country,email,phoneNumber}:SubmitFormType) {

    const[openDiv, setOpenDiv] = useState<boolean>(true);

    const dispatch = useAppDispatch();

    const deleteUser=(id:number | undefined)=>{
      if(id){
        dispatch(deletFormAsync(id));
    
      }
    }

    
    const[name1,setName1] = useState<string>();
    const[surname1,setSurname1] = useState<string>();
    const[address1,setAdress1] = useState<string>();
    const[city1,setCity1] = useState<string>();
    const[country1,setCountry1] = useState<string>();
    const[email1,setEmail] = useState<string>();
    const[phonenNumber1,setPhoneNumber1] = useState<string | number | undefined>();

    const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        const modifiedUser:SubmitFormType={id:id,name:name1, surname:surname1, address:address1, city:city1, country:country1, email:email1, phoneNumber:phonenNumber1};
        dispatch(modifyFormAsync(modifiedUser))
    }

  return (
    <><TableRow
    key={id}
  >
    <TableCell>{name}</TableCell>
    <TableCell>{surname}</TableCell>
    <TableCell>{address}</TableCell>
    <TableCell>{city}</TableCell>
    <TableCell>{country}</TableCell>
    <TableCell>{email}</TableCell>
    <TableCell>{phoneNumber}</TableCell>
   
    <TableCell><Button onClick={() => deleteUser(id)} sx={{ color: 'black', backgroundColor: 'red' }}>DELETE</Button></TableCell>
    <TableCell><Button onClick={() => setOpenDiv(!openDiv)} sx={{ color: 'black', backgroundColor: 'green' }}>EDIT</Button></TableCell>
  </TableRow>
    <div hidden={openDiv}>
        <form onSubmit={(e)=>onSubmit(e)}>
       <TableCell><TextField type='text' id="outlined-basic" label="name" variant="outlined" onChange={(e)=>setName1(e.target.value)}  /></TableCell>
       <TableCell> <TextField type='text' id="outlined-basic" label="surname" variant="outlined" onChange={(e)=>setSurname1(e.target.value)}  /></TableCell>
       <TableCell> <TextField type='text' id="outlined-basic" label="address" variant="outlined" onChange={(e)=>setAdress1(e.target.value)}  /></TableCell>
       <TableCell> <TextField type='text' id="outlined-basic" label="city" variant="outlined" onChange={(e)=>setCity1(e.target.value)}  /></TableCell>
       <TableCell> <TextField type='text' id="outlined-basic" label="country" variant="outlined" onChange={(e)=>setCountry1(e.target.value)}  /></TableCell>
       <TableCell> <TextField type='text' id="outlined-basic" label="email" variant="outlined" onChange={(e)=>setEmail(e.target.value)}  /></TableCell>
       <TableCell> <TextField type='text' id="outlined-basic" label="phoneNumber" variant="outlined" onChange={(e)=>setPhoneNumber1(e.target.value)}  /></TableCell>
       <TableCell><Button type='submit' onClick={() => setOpenDiv(!openDiv)} sx={{ color: 'black', backgroundColor: 'green' }}>SAVE</Button></TableCell>
       </form>
    </div>
  <TableRow>

    </TableRow></>
  )
}
