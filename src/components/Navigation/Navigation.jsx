import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      className="justify-content-center"
      style={{ backgroundColor: "Lavender" }}
    >
      <Nav className="justify-content-evenly w-50">
        <Nav.Item>
          <Nav.Link href="/">My To Do's</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
export default Navigation;
