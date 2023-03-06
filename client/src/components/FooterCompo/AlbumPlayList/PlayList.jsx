import {useEffect, useState } from "react"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import LyricsIcon from '@mui/icons-material/Lyrics';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { useParams,useNavigate } from "react-router-dom";
import { Box, Typography,styled } from '@mui/material';
const ContainerWrapper = styled(Box)`

`
const Component = styled(Box)`
  width: 100%;
  overflow: hidden;
`
const Wrap = styled(Box)`
  &>ul{
    margin-top: 10px;
    padding: 5px 10px;
    display:flex;
    flex-direction:column;
    gap:20px;
    list-style-type:none;
  }
`
const Banner = styled(Box)`
display: flex;
&>img{
  margin-top: 5px;
  width: 100%;
 max-height:250px;
object-fit: contain;
}
`
const ButtonBack = styled(ArrowBackIosNewIcon)`
position: absolute;
z-index: 4;
font-weight: bolder;
margin-top: 15px;
margin-left: 10px;
background: gray;
padding: 3px;
border-radius: 50px;
`
const BannerWrapper = styled(Box)`
position: absolute;
top: 240px;
bottom: auto;
display: flex;
gap: 25px;
justify-content: space-between;
align-items: center;
padding: 0 10px;
`
const ArtistName = styled(Typography)`
letter-spacing:.4ch;
padding: 3px 10px;
border-radius: 50px;
background-color: gray;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const List = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`
const PlayAll = styled(PlayCircleIcon)`
color:aqua;
font-size:50px;
`
const SubHeading = styled(Box)`
display: flex;
justify-content: space-between;
padding: 0 12px;
`
const TextWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`
const Text = styled(Typography)`
font-weight: 800;
text-transform: capitalize;
`

const PlayList = ({AllAlbums ,handleData}) => {
 const [total,setTotal]=useState(null);
  const {id}= useParams()
  const albums = AllAlbums.flatMap(album => album.albums);
  const Album = albums.filter(album=>album.id===id);
 const navigate = useNavigate();

  useEffect(() => {
    if (Album.length > 0) {
      setTotal(Album[0].playlist.length);
    }
  }, [Album]);
  return (
    <>
     <ContainerWrapper>
     <Component>
          {Album.map(album => (
            <Wrap key={album.id}>
              <Banner>
                <ButtonBack onClick={()=>navigate(-1)}/>
                <img src={album.albumUrl} alt={album.albumName} />
              </Banner>
              <Box>
                <BannerWrapper>
                  <ArtistName variant="h5">{album.id}</ArtistName>
                  <PlayAll onClick={()=>handleData(Album)}/>
                </BannerWrapper>
              </Box>
              <ul>
                <Typography variant="h6"fontWeight="bold">Songs({total})</Typography>
                {album.playlist.map((song,index) => (
                  <li key={song.id}>
                    <List>
                      <Box style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:10}} onClick={()=>handleData(song,index,album.playlist)}>
                    <Typography variant='h5'style={{fontSize:18}} >{index+1}</Typography>
                      <img src={song.url} alt={song.songName} style={{ width: 60, height: 50 }} />
                      <TextWrapper>
                        <Text variant='p'>{song.songName}</Text>
                        <Box style={{ display: "flex", alignItems: "center", gap: 5,fontSize:14 }}>
                          <LyricsIcon style={{ fontSize:14,marginTop:4 }} />
                          <Typography variant='p'>{song.artist}</Typography>
                        </Box>
                      </TextWrapper>
                      </Box>
                      <Box>
                        <FileDownloadOutlinedIcon style={{padding:"0 5"}}/>
                      </Box>
                    </List>
                  </li>
                ))}
              </ul>
            </Wrap>
          ))}
        </Component>
   
    </ContainerWrapper> 
    </>
  )
}

export default PlayList
