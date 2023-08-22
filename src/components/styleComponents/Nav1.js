import { styled } from "styled-components";


const Nav1 = styled.nav
`
height:10vh;
font-size: 18px;
background-color: #3498db;
border: 1px solid rgba(0,0,0,0.2);
padding-bottom: 10px;
@media (min-width: 768px) {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
  align-items: center;
}
`

export default Nav1