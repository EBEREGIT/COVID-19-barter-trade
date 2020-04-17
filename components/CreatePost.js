import {
  Nav,
  Form,
  Button,
  Col,
  InputGroup,
  Modal
} from "react-bootstrap/";
import { Fragment } from "react";

function NewPost(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form id="create-post">
      <Form.Row>
        {/* phone number */}
        <Form.Group as={Col} md="4" controlId="validationCustom01">
        <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><i class="fa fa-phone" aria-hidden="true"></i></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>

        {/* Name */}
        <Form.Group as={Col} md="4" controlId="validationCustom02">
        <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><i class="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="name"
              placeholder="Name"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>

        {/* Location */}
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><i class="fa fa-location-arrow" aria-hidden="true"></i></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Where are you"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        {/* What do you want? */}
        <Form.Group as={Col} md="6" controlId="validationCustom03">
        <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><i class="fa fa-hand-pointer-o" aria-hidden="true"></i></InputGroup.Text>
            </InputGroup.Prepend>
          <Form.Control
            type="text"
            placeholder="What are you looking for?"
            required
          />
          </InputGroup>
        </Form.Group>

        {/* What are you willing to give? */}
        <Form.Group as={Col} md="6" controlId="validationCustom03">
        <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><i class="fa fa-handshake-o" aria-hidden="true"></i></InputGroup.Text>
            </InputGroup.Prepend>
          <Form.Control
            type="text"
            placeholder="What are you willing to give?"
            required
          />
          </InputGroup>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        {/* Attachment */}
        <Form.Group as={Col} xs="6" controlId="validationCustom03">
          <Button type="submit" block>
          <i class="fa fa-picture-o" aria-hidden="true"></i>
            <span>Photo</span>
          </Button>
        </Form.Group>

        {/* Submit */}
        <Form.Group as={Col} xs="6" controlId="validationCustom03">
          <Button type="submit" block>
          <i class="fa fa-plus" aria-hidden="true"></i>
            <span>Submit form</span>
          </Button>
        </Form.Group>
      </Form.Row>
    </Form>

      </Modal.Body>
    </Modal>
  );
}


export default function CreatePost() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Fragment>
      <Nav.Link href="#deets" onClick={() => setModalShow(true)}>
        <i className="fa fa-plus" aria-hidden="true"></i> <span>Create Post</span>
      </Nav.Link>

      <NewPost
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Fragment>
  );
}
