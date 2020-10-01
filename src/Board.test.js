import React from "react";
import { render } from "@testing-library/react";
import Board from "./Board";

// smoke test
it("renders without crashing", function() {
  render(<Board />);
});

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<Board />);
  expect(asFragment()).toMatchSnapshot();
});