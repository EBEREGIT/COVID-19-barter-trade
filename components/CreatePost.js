import { Form, Button, Col, InputGroup } from "react-bootstrap/";

export default function CreatePost() {
  return (
    <Form id="create-post">
      <Form.Row>
          <legend>Create Post</legend>
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
  );
}
