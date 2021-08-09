import React from "react";
import "@testing-library/jest-dom";
import { act, render, screen, fireEvent } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Tests for NotFoundPage", () => {
  it("should run onClick when the clicking back button", () => {
    const mockClick = jest.fn();

    render(<NotFoundPage />);

    const returnButton = screen.getByTestId("return-previos-page");
    returnButton.onclick = mockClick;
    fireEvent.click(returnButton);

    expect(mockClick).toHaveBeenCalled();
  });
});
