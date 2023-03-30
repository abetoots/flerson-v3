import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "./Header";

describe("Header", () => {
  it("finds a logo with an alt text", () => {
    render(<Header />);
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  });
});
