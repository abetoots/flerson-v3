import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("finds a an attribution link to icons' author", () => {
    render(<Footer />);
    const links = screen.getAllByTitle(/author/i);
    for (const link of links) {
      expect(link).toHaveAttribute(
        "href",
        expect.stringContaining("flaticon.com/authors")
      );
    }
  });
});
