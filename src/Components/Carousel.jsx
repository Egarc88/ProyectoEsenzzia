import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import cover from '../imgs/cover.jpg';
import sony from '../imgs/sonyCover.png';
import microsoft from '../imgs/xboxCover.webp';
import nintendo from '../imgs/nintendoCover.jpg';
const CarouselComponent = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={cover}
          alt="First slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>WowGames</strong></h3>
          <p>"Sumérgete en un mundo de aventuras sin límites con WowGames, donde la emoción nunca termina".</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={sony}
          alt="Second slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>Consolas -Nuevas</strong></h3>
          <p> cada juego es una oportunidad para vivir una experiencia única y emocionante...</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={microsoft}
          alt="Third slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>Microsoft - XBOX</strong></h3>
          <p>
          cada juego es una nueva aventura para descubrir!
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={nintendo}
          alt="First slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>Nintendo</strong></h3>
          <p>Lo top </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default CarouselComponent