import { render, screen } from '@testing-library/react';
import App from './App';


describe("snapshot testing", () => {

  test("snapshot for app component", () => {

    const renderedComponent = render.create(<App />).toJSON(
      expect(renderedComponent).toMatchSnapShot()
    )
  })
})