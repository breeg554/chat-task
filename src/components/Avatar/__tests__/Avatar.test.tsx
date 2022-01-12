import { render } from "@testing-library/react";
import { dummyUsers } from "../../../context/dummyData";
import { Avatar } from "..";
describe("Avatar component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(<Avatar url={dummyUsers.current.avatar} size="sm" />);

    expect(container).toMatchSnapshot();
  });
});
