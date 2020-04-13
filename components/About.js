import { Modal, Nav } from "react-bootstrap";
import { Fragment, useState } from "react";

export default function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      {/* anchor tag */}
      <Nav.Link eventKey={3} href="#memes" onClick={handleShow}>
        <i class="fa fa-info-circle" aria-hidden="true"></i> <span>About</span>
      </Nav.Link>

      {/* modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <a href="https://github.com/EBEREGIT/COVID-19-barter-trade">
            COVID-19 Barter Trade
          </a>{" "}
          is an innovation brought about due to the fact that Food and other
          essentials are quite expensive during the COVID-19 pandemic.
        </Modal.Body>
        <Modal.Body>
          I thought it is going to be easier and cheaper if people could
          exchange what they have for other things that they do not have. This
          application is provided to connect people for such transactions.
        </Modal.Body>
        <Modal.Body>
          You may also love to checkout the{" "}
          <a href="https://covid19-stat.netlify.com/">COVID-19 TRACKER</a> I
          created a while ago.
        </Modal.Body>
        <Modal.Body>
          Created By{" "}
          <a href="https://www.njokusamsonebere.com/">Njoku Samson Ebere</a>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
