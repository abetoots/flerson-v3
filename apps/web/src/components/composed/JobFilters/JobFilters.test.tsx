/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import JobFilters from "./JobFilters";

describe("JobFilters", () => {
  it("finds a 'Filter Jobs' submit button", async () => {
    render(<JobFilters isHidden={false} onFilter={() => {}} />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: "Filter Jobs" });
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toBeVisible();
    await user.click(button);
    expect(button).not.toBeDisabled();
  });
});
