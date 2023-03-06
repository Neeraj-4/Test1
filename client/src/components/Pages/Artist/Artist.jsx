import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import LyricsIcon from '@mui/icons-material/Lyrics';
import { useState, useEffect } from 'react';
import { shuffle } from 'lodash';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
const ContainerWrapper = styled(Box)`
  width: 100%;
  overflow: hidden;
`
const Component = styled(Box)`
  width: 100%;
  overflow: hidden;
`
const Main = styled(Box)`
width: 100%;
overflow: hidden;
display: flex;
gap: 10px;
`
const ArtistWrapper = styled(Box)`
width: 20%;
border-right: 1px solid gray;
position: fixed;
z-index: 1;
`
const Components = styled(Box)`
width: 80%;
overflow: hidden;
margin-left: auto;
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
  margin-top: 10px;
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
const PlayList = styled(Box)`
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
const ResponsiveBannerTab = styled(Box)`
width: 100%;
min-height: 270px;
position: relative;
`
const Wrapper = styled(Box)`
position: absolute;
top: 70px;
bottom: auto;
display: flex;
align-items: center;
gap:40px;
&>img{
  height:230px;
  margin-left: 50px;
  border-radius: 20px;
  object-fit: contain;
}
`
const ResponsiveArtistWrapper = styled(Box)`
position: relative;
display: flex;
align-items: flex-start;
flex-direction: column;
gap: 15px;
`
const Heading = styled(Typography)`
margin-left: 10px;
letter-spacing:.1cm;
font-weight: 600;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
const ResponsiveArtisNametWrapper = styled(Box)`
font-size: 30px;
letter-spacing:.3ch;
padding: 3px 0;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const Count = styled(Typography)`
letter-spacing: .3ch;
font-size: 22px;
`
const TCell = styled(TableCell)`
font-weight:600;
color: gray;
`
const ImageWrapper = styled(Box)`
display: flex;
justify-content: start;
align-items: center;
color: gray;
gap:10px;
`
const Artist = ({ AllArtist, isMobile, colors,handleData}) => {
  const [color, setColor] = useState(null);
 const [isTime,setIsTime]=useState(0);
 const [total,setTotal]=useState(null);
 const navigate = useNavigate();
  useEffect(() => {
    setColor(shuffle(colors).pop());
  },[])
  const { id } = useParams();
  const filterdata = AllArtist.filter(artist => artist.id === id);
 
  useEffect(() => {
    if (filterdata.length > 0) {
      setTotal(filterdata[0].playlist.length);
    }
  }, [filterdata]);
  const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

  return (
    <ContainerWrapper>
      {isMobile ?
        <Component>
          {filterdata.map(artist => (
            <Wrap key={artist.id}>
              <Banner>
                <ButtonBack onClick={()=>navigate(-1)}/>
                <img src={artist.url} alt={artist.url} />
              </Banner>
              <Box>
                <BannerWrapper>
                  <ArtistName variant="h5">{artist.id}</ArtistName>
                  <PlayAll onClick={()=>handleData(filterdata)}/>
                </BannerWrapper>
              </Box>
              <ul>
                <Typography variant="h6"fontWeight="bold">Songs({total})</Typography>
                {artist.playlist.map((song,index) => (
                  <li key={song.id}>
                    <PlayList>
                      <Box style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:10}} onClick={()=>handleData(song,index,artist.playlist)}>
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
                    </PlayList>
                  </li>
                ))}
              </ul>
            </Wrap>
          ))}
        </Component>
        :          
        <Component>
          {filterdata.map(artist => (
            <Wrap key={artist.id}>
              <ResponsiveBannerTab style={{ background: `${color}` }}></ResponsiveBannerTab>
              <Wrapper>
                <img src={artist.url} alt={artist.url} />
                <ResponsiveArtistWrapper>
                  <ResponsiveArtisNametWrapper variant="p">{artist.id}</ResponsiveArtisNametWrapper>
                  <Count variant="p">Songs({total})</Count>
                  <PlayAll />
                </ResponsiveArtistWrapper>
              </Wrapper>
              <TableContainer component={Paper} style={{background:"inherit"}}>
                <Table sx={{ minWidth: 480 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TCell align='center'></TCell>
                      <TCell>Track</TCell>
                      <TCell align='center'>Artist</TCell>
                      <TCell align='center'>Album</TCell>
                      <TCell align='center'>Duration</TCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {artist.playlist.map((song, index) => (
                      <TableRow key={song.id} align='center'md={{ '&:last-child td, &:last-child th': { border: 0 } }} onClick={()=>handleData(song,index,artist.playlist)}>
                        <TableCell component="th" scope="row" align='center'style={{color:"gray"}}>{index + 1}</TableCell>
                        <TableCell>
                          <ImageWrapper>
                          <img src={song.url} alt={song.songName} style={{ width: 50 }} />
                          <Typography variant='p'>{song.songName}</Typography>
                          </ImageWrapper>
                        </TableCell>
                        <TableCell align='center'style={{color:"gray"}}><Typography variant='p'>{song.artist}</Typography></TableCell>
                        <TableCell align='center'style={{color:"gray"}}><Typography variant='p'>Album</Typography></TableCell>
                        <TableCell align='center'style={{color:"gray"}}><Typography>{formatTime(isTime)}</Typography></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Wrap>
          ))}
        </Component>
      }
    </ContainerWrapper>
  )
}

export default Artist

