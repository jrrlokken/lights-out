import React from "react";
import { render } from "@testing-library/react";
import Cell from "./Cell";

// smoke test
it("renders without crashing", function() {
  render(<Cell />);
});

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<Cell />);
  expect(asFragment()).toMatchSnapshot();
});