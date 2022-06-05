import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Slider.css'


const Slider = () => {
    return (
        <div>
          <Carousel className='Slider'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id="img1"
      src="https://scontent.feoh2-1.fna.fbcdn.net/v/t39.30808-6/267577276_2152220471620132_8670090286000690954_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=oQN_lJiPI_8AX902k6X&tn=Mw9qiYVs63tGvm1Y&_nc_ht=scontent.feoh2-1.fna&oh=00_AT-AiI_Qu2wqCk7zSWRdun1JX4MzuE4bCBgB5HiaCh6ceQ&oe=61FF6775"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id="img1"
      src="https://scontent.feoh2-1.fna.fbcdn.net/v/t39.30808-6/267696039_2152220484953464_4331213624455691357_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=zVYG_JM9FLgAX9t6v-e&_nc_ht=scontent.feoh2-1.fna&oh=00_AT_j7G3MdUyYuBAZUlFzejhsHyAUsYxgYpCN5wJm7N0JUw&oe=620002C3"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id="img1"
      src="https://scontent.feoh2-1.fna.fbcdn.net/v/t39.30808-6/267524995_2152220444953468_797075483931024130_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=VUdkaUiJD9YAX_x6s2n&tn=Mw9qiYVs63tGvm1Y&_nc_ht=scontent.feoh2-1.fna&oh=00_AT-KjMMUdwh666TYQmKMDMz7J9MXr3b_qHmNy0CvNyl_Ig&oe=61FF86BF"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>  
        </div>
    )
}

export default Slider
