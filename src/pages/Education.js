import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';


const Education = () => {
  return (
    <>
      <Container className='hero d-flex flex-column py-5 text-center'>
        <h2 className='display-1 fw-bold text-center'>My Education</h2>
        <p className='text-center'>These are my academic qualifications:</p>
        <hr/>
        <Container>
        <ListGroup>
          <ListGroup.Item className='bg-primary text-light mt-4 rounded-pill flex-column d-flex align-items-center'>
            <h1>East Central Integrated School</h1>
            <p>2018-2019</p>
          </ListGroup.Item>
          <ListGroup.Item className='bg-primary text-light mt-4 rounded-pill flex-column d-flex align-items-center'>
            <h1>East Central Integrated School  </h1>
            <p>2019-2021</p>
          </ListGroup.Item>
          <ListGroup.Item className='bg-primary text-light mt-4 rounded-pill flex-column d-flex align-items-center'>
            <h1>PHINMA University of Pangasinan</h1>
            <p>2021 - current</p>
          </ListGroup.Item>
         
        </ListGroup>
        </Container>
      </Container>
    </>
  );
};

export default Education;
