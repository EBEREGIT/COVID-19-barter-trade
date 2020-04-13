import { Form, Col, InputGroup, Container } from "react-bootstrap/";

export default function Filter() {
  return (
    <Form id="filter-post">
      <Container>
        <Form.Row>
          {/* search */}
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search"
                aria-describedby="inputGroupPrepend"
                required
              />

              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Form.Group>

          {/* Filter */}
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <InputGroup>
              <Form.Control as="select">
                <option>All</option>
                <option>Enugu</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Abuja</option>
                <option>Niger</option>
              </Form.Control>

              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">
                  <i class="fa fa-filter" aria-hidden="true"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Form.Group>

          {/* switch dark and light mode */}
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Light or Dark mode?"
            />
          </Form.Group>
        </Form.Row>
      </Container>
    </Form>
  );
}
