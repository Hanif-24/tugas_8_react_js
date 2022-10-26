import {Container, Col, Row, Dropdown, Figure, Breadcrumb, Carousel, ListGroup, Form, Image, Button, Modal} from 'react-bootstrap';
import React, { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <Container fluid>
      <Row style={{backgroundColor:'black', marginTop:'5px'}}>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Pilih Bahasa
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Indonesia</Dropdown.Item>
              <Dropdown.Item href="#/action-2">English</Dropdown.Item>
              <Dropdown.Item href="#/action-3">日本語</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
  
        <Col md='2'>
          <Figure>
            <Figure.Image
              width={50}
              height={50}
              alt="Profile"
              src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
            />
            <Figure.Caption style={{color: 'white'}}>
              Alan Saputra
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
      
      <Row>
        <Col></Col>
        <Col md="4" >
          <Breadcrumb style={{backgroundColor: '#e9ecef', padding: '5px'}}>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
            <Breadcrumb.Item active>Bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
{
  // ========================================================================
}
      <Row style={{marginTop: "20px"}}>
       <Col md='3'></Col>
       <Col >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Inggris Mau Jadi Team Terbaik Dunia</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Inggris Mau Jadi Team Terbaik Dunia</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Inggris Mau Jadi Team Terbaik Dunia</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Col>
       <Col md='3'></Col>
      </Row>
{
  // ========================================================================
}
      <Row style={{marginTop: '10px'}}>
        <Col>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>   Liga 1 Indonesia    </ListGroup.Item>
            <ListGroup.Item as="li">          Liga Primer Inggris </ListGroup.Item>
            <ListGroup.Item as="li" disabled> Divisi Primera      </ListGroup.Item>
            <ListGroup.Item as="li">          Series A            </ListGroup.Item>
            <ListGroup.Item as="li">          Ligue 1             </ListGroup.Item>
            <ListGroup.Item as="li">          Bundes Liga         </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col className='p-5 m-3' style={{padding: "2rem 1rem", marginBottom: "2rem", backgroundColor: '#e9ecef'}}>
          <h1>DIVISI PRIMERA</h1>
          <p>Main Untuk Catalunya.</p>
          <Button variant='primary'>Read More</Button>
        </Col>

        <Col>
          <Form>
            <center>
            <Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" roundedCircle width={60} height={60} />
            <h4>Silahkan Login</h4>
            </center>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Masukan email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Term & Condition" />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleShow}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>

    </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Anda Berhasil Login</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Username & Password
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
