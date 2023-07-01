import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
 
import { forms, getFormsAsync,deletFormAsync, SubmitFormType } from '../redux/FormSlicse';
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import UserRow from './UserRow';
 

export default function Users( ) {



  const allUsers = useAppSelector(forms);

  const dispatch = useAppDispatch();

  useEffect(()=>{
      dispatch(getFormsAsync());
  },[dispatch])

  return (
     <>
  
  <TableContainer component={Paper} sx={{mt:5}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >name</TableCell>
            <TableCell >surname</TableCell>
            <TableCell >address</TableCell>
            <TableCell >city</TableCell>
            <TableCell >country</TableCell>
            <TableCell >email</TableCell>
            <TableCell >phoneNumber</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers && allUsers.map((row) => (
            <UserRow {...row}/>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
    
     </>
  )
}
