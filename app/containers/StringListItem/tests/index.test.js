/**
 * Test the repo list item
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import StringListItem from '../index';

const renderComponent = (props = {}) =>
  render(
    <IntlProvider locale="en">
      <StringListItem {...props} />
    </IntlProvider>,
  );

describe('<StringListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = 'DMI-test';
  });

  it('should render data', () => {
    const { container } = renderComponent({ item });
    expect(container.firstChild).toMatchSnapshot();
  });
});
