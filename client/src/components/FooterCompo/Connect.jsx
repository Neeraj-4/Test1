import { useState, useEffect } from 'react'
import { Albums, Genes, NewRelease, OldSong, Artist } from './QuickLinks';
import { Box, styled, Typography } from '@mui/material';
const Component = styled(Box)`
padding: 0 10px;
`
const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column; 
`
const MobText = styled(Box)`
 color: gray;
padding: 10px;
text-align: center; 
`
const LinksWrap = styled(Box)`
  margin-bottom: 10px;
`

const SysItems = styled(Box)`
width:100%;
overflow: hidden;
display: flex;
margin-top: 40px;
justify-content: center;
gap: 10px;
`
const SystemLink = styled(Box)`
 display: flex;
 justify-content: center;
width: 35%;
min-width: 20rem;
flex-wrap: wrap;
gap: 20px;
`
const Text = styled(Box)`
width: 40%;
margin-top: 30px;
&>p{
color: gray;

}
`
const Heading = styled(Typography)`
color: inherit;
font-size: 18px; 
`
const Connect = ({ isMobile,AllArtist ,AllAlbums }) => {

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <Component>
      {isMobile ?
        <Wrapper>
          <LinksWrap>
            <Albums title="Albums" open={open} setOpen={setOpen} isMobile={isMobile} AllAlbums={AllAlbums} />
            <Artist title="Artist" open2={open2} setOpen2={setOpen2} isMobile={isMobile}  AllArtist={AllArtist}/>
          </LinksWrap>
          <MobText>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi soluta ab ipsa, animi vero perspiciatis et nostrum aliquam esse ex architecto? Nesciunt rem reiciendis veniam enim pariatur, quos sint accusamus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quis minus. Quia porro, ipsa amet necessitatibus cupiditate numquam quas sed ullam in odit ut excepturi! Amet, perferendis nam? Tenetur, provident!</p>
          </MobText>
        </Wrapper>
        :
        <SysItems>
          <SystemLink>
            <Albums title="Albums" open={open} setOpen={setOpen} AllAlbums={AllAlbums} />
            <Artist title="Artists" open2={open2} setOpen2={setOpen2}  AllArtist={AllArtist} />
          </SystemLink>
          <Text>
            <Box style={{ marginBottom: 10 }}>
              <Heading variant='p'>About</Heading>
            </Box>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi soluta ab ipsa, animi vero perspiciatis et nostrum aliquam esse ex architecto? Nesciunt rem reiciendis veniam enim pariatur, quos sint accusamus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quis minus. Quia porro, ipsa amet necessitatibus cupiditate numquam quas sed ullam in odit ut excepturi! Amet, perferendis nam? Tenetur, provident!</p>
          </Text>
        </SysItems>
      }
    </Component>

  )
}

export default Connect
