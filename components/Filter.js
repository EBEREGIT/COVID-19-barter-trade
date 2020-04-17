import { Form, Col, InputGroup, Container, Modal, Nav } from "react-bootstrap/";
import { Fragment, useState } from "react";

export default function Filter() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      {/* anchor tag */}
      <Nav.Link eventKey={3} href="#memes" onClick={handleShow}>
      <i className="fa fa-filter" aria-hidden="true"></i>{" "}
              <span>Filter</span>
      </Nav.Link>

      {/* modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Filter Posts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form id="filter-post">
      <Container>
        <Form.Row>
          {/* search */}
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search"
                aria-describedby="inputGroupPrepend"
                required
              />

              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Form.Group>

          {/* Filter */}
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <InputGroup>
              <Form.Control as="select">
              <option>Filter by Location</option>
                <option>All</option>
                <option>Enugu</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Abuja</option>
                <option>Niger</option>
              </Form.Control>

              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">
                  <i className="fa fa-filter" aria-hidden="true"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Form.Group>
        </Form.Row>
      </Container>
    </Form>

        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
