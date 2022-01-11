import React from "react";
import { useUsers } from "../../context/users";
import { StyledCheckbox, StyledLabel, StyledSwitchWrapper } from "./style";

interface SwitchProps {
  onChange?: (e?: React.ChangeEvent) => void;
}

export const Switch: React.FC<SwitchProps> = ({ onChange }) => {
  return (
    <>
      <StyledSwitchWrapper>
        <StyledCheckbox onChange={onChange} type="checkbox" id="checkbox" />
        <StyledLabel htmlFor="checkbox" />
      </StyledSwitchWrapper>
    </>
  );
};
