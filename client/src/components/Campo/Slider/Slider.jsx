import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { styled,Box } from '@mui/material'
import { Link } from 'react-router-dom';
const Wrapper= styled(Link)`
width: 100%;
max-width: 430px;
height: 250px;
display: flex;
padding: 0 5px;
align-items: center;
justify-content: center;
&>img{
  width: 90%;
  height: 280px;
  object-fit: cover;
}
`


const responsive = {
  /* superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  }, */
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Slider = ({products,handleData}) => {
  return (
<Carousel 
responsive={responsive}
swipeable={false}
draggable={false}
infinite={true}
autoPlay={true}
autoPlaySpeed={2000}
keyBoardControl={true}
slidesToSlide={1}
containerClass="carousel-container"
removeArrowOnDeviceType={["tablet","mobile"]}
itemClass="carousel-item-padding-40-px"
>
 
 {
  products.map((song)=>{
    return(
      <Wrapper to={`/latest songs/${song.id}`}  key={song.id} >
      <img src={song.url} alt="Images"/>
      </Wrapper>
    )
  })

 }
 </Carousel>
  )
}
export default Slider
