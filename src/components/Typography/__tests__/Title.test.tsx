import { render } from "@testing-library/react";
import { Title } from "..";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../lib/styled";

describe("Title component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Title>Title</Title>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
