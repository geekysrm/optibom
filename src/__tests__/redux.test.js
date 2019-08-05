// Soumya Ranjan Mohanty

import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import reducer from "../reducers/"; //change
import Build from "../components/Build/Build"; // change

afterEach(cleanup);

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}

test("can render with redux with defaults", () => {
  const { getByTestId, getByText } = renderWithRedux(<Build />);
  fireEvent.click(getByText("Submit"));
  expect(getByTestId("count-value").textContent).toBe("1");
});
