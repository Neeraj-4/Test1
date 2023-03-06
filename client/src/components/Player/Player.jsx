import { Box, styled, Typography } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
const MobileComponent = styled(Box)`
position: fixed;
top: auto;
bottom: 60px;
z-index:2;
width: 100%;
height: 65px;
background:rgb(73, 162, 221);
overflow: hidden;
`
const Wrap = styled(Box)`
display: flex;
align-items: center;
margin-top: 10px;
padding: 0 20px;

&>img{
    object-fit: contain;
    height: 40px;
}
`
const WrapperMob = styled(Box)`
width: 30%;
min-width: 120px;
display: flex;
flex-direction: column;
margin-left: 10px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`
const PlayWrapperMob = styled(Box)`
 width: 50%;
display: flex;
flex-direction: column;
align-items: center;
margin-left: 10px;   
`
const ActionButtonMob = styled(Box)`
display: flex;
gap:20px;

`
const RangeMob = styled(Box)`
display: flex;
align-items: center;
gap:5px;
width: 97%;
height: 20px;
margin-top: -2px;
padding:0 5px;
&>div{
    font-size: 10px;
}
&>input{
    width: 100%;
  height: 3px;
  border-radius: 5px;
  background: #ddd;
  transition: 1s;
}
`
const Component = styled(Box)`
position: fixed;
top: auto;
bottom: 0;
z-index:2;
width: 100%;
height: 70px;
background:rgb(73, 162, 221);
display: flex;
align-items: center;
padding: 0 20px;
    overflow: hidden;
&>img{
    object-fit: contain;
    height: 50px;
}
`
const Wrapper = styled(Box)`
width: 15%;
display: flex;
gap: 5px;
flex-direction: column;
margin-left: 20px;
overflow: hidden;
white-space: nowrap;
min-width: 120px;
text-overflow: ellipsis;
`
const PlayWrapper = styled(Box)`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: 20px;
`
const Range = styled(Box)`
 width: 100%;
    height: 20px;
    display: flex;
    gap:5px;
    align-items: center;
    &>div{
        font-size: 14px;
    }
    &>input{

  cursor: pointer;
  width: 100%; 
  height: 3px;
  border-radius: 5px;
  background: #ddd;
  transition: 1s;
    }
    &>input:hover{
    height: 7px;
    opacity: 1;
} 
`

const ActionButton = styled(Box)`
display: flex;
gap: 20px;
align-items: center;

`
const Player = ({ isMobile, selectedSong, currentIndex, setCurrentIndex, songList }) => {
    const audioRef = useRef(null);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentSong, setCurrentSong] = useState([songList[currentIndex]]);

    useEffect(() => {
        setCurrentSong([songList[currentIndex]]);
        if (audioRef.current.pause) {
            handlePlay();
        }
    }, [currentIndex, songList]);

    useEffect(() => {
        audioRef.current.addEventListener("ended", handleNext);
        audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
       
    });
   
    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleSeekChange = (e) => {
        audioRef.current.currentTime = (e.target.value * duration) / 100;
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    const progress = (isNaN(currentTime) || isNaN(duration) || duration === 0)
        ? 0
        : (currentTime / duration) * 100;

    const handlePlay = () => {
        setIsPlaying(true);
        audioRef.current.play();
    }

    const handlePause = () => {
        setIsPlaying(false);
        audioRef.current.pause();
    }

    const handleNext = () => {
        if (currentIndex === songList.length - 1) {
            setCurrentIndex(0);            
        } else {
            setCurrentIndex(currentIndex + 1);
        }
        setCurrentSong([songList[currentIndex]]);
        
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setCurrentSong([songList[currentIndex - 1]]);
        } else {
            setCurrentIndex(songList.length - 1);
            setCurrentSong([songList[songList.length - 1]]);
        }
    }



    return (
        <>
            {isMobile ? (
                <Box>
                    {currentSong.map((item) => (
                        <MobileComponent key={item.id}>
                            <Wrap>
                                <img src={item.url} alt={item.songName} />
                                <WrapperMob>
                                    <Typography variant='p'>{item.songName}</Typography>
                                    <Typography variant='p'fontSize="10">{item.artist}</Typography>
                                </WrapperMob>
                                <PlayWrapperMob>
                                    <ActionButtonMob>
                                        <SkipPreviousIcon style={{ fontSize: 35 }} onClick={handlePrevious} />
                                        <Box>
                                            {isPlaying ? <PauseIcon style={{ fontSize: 35 }} onClick={handlePause} /> : <PlayCircleIcon style={{ fontSize: 35 }} onClick={() => handlePlay(item)} />}
                                        </Box>
                                        <SkipNextIcon style={{ fontSize: 35 }} onClick={handleNext} />

                                    </ActionButtonMob>
                                </PlayWrapperMob>
                            </Wrap>
                            <RangeMob>
                                <Box>{formatTime(currentTime)}</Box>
                                <input type="range"
                                    min={0}
                                    max={100}
                                    value={progress}
                                    onChange={handleSeekChange}

                                />
                                <Box>{formatTime(duration)}</Box>
                            </RangeMob>
                            <audio ref={audioRef} src={item.file} autoPlay={isPlaying}
                                onLoadedData={() => setDuration(audioRef.current.duration)}
                                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                            />
                        </MobileComponent>
                    ))}

                </Box>)
                :
                (<Box>
                    {currentSong.map((item) => (
                        <Component key={item.id}>
                            <img src={item.url} alt={item.songName} />
                            <Wrapper>
                                <Typography variant='p'style={{fontSize:16}}>{item.songName}</Typography>
                                <Typography variant='p'style={{fontSize:12}}>{item.artist}</Typography>
                            </Wrapper>
                            <PlayWrapper>
                                <ActionButton>
                                    <SkipPreviousIcon style={{ fontSize: 35 }} onClick={handlePrevious} />
                                    {isPlaying ? <PauseIcon style={{ fontSize: 35 }} onClick={handlePause} /> : <PlayCircleIcon style={{ fontSize: 35 }} onClick={() => handlePlay(item)} />}
                                    <SkipNextIcon style={{ fontSize: 35 }} onClick={handleNext} />
                                </ActionButton>
                                <Range>
                                    <Box>{formatTime(currentTime)}</Box>
                                    <input type="range"
                                        min={0}
                                        max={100}
                                        value={progress}
                                        onChange={handleSeekChange}
                                    />
                                    <Box>{formatTime(duration)}</Box>
                                </Range>
                            </PlayWrapper>
                            <audio ref={audioRef} src={item.file} autoPlay={isPlaying}
                                onLoadedData={() => setDuration(audioRef.current.duration)}
                                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}

                            />
                        </Component>
                    ))}
                </Box>
                )}
        </>
    )
}
export default Player
