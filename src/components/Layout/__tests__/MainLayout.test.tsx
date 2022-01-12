import { render } from "@testing-library/react";
import { MainLayout } from "..";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../lib/styled";
import UsersProvider from "../../../context/users";
describe("Main layout component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <UsersProvider>
          <MainLayout>Button</MainLayout>
        </UsersProvider>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
