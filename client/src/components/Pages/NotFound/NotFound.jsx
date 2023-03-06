import React from 'react'
import {Box,Typography,styled} from '@mui/material'
const Component = styled(Box)`
  margin-top: 30px;
height: 25vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
&>img{
  width: 250px;
  background: transparent;
}
`

const NotFound = () => {
  return (
    <Component>
      <img src="images/404error.png" alt="error"/>
      <Typography variant="h4">404 Error</Typography>
      <Typography variant="h5">Page Not Found</Typography>
    </Component>
  )
}

export default NotFound
