import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

describe("Search", () => {
  it("should  find an input users can type into", async () => {
    render(
      <Search
        aria-label="MySearch"
        onSearch={() => {
          console.log("searching");
        }}
      />
    );

    const input = screen.getByRole("searchbox", { name: /mysearch/i });
    expect(input).toBeInTheDocument();
    await userEvent.type(input, "1234");
    expect(input).toHaveValue("1234");
  });
});
