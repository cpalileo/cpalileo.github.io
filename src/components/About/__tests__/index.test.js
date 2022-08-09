import React from "react"; // always need to import React
import { render, cleanup } from "@testing-library/react"; // retrieves two functions from the testing library.  the render function that has Jest create a simulated DOM in a Node.js environment. The cleanup function removes components from the DOM to prevent memory leaks.
import "@testing-library/jest-dom/extend-expect"; // offers access to custom matchers that are used to test DOM elements
import About from ".."; // imports the actual About component we created

afterEach(cleanup); // calls the cleanup function after each test

describe("About component [this is the string in the describe() argument]", () => {
  // first test will serve as baseline to be sure that component is rendering
  it("renders [this is the string in the it() argument]", () => {
    // the it() takes 2 arguments first the string which is used to declare what is tested.  The second argument is the function, in this case the actual render function we imported.
    render(<About />);
  });

  // this second test will compare the rendered baseline to the snapshot (found in the created snapshots folder)
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<About />); // 
    expect(asFragment()).toMatchSnapshot();
  });
});
