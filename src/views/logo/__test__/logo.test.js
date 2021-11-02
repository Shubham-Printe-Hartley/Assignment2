import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../logo';
import logoImg from '../../../assets/logo2.png'

import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

// run this after each test
afterEach(cleanup);

// checks if logo gets rendered without crashing
it("renders logo without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Logo></Logo>, div);
});

// checks if logo has the required properties
it("renders logo correctly", () => {
  const {getByTestId} = render(<Logo img={logoImg}></Logo>);
  expect(getByTestId('logo')).toHaveAttribute('alt', 'logo');
  expect(getByTestId('logo')).toHaveAttribute('src', 'logo2.png');
});

// snapshot testings - takes a snapshot of the component and records it in the first run
// compares this snapshot in the subsequent tests
it("matches snapshot 1", () => {
  const logoTree = renderer.create(<Logo img={logoImg} ></Logo>).toJSON();
  expect(logoTree).toMatchSnapshot();
});







