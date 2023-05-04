import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Focus from "./Focus";

describe("Focus", () => {
  it("focuses its child even when keyboardOnly since it should only handle visual focus", async () => {
    const user = userEvent.setup();
    render(
      <Focus keyBoardOnly>
        <button>focus me</button>
      </Focus>
    );
    const button = screen.getByRole("button", { name: /focus me/i });
    await user.click(button);
    expect(button).toHaveFocus();
  });
});
