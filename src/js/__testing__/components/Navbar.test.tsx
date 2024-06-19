import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { Navbar } from "@components/Navbar";

describe(Navbar.name, () => {
  test("has title", async () => {
    const title = "Quiz Applet";

    const navbar = render(<Navbar />);

    const link = await navbar.findByRole("link");
    expect(link).toHaveTextContent(title);
  });
});
