import { render, screen } from "@testing-library/react";
import Footer from "../src/components/Footer";
import { assert } from "chai";

describe("Footer component", () => {
  it("renders the Donate Here text", () => {
    render(<Footer />);
    const el = screen.getByText(/donate here/i);
    assert.isNotNull(el); // ✅ using Chai assert
  });

  it("renders the GitHub link", () => {
    render(<Footer />);
    const el = screen.getByText(/Link to Github:/i);
    assert.include(el.textContent, "GitHub");
  });

  it("renders the React + Vite message", () => {
    render(<Footer />);
    const el = screen.getByText(/built using react \+ vite/i);
    assert.match(el.textContent, /react/i);
  });
});
