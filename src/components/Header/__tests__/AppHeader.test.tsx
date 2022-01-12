import { render } from "@testing-library/react";
import { AppHeader } from "..";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../lib/styled";
import UsersProvider from "../../../context/users";
describe("App header component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <UsersProvider>
          <AppHeader />
        </UsersProvider>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
