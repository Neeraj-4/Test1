import { Box, styled } from '@mui/material'
import Artists from '../Artists/Artists'
import Slider from '../../Campo/Slider/Slider'
import SadSong from '../../Campo/SadSong/SadSong'
import OldSongs from '../../Campo/OldSongs/OldSongs'
import PartySong from '../../Campo/PartySong/PartySong'
import RomanticSong from '../../Campo/RomanticSong/RomanticSong'
const Component = styled(Box)`
    height: auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    &>div::-webkit-scrollbar{
    overflow: hidden;
    width: 0;
    }
`
const Home = ({AllArtist,products,party_song,handleData,isMobile,AllAlbums}) => {
    

    return (
        <Component>
            <Artists AllArtist={AllArtist}/>
            <Slider  products={products} isMobile={isMobile} />
            <PartySong party_song={party_song} title="Party Songs" handleData={handleData}/>
            <OldSongs party_song={party_song} title="Old Songs" handleData={handleData}/>
            <RomanticSong products={products} title="Romantic Songs"  handleData={handleData}/>
            <SadSong AllAlbums={AllAlbums} title="Sad Songs" handleData={handleData} isMobile={isMobile}/>
        </Component>
    )
}

export default Home
