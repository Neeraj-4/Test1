import { ButtonBase } from '@mui/material'
import { Box, styled } from '@mui/system'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import TryOutlinedIcon from '@mui/icons-material/TryOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import Wish from '../Pages/Wish/Wish';
const WrapperLinks = styled(Box)`
display: flex;
gap: 25px;
/* display: flex;
justify-content:center;
align-items: center;
gap: 25px; */

`
const MobileView = styled(Box)`
  width: 100%;
  height: 60px;
  top:auto;
  bottom:0;
  left: auto;
  right: 0;
  display: flex;
  position: fixed;
  gap: 40px;
  z-index: 1;
  background-color: #1b1717;
  opacity:.9;
justify-content: space-around;
`
const Buttons = styled(ButtonBase)`
color: inherit;
`

const Button = styled(ButtonBase)`
 display: flex;
  gap:5px;
text-align: center;
color: black;

font-weight: 600;
border-radius: 20px;
padding: 0 15px; 
`
const NavLinks = styled(Link)`
color: white;
display: flex;
gap: 20px;
justify-content: center;
align-items: center;
`
/* const TabLinks = styled(Link)`
color: white;
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;
align-items: center;
` */
const NavLink = styled(Link)`
display: flex;
gap:5px;
font-weight: 600;
justify-content: center;
align-items: center;
text-decoration: none;
color: black;
margin-top: -4px;
padding: 0 20px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

&:hover{
    background-color: #4875b8;
    color: #fff;
    border-radius: 50px; 
  }

`
const CustomLinks = ({isMobile}) => {
  const [open, setOpen] = useState(false);
  const [isDark, setDark] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");

  //Wish Form//
  const openDialog = () => {
    setOpen(true);
  }
  //Dark Mode//
  const darkMode = () => {
    setDark(!isDark);
    if (theme === 'light') {
      setTheme('dark');

    } else {
      setTheme('light');
    }
  }
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <>
    {isMobile  ?
      <MobileView>
        <NavLinks to="/"><HomeOutlinedIcon style={{ fontSize: 30 }} /></NavLinks >
        <NavLinks to="/Category"><CategoryOutlinedIcon style={{ fontSize: 30 }} /></NavLinks>
        <Buttons onClick={openDialog}><TryOutlinedIcon style={{ fontSize: 30 }} /></Buttons>
        <Buttons onClick={darkMode} style={{ fontSize: 30 }}>
          {isDark ? <Brightness4OutlinedIcon /> : <Brightness4Icon />}
        </Buttons>
        <Wish open={open} setOpen={setOpen} isMobile={isMobile} />
      </MobileView>
      :
      <WrapperLinks>
        <NavLink to="/"><HomeOutlinedIcon style={{ fontSize: 20 }} />Home</NavLink >
        <NavLink to="/Category"><CategoryOutlinedIcon style={{ fontSize: 20 }} />Category</NavLink>
        <Button onClick={openDialog}><TryOutlinedIcon style={{ fontSize: 20 }} />Wish</Button>
        <Button onClick={darkMode}>
          {isDark ? <Brightness4OutlinedIcon /> : <Brightness4Icon />}
        </Button>
        <Wish open={open} setOpen={setOpen} />
      </WrapperLinks>
    }
    </>
  )
}

export default CustomLinks
