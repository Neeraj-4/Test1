import React from 'react'
import { Dialog, Box, TextField, styled, Typography, Button } from '@mui/material'
import { useState } from 'react'
import { Authantication } from '../../../Service/api'
import Anime from './anime.gif'
const Container = styled(Box)`
    max-width: 45vw;
    height: 60vh;
    display: flex;
    overflow: hidden;
    color:#fff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

`
const ContainerBox = styled(Box)`
    max-width: 60vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color:#fff;
    align-items: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

`
const Sidewrapper = styled(Box)`
background: black;
background-repeat: no-repeat;
padding: 30px 20px;
color :white;
width: 40%;
&>img{
width:200px;
height: 200px;
-webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
}
`
const UpWrapper = styled(Box)`
    width: 100%;
    height: 40px;
    color: black;
   &>h5{
    margin-top: 20px;
    font-weight: bold;
    letter-spacing:.4ch;
    text-align: center;
   }
`
const Wrap = styled(Box)`
    width: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    &>div,&>p{
        margin-top: 20px;
    }
    &>button{
        margin: auto;
        margin-top: 40px;
    }
`
const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    width: 60%;
    &>div,&>p,&>button{
        margin-top: 20px;
    }
`
const WrapField = styled(TextField)`
 width: 100%;
`
const Field = styled(TextField)`
    word-spacing:.2ch;
    &>label{
        font-size: 14px;
        font-weight: 600;
        opacity:.8;
    }
`
const Text = styled(Typography)`
 font-size: 14px;
 color:gray;
 
`
const WishBtn = styled(Button)`
background:#fb641b;
color:inherit;
`
const WishButton = styled(Button)`
background:#fb641b;
padding:10px;
color:#fff;
`
const Caption = styled(Typography)`
font-weight:200;
 font-size:18px;
 margin-top: 30px;
`
const WishValues = {
    fullname: '',
    song: '',
}
const Wish = ({ open, setOpen, isMobile }) => {
    const [wish, setWish] = useState(WishValues);
    const handleClose = () => {
        setOpen(false);
    }

    const onValueChange = (e) => {
        setWish({ ...wish, [e.target.name]: e.target.value });
    }
    const wishData = async () => {
        let response = await Authantication(wish);
        if (!response) return;
        handleClose();
    }
    return (
        <>
            {isMobile ?
                <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: "set" } }}>
                    <ContainerBox>
                        <UpWrapper>
                            <Typography variant="h5">Wish</Typography>
                        </UpWrapper>
                        <Wrap>
                            <WrapField label="Enter your Name" variant="standard" onChange={(e) => onValueChange(e)} name="fullname" />
                            <WrapField label="Enter Songs Name" variant="standard" onChange={(e) => onValueChange(e)} name="song" />
                            <Text>By continue, we will upload that songs</Text>
                            <WishBtn variant="contained" onClick={() => wishData()}>continue</WishBtn><br></br>
                        </Wrap>
                    </ContainerBox>
                </Dialog>
                :
                <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: "unset" } }}>
                    <Container>
                        <Sidewrapper>
                            <Typography variant="h5" style={{ fontWeight: 600 }}>Wish</Typography>
                            <Caption variant="h6">just sent us a request to upload song you want it</Caption>
                            <img src={Anime} alt="" />
                        </Sidewrapper>
                        <Wrapper>
                            <Field label="Enter your Name" variant="standard" onChange={(e) => onValueChange(e)} name="fullname" />
                            <Field label="Enter Songs Name" variant="standard" onChange={(e) => onValueChange(e)} name="song" />
                            <Text>By continue, we will upload that songs</Text>
                            <WishButton variant="contained" onClick={() => wishData()}>continue</WishButton><br></br>
                        </Wrapper>
                    </Container>
                </Dialog>

            }

        </>
    )
}

export default Wish
