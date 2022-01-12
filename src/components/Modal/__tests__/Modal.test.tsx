import { render } from "@testing-library/react";
import { Modal } from "..";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../lib/styled";
import UsersProvider from "../../../context/users";
describe("Modal component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <UsersProvider>
          <Modal onClose={() => null} />
        </UsersProvider>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
