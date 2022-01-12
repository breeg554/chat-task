import { render } from "@testing-library/react";
import { Text } from "..";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../lib/styled";

describe("Text component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Text>Heading</Text>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
