import { dummyUsers } from "../../context/dummyData";
import { sortMessages } from "../messages";

test("Sort messages", () => {
  expect(
    sortMessages([
      { id: 1, createdAt: 100, text: "aaa", author: dummyUsers.current },
      { id: 0, createdAt: 111, text: "str", author: dummyUsers.current },
    ])
  ).toEqual([
    { id: 0, createdAt: 111, text: "str", author: dummyUsers.current },
    { id: 1, createdAt: 100, text: "aaa", author: dummyUsers.current },
  ]);
});
