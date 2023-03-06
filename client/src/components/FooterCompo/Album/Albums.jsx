import React from 'react'
import { useParams } from 'react-router-dom';
import { Box, Typography,styled } from '@mui/material';
import { Link } from 'react-router-dom';
const ContainerWrapper = styled(Box)`
margin-top: 20px;

`
const Component = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    height: 50%;
    &>div::-webkit-scrollbar{
        overflow: hidden;
    }
`
const Heading = styled(Typography)`
  margin-left: 20px;
font-weight: 600;
letter-spacing:.1cm;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
box-shadow: 15px 0px 10px -15px rgb(0 0 0 / 20%);
`
const Wrap = styled(Box)`
overflow-x:auto;
overflow-y: hidden;
white-space: nowrap;
display: flex;
gap: 10px;
justify-content: flex-start;
align-items: center;
padding: 10px;

`
const Container = styled(Box)`
padding: 5px 10px;
text-align: start;
margin-bottom: 5px;
//box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 25%), 0px 4px 5px 0px rgb(0 0 0 / 20%), 0px 1px 10px 0px rgb(0 0 0 / 16%);
&>img{
  max-width: 160px;
  height: 160px;
}
`
const Caption = styled(Box)`
min-width: 120px;
display: flex;
flex-direction: column;
gap: 10px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
padding: 5px 0;

`
const Text = styled(Typography)`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: 600;
white-space: wrap;

`
export const Album = ({ AllAlbums}) => {
  const { id } = useParams();
  const filterAlbums = AllAlbums.filter(albumCategory => albumCategory.id === id); 
  return (
    <ContainerWrapper>
      <Heading variant='h5'>{id} Album Songs</Heading>
      {filterAlbums.map((albumType) => (
        <Component key={albumType.id}>
          <Wrap>
            {albumType.albums.map((album) => (
              <Link to={`/playlist/${album.id}`} style={{textDecoration:"none",color:"inherit"}} key={album.id}>
                <Container>
                <img src={album.albumUrl} alt={album.albumName} style={{width:160,height:160}} />
                <Caption>
                  <Text variant='p'>{album.id}</Text>
                </Caption>
                </Container>
              </Link>
            ))}
          </Wrap>
        </Component>
      ))}
      </ContainerWrapper>
    
  )
}

