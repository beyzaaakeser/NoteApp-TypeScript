import React from 'react';
import Form from '../components/form/Form';
import { Container } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import { Note } from '../types';

const Edit = () => {
  const note :Note = useOutletContext()
  return (
    <Container className="py-5">
      <h2>Edit Note</h2>
      <Form />
    </Container>
  );
};

export default Edit;
