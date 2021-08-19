import './App.css';
import {Navbar,Container,Nav,Form,Button} from 'react-bootstrap'

function App() {
  return (
<>
{/* navbar bootstarp */}
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Social media</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Profil</Nav.Link>
      <Nav.Link href="#features">Friends</Nav.Link>
      <Nav.Link href="#pricing">Events</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  {/* form */}
  <div>
    <Container className="myForm">
      <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Login</h1>
<Container className="myform">
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="labelText">Email | Phone | UserName</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="labelText">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" className="labelText2"/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Log In
  </Button>
</Form>
</Container>
</Container>
  </div>
</>  );
}

export default App;
