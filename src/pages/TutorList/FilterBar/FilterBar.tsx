import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import TutorCards from '../index'
export const FilterBar = ()=>{
    return (
        <div>
           <>
  <Navbar  className="FilterBar">
    <Navbar.Brand >Filter By</Navbar.Brand>
    <Nav >
      <Nav.Link></Nav.Link>
      <Nav.Link >Name</Nav.Link>
      <Nav.Link>Rate</Nav.Link>
      <Nav.Link >Price</Nav.Link>
    </Nav>
  </Navbar>
</> 
        </div>
    )
}