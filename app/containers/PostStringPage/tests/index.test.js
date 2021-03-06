import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { PostString, mapDispatchToProps } from '../index';
import { changeString } from '../actions';
import configureStore from '../../../configureStore';

describe('<PostStringPage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const string = '';
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <PostString
            loading={false}
            error={false}
            string={string}
            onChangeString={() => {}}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should not call onSubmitForm if string is empty', () => {
    const submitSpy = jest.fn();
    const string = '';
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <PostString
            onChangeString={() => {}}
            onSubmitForm={submitSpy}
            string={string}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeString', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeString).toBeDefined();
      });

      it('should dispatch changeString when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const fixture = 'test';
        result.onChangeString({ target: { value: fixture } });
        expect(dispatch).toHaveBeenCalledWith(changeString(fixture));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });
    });
  });
});
