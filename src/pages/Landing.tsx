import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { SiGnuprivacyguard } from "react-icons/si";

import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard-styles.scss';
import Panel from "../components/Panel";
import Cards from "../components/Cards";

const Landing = () => {
    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Sabre Tasks</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="/second">Second</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col><h1>Sabre Task Manager</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit">
                            <SiGnuprivacyguard /> Sign-up
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Panel>
                            <Cards />
                        </Panel>
                    </Col>
                </Row>
            </Container>
            <div className="App-footer">
                This is footer
            </div>
        </div>
    )
}

export default Landing;