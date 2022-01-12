import { render } from "@testing-library/react";
import { Switch } from "..";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../lib/styled";
import UsersProvider from "../../../context/users";
describe("Switch component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <UsersProvider>
          <Switch />
        </UsersProvider>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
