import { Box, Typography, styled } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../components/Navbar/logo.png'
import Connect from '../components/FooterCompo/Connect'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const Component = styled(Box)`
background-color:inherit;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
gap: 20px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`
const Wrap = styled(Box)`
margin-top: 50px;
display: flex;
justify-content: center;
align-items: center;
`
const Subheading = styled(Typography)`
color:inherit;
font-size: 20px;    
display: flex;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const SocialWrap = styled(Box)`
display: flex;
gap: 20px;
flex-wrap: wrap;
text-align: center;
justify-content: center;
align-items: center;
margin-top: 40px;
`

const Social = styled(Link)`
display: flex;
text-decoration: none;
color: gray;
gap:5px;
text-align: center;
`


const TextWrapper = styled(Box)`
text-align: center;
display: flex;
gap:20px;
justify-content: center;
align-items: center;
margin-top: 30px;

`
const Terms = styled(Box)`
text-decoration: none;
color:gray;
`
const Footer = ({isMobile,AllArtist,AllAlbums }) => {
  
  return (
    <Component>
      <Wrapper>
      <Wrap>
        <Link to='/' style={{ display: "flex", gap: 5, textDecoration: "none", color: "inherit" }}>
          <img src={Logo} alt="" style={{ width: 30, marginTop: -3, borderRadius: 50, color: "white", background: "white", border: "none" }} />
          <Subheading variant='h5'>Muc<span style={{ fontWeight: 900 }}>ZI</span></Subheading>
        </Link>
      </Wrap>
        <Connect isMobile={isMobile} AllArtist={AllArtist} AllAlbums={AllAlbums} />      
      <SocialWrap>
        <Social to=''><TwitterIcon /><p>Twitter</p></Social>
        <Social to=''><FacebookIcon /><p>Facebook</p></Social>
        <Social to=''><InstagramIcon /><p>Instagram</p></Social>
      </SocialWrap>
      <TextWrapper>
        <Terms>Term of use</Terms>
        <Terms>Privacy Policy</Terms>
      </TextWrapper>
      </Wrapper>
    </Component>
  )
}

export default Footer
