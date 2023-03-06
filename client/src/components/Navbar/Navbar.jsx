import { AppBar, Toolbar,styled,Box,Typography} from '@mui/material'
import React from 'react'
import Searchbar from './Searchbar'
import CustomLinks from './CustomLinks'
import Logo from './logo.png'
import { Link } from 'react-router-dom'
const Stylenavbar = styled(AppBar)`
    height: 55px;
    background:rgb(73, 162, 221);
    box-shadow: 0px 15px 10px -15px rgb(0 0 0 / 20%);
`
const TaskBar = styled(Toolbar)`
min-height:55px;
display:flex;
gap:5px;
justify-content:space-between;
padding:0 10px;
align-items:center;
`
const Subheading = styled(Typography)`
 font-size: 20px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 display: flex;
 color:black;
 `
 const CustomWrapper = styled(Box)`
 width:auto;
display: flex;
 
 `
const Navbar = ({isMobile}) => {
  
  return (
    <>
   <Stylenavbar>
    <TaskBar>
    <Link to='/' style={{display:"flex",gap:5,textDecoration:"none"}}>
    <img src={Logo} alt="" style={{ width: 30, marginTop: -3, borderRadius:50}} />
          <Subheading variant='h5'>Muc<span style={{fontWeight:800}}>ZI</span></Subheading>
        </Link>
    <CustomWrapper>
    
       <Searchbar />
      <CustomLinks isMobile={isMobile}/>
    </CustomWrapper>
    </TaskBar>
   </Stylenavbar>
   
   </>
  )
}

export default Navbar
