import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Landing } from "./Landing";

describe("Landing", () => {
  it("renders Landing", () => {
    render(<Landing />);

    screen.debug();

    // check if App components renders headline
  });
});
