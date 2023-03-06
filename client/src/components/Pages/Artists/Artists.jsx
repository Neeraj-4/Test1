import React from 'react'
import { Box,Typography,styled } from '@mui/material'
import { Link } from 'react-router-dom'
const Heading = styled(Typography)`
margin-left: 10px;
letter-spacing:.1cm;
font-weight: 600;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
const Wrap = styled(Box)`
overflow-y: hidden;
overflow-x: auto;
display: flex;
gap: 10px;
flex-wrap: nowrap;
justify-content:flex-start;
align-items: center;
padding: 10px;
margin-bottom: 20px;
`
const Container = styled(Box)`
flex-grow: inherit;
text-align: center;
cursor: pointer;
display: flex;
flex-direction: column;
flex-wrap: wrap;
gap:5px;
align-items: center;
&>img{
border-radius: 100px;
box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
}
`
const Text = styled(Typography)`
width: 110px;
font-size: 16px;
align-items: center;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
box-shadow: 0px 15px 10px -15px rgb(0 0 0 / 20%);

`

const Artists = ({AllArtist}) => {
  return (
    <>
    <Heading variant='h5'> Top Artists</Heading>
    <Wrap>
    {
        AllArtist.map((artist) => {
            return (
                <Link to={`/artist/${artist.id}`} style={{ textDecoration:'none',color:'inherit'}}key={artist.id}>
                    <Container >
                        <img src={artist.url} alt="connot load" style={{ width: 70 }} />
                        <Text>{artist.id}</Text>
                    </Container>
                </Link>

            )
        })
    }
</Wrap>
</>
  )
}

export default Artists
