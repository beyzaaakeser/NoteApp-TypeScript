import React from 'react';
import Form from '../components/form/Form';
import { Container } from 'react-bootstrap';

const Create = () => {
  return (
    <Container className='py-5'>
      <h2>Create Note</h2>
      <Form />
    </Container>
  );
};

export default Create;
