import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export const FilterBar = ()=>{
    return (
        <div>
           <>
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link>Filter By</Nav.Link>
      <Nav.Link href="#FiltebyRate">Rate</Nav.Link>
      <Nav.Link href="#FiltebyPrice">Price</Nav.Link>
    </Nav>
  </Navbar>
</> 
        </div>
    )
}