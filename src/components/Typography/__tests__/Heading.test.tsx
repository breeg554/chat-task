import { render } from "@testing-library/react";
import { Heading } from "..";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../lib/styled";

describe("Heading component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Heading>Heading</Heading>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
