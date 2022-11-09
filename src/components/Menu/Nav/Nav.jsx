import "./Nav.scss";

import Nav from "react-bootstrap/Nav";

function MainNav({ handleTaskList }) {
  return (
    <Nav className="tasknav" justify variant="tabs" defaultActiveKey="/link-1">
      <Nav.Item onClick={() => handleTaskList("All")}>
        <Nav.Link className="choice" eventKey="/link-1">
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={() => handleTaskList("Active")}>
        <Nav.Link className="choice" eventKey="link-2">
          Active
        </Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={() => handleTaskList("Completed")}>
        <Nav.Link className="choice" eventKey="link-3">
          Completed
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MainNav;
