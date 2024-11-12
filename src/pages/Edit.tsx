import React from 'react';
import Form from '../components/form/Form';
import { Container } from 'react-bootstrap';

const Edit = () => {
  return (
    <Container className="py-5">
      <h2>Edit Note</h2>
      <Form />
    </Container>
  );
};

export default Edit;
