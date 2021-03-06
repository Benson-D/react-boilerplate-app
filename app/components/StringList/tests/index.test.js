import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { render } from 'react-testing-library';

import StringList from '../index';
import configureStore from '../../../configureStore';

describe('<StringList />', () => {
  it('should render the loading indicator when its loading', () => {
    const { container } = render(<StringList loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an error if loading failed', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <StringList loading={false} error={{ message: 'Loading failed!' }} />
      </IntlProvider>,
    );
    expect(queryByText(/Something went wrong/)).not.toBeNull();
  });

  it('should render the data if loading was successful', () => {
    const store = configureStore({}, browserHistory);
    const testData = { strings: ['test1', 'test2'] };

    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StringList strings={testData} error={false} />
        </IntlProvider>
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render anything if nothing interesting is provided', () => {
    const { container } = render(
      <StringList strings={false} error={false} loading={false} />,
    );

    expect(container.firstChild).toBeNull();
  });
});
