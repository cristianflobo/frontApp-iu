import React from "react" // Importante cargar React antes que react-test-renderer
import renderer from "react-test-renderer";
import Login from "../src/screens/Login";


it("renders correctly screen Login", () => {
  const loading  = renderer.create(
    <Login />
  ).toJSON();
  expect(loading).toMatchSnapshot();
});
