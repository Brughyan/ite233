import React from 'react';
import { Image, Container,  Row, Col } from 'react-bootstrap';


const Work = () => {
  return (
   <>
    <Container className='hero d-flex flex-column py-5'>
        <h1 className='display-1 fw-bold'>
           My Work
        </h1>
        <p>Here are some of the projects I've worked on:</p>
        <hr />
        <Container className='d-flex flex-column gap-5'>
         <Row>
            <Col>
              <Image src="/concom.png" className=" w-100 h-100 object-coverrounded" style={{minWidth:300}}/>
            </Col>
            <Col className='d-flex flex-column justify-content-center'>
              <h4 className='display-3 fw-bold'>Concom</h4>
              <p>Social Media Platform where you can share your day and chat with friends</p>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col>
              <Image src="/photostudio.jpg" className=" w-100 h-100 object-cover rounded" style={{minWidth:300}}/>
            </Col>
            <Col className='d-flex flex-column justify-content-center'>
              <h4 className='display-3 fw-bold'>Photo Studio</h4>
              <p>A Photography Web Page that showcase their gallery to everyone.</p>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col>
              <Image src="/cinema.jpg" className=" w-100 h-100 object-cover rounded" style={{minWidth:300}}/>
            </Col>
            <Col className='d-flex flex-column justify-content-center'>
              <h4 className='display-3 fw-bold'>Cinemaworld</h4>
              <p>Movie Streaming Platform that allows you to watch your favorite movie.</p>
            </Col>
          </Row>
        </Container>
    
    </Container>
   </>
  );
};

export default Work;
