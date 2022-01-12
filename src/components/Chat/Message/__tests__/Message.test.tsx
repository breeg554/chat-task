import { render } from "@testing-library/react";
import { dummyMessages } from "../../../../context/dummyData";
import { Message } from "..";
import MessagesProvider from "../../../../context/messages";
import UsersProvider from "../../../../context/users";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../lib/styled";
describe("Message component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <UsersProvider>
          <MessagesProvider>
            <Message data={dummyMessages[0]} isOwner />
          </MessagesProvider>
        </UsersProvider>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
