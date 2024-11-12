import ReactSelect from 'react-select/creatable';
import { Button, Col, Form, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormEvent, useRef, useState } from 'react';
import { v4 } from 'uuid';

const CustomForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const title = titleRef.current?.value;
    const markdown = textRef.current?.value;

    console.log(title, markdown);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="my-4">
        <Col>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control ref={titleRef} />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group>
            <Form.Label>Tags</Form.Label>
            <ReactSelect
              className="text-black"
              isMulti
              onCreateOption={(text: string) => {
                const newTag = { label: text, value: v4() };
                console.log(newTag)
              }}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group>
        <Form.Label>Content (supports markdown)</Form.Label>
        <Form.Control
          ref={textRef}
          as="textarea"
          style={{ minHeight: '300px', maxHeight: '450px' }}
        />
      </Form.Group>

      <Stack
        direction="horizontal"
        className="justify-content-end mt-5"
        gap={4}
      >
        <Link to={'..'}>
          <Button variant="secondary">Cancel</Button>
        </Link>

        <Button type="submit" variant="primary">
          Save
        </Button>
      </Stack>
    </Form>
  );
};

export default CustomForm;
