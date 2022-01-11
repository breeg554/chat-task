import styled from "styled-components";

const HEIGHT = 26;
const WIDTH = 50;
const CIRCLE_WIDTH = 25;

export const StyledSwitchWrapper = styled.div`
  position: relative;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
`;

export const StyledLabel = styled.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #efefef;
  border-radius: 100px;

  &::after {
    content: "";
    position: absolute;
    left: -1px;
    top: 0;
    width: ${CIRCLE_WIDTH}px;
    height: ${HEIGHT}px;
    background-color: #fff;
    border-radius: 50%;
  }
  &,
  &::after {
    transition: 0.2s ease-in-out;
    box-shadow: 0px 0px 18px #0000000f;
  }
`;
export const StyledCheckbox = styled.input`
  opacity: 0;
  &:checked + ${StyledLabel} {
    background-color: #74dd88;
    &::after {
      left: ${`calc(100% - ${CIRCLE_WIDTH}px + 1px)`};
    }
  }
`;
