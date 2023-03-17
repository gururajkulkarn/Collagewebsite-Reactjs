import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="Images/g2.jpg"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="Images/g3.jpg"
          alt="Second slide"
        />
     
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="Images/g4.jpg"
          alt="Third slide"
        />
     
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;