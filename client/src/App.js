import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Box, styled } from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import Category from './components/Pages/Category/Category'
import Player from './components/Player/Player'
import Artist from './components/Pages/Artist/Artist'
import NotFound from './components/Pages/NotFound/NotFound'
import Searchdata from './components/Pages/Search/Searchdata '
import { useDispatch, useSelector } from 'react-redux'
import { getSearch } from './redux/action/ProductActions'
import { getArtists } from './redux/action/ProductActions'
import { getAlbums } from './redux/action/ProductActions'
import { getProducts, getProducts1 } from './redux/action/ProductActions'
import { useEffect, useState } from 'react'
import Footer from './Footer/Footer'
import { Album } from './components/FooterCompo/Album/Albums'
import UpdatedSongs from './components/Campo/UpdatedSongs/UpdatedSongs'
import PlayList from './components/FooterCompo/AlbumPlayList/PlayList'
import Login from './components/Pages/Login/Login'
const Wrapper = styled(Box)`
overflow: hidden;
padding: 50px 0;
`
const App = ({ theme}) => {
  const [windowDemansion, setWindowDemansion] = useState(null);
  const [playerVisible, setPlayerVisible] = useState(false);
  const [selectedSong, setSelectedSong] = useState();
  const[currentIndex,setCurrentIndex]=useState(0); 
  const[songList,setSongList]=useState();
//if anything happen in player then just add '[]'this  in songList useState//
  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  const { search } = useSelector(state => state.getSearch);
  const { AllArtist } = useSelector(state => state.getArtists);
  const { AllAlbums } = useSelector(state => state.getAlbums);
  const { products } = useSelector(state => state.getProducts);
  const { party_song } = useSelector(state => state.getProducts1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearch())
    dispatch(getArtists())
    dispatch(getAlbums())
    dispatch(getProducts())
    dispatch(getProducts1())
  }, [dispatch]);

  useEffect(() => {
    setWindowDemansion(window.innerWidth);
  }, []);
  useEffect(() => {
    function handleResize() {
      setWindowDemansion(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, []);
  const isMobile = windowDemansion <= 550;
  const handleData = (newSong,index,newSongList) => {
    setSongList(newSongList);
    setCurrentIndex(index);
    setPlayerVisible(true);
   setSelectedSong(newSong);
   };
  return (
    <Box className={`${theme}`}>
      <Navbar isMobile={isMobile} />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home products ={products} party_song={party_song} isMobile={isMobile} AllAlbums={AllAlbums}  AllArtist={AllArtist}  handleData={handleData}/>} />
          <Route path='/latest songs/:id' element={<UpdatedSongs  title="Latest Songs" products={products} handleData={handleData} />} />
          <Route path="/Category" element={<Category isMobile={isMobile} />} />
          <Route path='/Search' element={<Searchdata search={search} AllArtist={AllArtist} products={products}handleData={handleData} />} />
          <Route path='/artist/:id' element={<Artist AllArtist={AllArtist} isMobile={isMobile} colors={colors} handleData={handleData} />} />
          <Route path='/album/:id' element={<Album AllAlbums={AllAlbums}  />} />
          <Route path='/playlist/:id' element={<PlayList AllAlbums={AllAlbums} handleData={handleData}/>} />
          <Route path="/Login" element={<Login isMobile={isMobile} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
      {playerVisible ?<Player isMobile={isMobile} selectedSong={selectedSong} currentIndex={currentIndex}setCurrentIndex={setCurrentIndex}
      songList={songList} setSongList={setSongList}
      /> : null}
      <Footer isMobile={isMobile} AllArtist={AllArtist} AllAlbums={AllAlbums} />
    </Box>

  )
}

export default App
