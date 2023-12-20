import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/img1.png';
import image2 from '../images/img2.png';
function  Welcomepage() {
  return (
        <div className='container'> 
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        /> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        /> 
      </Carousel.Item>
      
    </Carousel>

        </div>
  );
}

export default Welcomepage;