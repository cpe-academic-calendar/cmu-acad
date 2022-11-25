import styled from "styled-components";
import { NavBarSt } from "../../Components/NavBar.styled";

export const InsertFile = styled.div`
  color: #f57f17;
`;

export const DraftComponent = styled.div`
  margin-top: 19px;
  margin-left: 55px;
`;

export const NavBarDraft = styled(NavBarSt)`
  height: 85px;
  display: flex;
  padding: 27px 37px 16px 27px;
`;

export const NavBarContainer = styled.div`
  display: flex;
`;

export const FileComponent = styled(NavBarContainer)`
  margin-left: 50px;
  margin-right: 100px;
`;

export const CalendarIcon = styled(NavBarContainer)``;

export const ArrowDown = styled.button`
  margin-top: 15px;
  font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
/* identical to box height */


/* Primary */

color: #F57F17;
`;

export const CalendarIconName = styled(ArrowDown)``

export const TypeButton = styled.div`
  display: flex;
`

export const NavMonButton = styled.div`
width: 57px;
height: 50px;
background: #F57F17;
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
border-radius: 10px;
text-align: center;
padding: 23px 23px 23px 23px;
`

export const NavYearButton = styled(NavMonButton)`
`