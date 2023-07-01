import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import {useNavigate } from "react-router-dom";
import {allstyles} from '../style/MuiStyle'

export default function MenuBar() {
  const MuiStyle = allstyles();
    let navigate = useNavigate();
 
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar className={MuiStyle.classes.centerFlexBox} >
      <Button  onClick={() => navigate("/submitform")} color="inherit">SubmitForm</Button>
        <Button onClick={() => navigate("/details")}  color="inherit">Details</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
