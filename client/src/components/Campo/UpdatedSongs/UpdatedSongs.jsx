import { Box, Typography, styled } from '@mui/material'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
const Component = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    width: 100%;
    height: 45%;
    &>div::-webkit-scrollbar{
        overflow: hidden;
        width: 0;
    }
   `
const Heading = styled(Typography)`
margin-left: 20px;
font-weight: 600;
letter-spacing:.1cm;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
margin-bottom: 10px;
`
const Wrap = styled(Box)`
width: 100%;
overflow-y: hidden;
display: flex;
flex-wrap:wrap;
gap: 20px;
justify-content:flex-start;
align-items: center;
padding: 10px;

`
const Container = styled(Box)`
    padding: 5px 10px;
    text-align: center;
    margin-bottom: 5px;
    //box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
   cursor: pointer;
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
align-items: center;
justify-content: space-between;
text-align: start;
`
const Wrapper = styled(Box)`
padding: 10px;
display: flex;
gap: 5px;
`
const TextWrap = styled(Box)`
width: 30%;
min-width: 120px;
display: flex;
flex-direction: column;
gap: 10px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`

const UpdatedSongs = ({ products,title,handleData}) => {
 
    return (
        <>
        <Component>
            <Heading variant='h5'>{title}</Heading>
            <Wrap>
                {
                    products.map((song,index) => {
                        return (
                            <Container key={song.id} >
                                <Box  onClick={()=>handleData(song,index,products)}>                               
                               <img src={song.url} alt={song.songName} style={{ maxWidth: 160, height: 160,objectFit:'contain' }} />
                                <Items>
                                    <TextWrap>
                                        <Text variant='p'style={{fontSize:14}}>{song.songName}</Text>
                                        <Text variant='p' style={{ fontSize: 8 }}>{song.artist}</Text>
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
        </>
    )
}
export default UpdatedSongs
