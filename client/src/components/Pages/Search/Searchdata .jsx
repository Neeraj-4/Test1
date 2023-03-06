import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
const Component = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    height: auto;
`
const Heading = styled(Typography)`
display: flex;
flex-wrap: wrap;
margin-left: 20px;
font-weight: 600;
letter-spacing: .14ch;
word-spacing: .3ch;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
margin-bottom: 10px;
`
const Wrap = styled(Box)`
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: flex-start;
align-items: center;
padding: 10px ;
`
const Container = styled(Box)`
    padding: 5px 10px;
    text-align: start;
    margin-bottom: 5px;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
   cursor: pointer;
`
const Text = styled(Typography)`
font-size: 12px;
font-weight: 600;

`
const Items = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
`
const Wrapper = styled(Box)`
padding: 10px;
display: flex;
gap: 5px;
`
const TextWrap = styled(Box)`
margin-top: 5px;
display: flex;
flex-direction: column;
white-space: nowrap;
gap: 5px;
text-overflow: ellipsis;
overflow: hidden;
max-width: 120px;
`
const Error = styled(Box)`
width: 100%;
height: 20vh;
margin-top: 10px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
text-align: center;
justify-content: center;
align-items: center;
gap: 5px;
`
const ErrorMessage = styled(Typography)`
font-size: 18px;
`

const Searchdata = ({ products,search,AllArtist,handleData }) => {
 /*  const Mix = search.concat(AllArtist) */
  const [error,setError] = useState('Search Not Found');
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('query');
  const filteredData = products.filter((song) => song.songName.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredArtist = AllArtist.filter((Artist) => Artist.id.toLowerCase().includes(searchTerm.toLowerCase()));
 
  return (
    <Component>
        <Heading variant='h6'>Search Result for "{searchTerm}"</Heading>
        <Wrap>
          {filteredData.length===0 ?
          <Error>
          <Typography variant='h5'>{error}</Typography>
           <ErrorMessage variant='p'>If you want "{searchTerm}" song you can send us a wish by clicking on wish button </ErrorMessage>
           </Error>
          :
            filteredData.map((song,index) => {
              return (
                <Container key={song.id} onClick={() => handleData(song,index,filteredData)}>
                  <img src={song.url} alt={song.url} style={{ maxWidth: 160, height: 160 }} />
                  <Items>
                    <TextWrap>
                      <Text variant='p'>{song.songName}</Text>
                      <Text variant='p' style={{ fontSize: 10 }}>{song.artist}</Text>
                    </TextWrap>
                    <Wrapper>
                      <FileDownloadOutlinedIcon style={{ fontSize: 24 }} />
                    </Wrapper>
                  </Items>
                </Container>
              )
            })
          }
        </Wrap>
       
      <Wrap>
       {filteredArtist.map((artist)=>(
          <Link to={`/artist/${artist.id}`} key={artist.id}>
          <img src={artist.url} alt={artist.url} style={{ maxWidth: 160, height: 160 }} />
          <Items>
            <TextWrap>
              <Text variant='p'>{artist.id}</Text>
            </TextWrap>
            <Wrapper>
              <FileDownloadOutlinedIcon style={{ fontSize: 24 }} />
            </Wrapper>
          </Items>
        </Link>
       ))}
      </Wrap>
    </Component>
  )
}

export default Searchdata;
