import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList"

//smoke test
it("renders without crashing", function () {
    render(<TodoList />);
});

//snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});