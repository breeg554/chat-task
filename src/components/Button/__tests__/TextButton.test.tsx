import { render } from "@testing-library/react";
import { TextButton } from "..";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../lib/styled";
describe("Text button component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <TextButton size="sm">Button</TextButton>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
