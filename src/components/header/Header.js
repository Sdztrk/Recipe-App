import { Link } from 'react-router-dom';
import Nav1 from "../styleComponents/Nav1"
import Navli from "../styleComponents/NavLi "




function Header() {
  return (
    <Nav1>
      <ul style={{display:"flex" ,flexDirection:"row", justifyContent:"space-evenly", width:"100%" }}>
        <Navli>
          <Link style={{textDecoration:"none"}} to="/home">Home</Link>
        </Navli>
        <Navli>
          <Link style={{textDecoration:"none"}} to="/about">About</Link>
        </Navli>
        <Navli>
          <Link style={{textDecoration:"none"}} to="https://github.com/Sdztrk">Git Hub</Link>
        </Navli>
        <Navli>
          <Link style={{textDecoration:"none"}} to="/login">Log Out</Link>
        </Navli>
      </ul>
    </Nav1>
  );
}

export default Header;