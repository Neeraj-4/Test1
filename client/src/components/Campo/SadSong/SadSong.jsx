import { Box, Typography, styled } from '@mui/material'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import {Link} from 'react-router-dom'

const Container=styled(Box)`
width: 100%;
height: 30vh;
`
const Wrap = styled(Box)`
margin-left: 20px;
&>div::-webkit-scrollbar{
    overflow: hidden;
}
`
const Wrapper= styled(Box)`
overflow-x: auto;
overflow-y: hidden;
white-space: nowrap;
display: flex;
gap: 20px;
`
const Heading = styled(Typography)`
font-weight: 600;
letter-spacing:.1cm;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
margin-bottom: 10px;

`
const Component = styled(Box)`
display: flex;
align-items: center;
`
const ComponentWrapper= styled(Link)`
 display: flex;
 flex-direction: column;
 color: inherit;
 text-decoration: none;
`
const TextWrapper = styled(Box)`
display: flex;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
max-width: 120px;
`
const Text = styled(Typography)`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: 600;
font-size: 14px;
`

const DownloadWrapper = styled(Box)`
position: relative;
top: 80px;
right: 20px;
`
const ContainerWrapper = styled(Box)`

`

const SadSong = ({title,AllAlbums}) => {
    const HindiAlbums = AllAlbums.filter(album => album.id === 'Hindi');
  
    return (
        <>
      
        <Container>            
         {HindiAlbums.map((hindialbums) => (
                <Wrap key={hindialbums.id} >
                    <Heading variant='h5'>{title}</Heading>
                    <Wrapper> 
                        {hindialbums.albums.map((albums) => (
                            <Component key={albums.id} >
                                <ComponentWrapper to={`/playlist/${albums.id}`}>
                                    <img src={albums.albumUrl} alt={albums.albumName} style={{maxWidth:160 ,height:160,objectFit:"contain"}}  />
                                    <TextWrapper >
                                        <Text variant='p'>{albums.id}</Text>
                                    </TextWrapper>
                                </ComponentWrapper>
                              {/*   <DownloadWrapper>            
                                <FileDownloadOutlinedIcon />
                                </DownloadWrapper> */}
                            </Component>

                        ))}
                    </Wrapper>
                </Wrap>
            ))}
        </Container>
        
   
        </>

    )
}

export default SadSong
