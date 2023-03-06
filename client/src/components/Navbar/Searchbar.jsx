import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box,styled } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'
import ClearIcon from '@mui/icons-material/Clear';
/* const SearchWrapper = styled(Box)`
  width: 100%;
    min-width: 290px;
    height: 37px;
    background:transparent;
    display: flex;
    margin: auto;
   overflow: hidden;
   margin-top: 5px;
   margin-left: 15px;
`
const SearchHolder = styled(Box)`

`
const Field = styled(InputBase)`
width: 100%;
max-width: 100%;
font-family: unset;
border-bottom: 1px solid black;
color:black;
font-weight: 600;
transition: ease-in-out 2s;
::placeholder{
  font-size: large;
  font-weight: bold;
}
`
const SearchIconwapper = styled(Box)`
position: relative;
right: 30px;
color:black;
cursor: pointer;
` */
const Form = styled('form')({
  width: "70%",
  display: "flex",
  position: "fixed",
  top: 55,
  left: "13%",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,

})

const SearchWrappers = styled(Box)`
  width: 90%;
min-width: 400px;
  height: 5vh;
  display: flex;
  align-items: center;
  background: white;
  overflow: hidden;
  border: 2px solid rgb(73, 162, 221);
border-radius: 5px;
  &>input{
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    caret-color:aqua;
    padding: 0 10px;
    font-size: 16px;
   overflow: hidden;
  }
`
const Clear = styled(ClearIcon)`
color: black;
padding: 0 5px;
font-size: 16px;
`
const Searchbar = () => {

  const [isSearch, setIsSearch] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [msg, setMsg] = useState('search your favourite');
  const navigate = useNavigate();

  /* const handleOpen = () => {
    setIsShow(true);
    console.log("clicked");
  } */
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/Search?query=${isSearch}`);
    setIsSearch('');
    setIsShow(false);
  };
 /*  const handleClick = (event) => {

    if (isSearch.length > 0) {
      event.preventDefault();
      navigate(`/Search?query=${isSearch}`);
      setIsSearch('');
      setIsShow(false);
    }
    else {
      setMsg('serch is empty');
    }
  } */
  return (
    <>
      <Box>
        <Box>
          <SearchOutlined onClick={() => setIsShow(!isShow)} style={{ color: "black", fontSize: 28 }} />
        </Box>
        {isShow && (
          <Form onSubmit={handleSubmit}>
            <SearchWrappers>
              <input placeholder={msg} type="text"
                value={isSearch} onChange={e => setIsSearch(e.target.value)} required
              />
              <Clear onClick={()=>setIsSearch('')}/>
            </SearchWrappers>
          </Form>
        )}
      </Box>


     
    </>
  )
}
export default Searchbar
