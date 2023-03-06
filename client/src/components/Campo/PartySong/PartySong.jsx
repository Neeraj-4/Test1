import { Box, Typography, styled } from '@mui/material'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Component = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
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
margin-bottom: 10px;
box-shadow: 15px 0px 10px -15px rgb(0 0 0 / 20%);

`
const Wrap = styled(Box)`
overflow-x: auto;
overflow-y: hidden;
display: flex;
flex-wrap: nowrap;
gap: 10px;
justify-content: flex-start;
align-items: center;
padding: 10px;

`
const Container = styled(Box)`
    padding: 5px 10px;
    text-align: start;
    margin-bottom: 5px;
    cursor: pointer;
   // box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 25%), 0px 4px 5px 0px rgb(0 0 0 / 20%), 0px 1px 10px 0px rgb(0 0 0 / 16%);
`
const Text = styled(Typography)`
font-size: 12px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: 600;
white-space: wrap;
font-size: 14px;
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
/* margin-top: 5px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
gap: 5px; */
max-width: 120px;
display: flex;
flex-direction: column;
gap: 3px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`
const PartySong = ({ party_song, title,handleData}) => {
    return (

        <Component>
            <Heading variant='h5'>{title}</Heading>
            <Wrap>
                {
                    party_song.map((song,index) => {

                        return (
                            <Container key={song.id} onClick={()=>handleData(song,index,party_song)}>
                                <Box>
                                <img src={song.url} alt="connot load" style={{ maxWidth: 160,height:160,objectFit:'contain' }} />
                                <Items>
                                    <TextWrap>
                                        <Text variant='p'>{song.songName}</Text>
                                         <Text variant='p' style={{ fontSize: 10 }}>{song.artist}</Text> 
                                    </TextWrap>
                                    <Wrapper>
                                        <FileDownloadOutlinedIcon style={{ fontSize: 24 }} />
                                    </Wrapper>
                                </Items>
                                </Box>
                            </Container>
                        )
                    })
                }
            </Wrap>

        </Component>
    )
}

export default PartySong
