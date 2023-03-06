import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { categoryData } from '../../../Constant/Data'
import { Link } from 'react-router-dom'

const Component = styled(Box)`
   width: 100%;
   overflow: hidden;
`
const Heading = styled(Typography)`
  margin-top: 20px;
  text-align: center;
`
const Wrap = styled(Box)`
margin-top: 20px;
display: flex;
flex-wrap: wrap;
gap: 40px;
justify-content: center;
align-items: center;
line-height: 0;

`
const WrapSD = styled(Box)`
margin-top: 20px;
display: flex;
flex-wrap: wrap;
gap: 17px;
padding: 0 5px;
line-height: 0;
justify-content: center;
   align-items: center;
`
const Container = styled(Box)`
   line-height: 0;
   display: flex;
   flex-wrap: wrap;
`
const Container_Fluid= styled(Box)`
  line-height: 0;
   display: flex;
   flex-wrap: wrap;
`
const Text = styled(Typography)`
position: relative;
top:-100px;
font-size: 20px;
color: #fff;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
text-transform: capitalize;
padding: 0 10px;
overflow: hidden;
`

const Category = ({ isMobile }) => {

  return (
    <Component>
      <Heading variant='h5'>Category</Heading>
      {isMobile ?
        (
          <WrapSD>
            {
              categoryData.map((banners) => {
               /*  const keys = Math.random().toString(36).substring(2, 9);*/
                 return (
                  <Link to={banners.to}key={banners.id} style={{textDecoration:"none"}}>
                  <Container>
                    <Box>
                      <img src={banners.color} alt="connot load" style={{ width: 180, height: 100, borderRadius: 10 }} />
                      <Box>
                        <Text>{banners.text}</Text>
                      </Box>
                    </Box>
                  </Container>
                  </Link>
                )
              })
            }
          </WrapSD>)
        :
        (
          <Wrap>
            {categoryData.map((banners) => (
                  <Link to={banners.to}key={banners.id} style={{textDecoration:"none"}}>
              <Container_Fluid>
                <Box>
                  <img src={banners.color} alt="connot load" style={{ width: 180, height: 100, borderRadius: 10 }} />
                  <Box>
                    <Text>{banners.text}</Text>
                  </Box>
                </Box>
              </Container_Fluid>
              </Link>
          ))}
    </Wrap>

  )
}

</Component >
  )
}

export default Category
