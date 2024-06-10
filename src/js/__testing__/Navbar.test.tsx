import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import { Navbar } from "../Navbar";

describe("Navbar", () => {
  test("has title", async () => {
    const title = "Quiz Applet";

    const navbar = render(<Navbar />);

    const link = await navbar.findByRole("link");
    expect(link).toHaveTextContent(title);
  });
});
