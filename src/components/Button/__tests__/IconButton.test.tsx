import { render } from "@testing-library/react";
import { IconButton } from "..";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../lib/styled";
describe("Icon button component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <IconButton icon={<BsFillTelephoneFill />} circle={true} variant="secondary" />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
