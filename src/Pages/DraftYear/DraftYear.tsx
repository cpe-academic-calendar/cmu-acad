import * as React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { SlDoc, SlArrowDown } from "react-icons/sl";
import {
  ArrowDown,
  CalendarIcon,
  CalendarIconName,
  DraftComponent,
  FileComponent,
  NavBarContainer,
  NavBarDraft,
  TypeButton,
} from "./DraftYear.styled";
import Draft from "../../Components/Draft";

class DraftYear extends React.Component {
  render() {
    return (
      <div>
        <NavBarDraft>
          <NavBarContainer>
            <FileComponent>
              <SlDoc style={{ fontSize: 40, color: "#f57f17" }} />
              <ArrowDown>
                <SlArrowDown style={{ fontSize: 15, color: "#f57f17" }} />
              </ArrowDown>
            </FileComponent>
            <CalendarIcon>
              <CalendarTodayOutlinedIcon
                style={{ fontSize: 40, color: "#f57f17" }}
              />
              <CalendarIconName>ปฏิทิน</CalendarIconName>
            </CalendarIcon>
            <TypeButton>
            </TypeButton>
          </NavBarContainer>
        </NavBarDraft>
        <DraftComponent>
          <Draft />
        </DraftComponent>
      </div>
    );
  }
}

export default DraftYear;
