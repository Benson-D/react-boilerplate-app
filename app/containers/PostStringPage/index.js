/*
 * PostString index section
 *
 * Displays form to post a new string
 */

import React, { memo } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { changeString, submitString } from './actions';
import { makeSelectString, makeSubmitString, makeError } from './selectors';

import Section from './Section';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Button from './Button';
import BtnComponent from '../../components/Button';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import Input from './Input';
import reducer from './reducer';
import saga from './saga';

const key = 'PostString';

export function PostString({
  string,
  submit,
  error,
  onChangeString,
  onSubmitForm,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const disableBtn = string.length === 0;

  return (
    <Section>
      <CenteredSection>
        <Form onSubmit={onSubmitForm}>
          <H2>Add A New String</H2>
          {error && <h4>An error occurred, please try again later</h4>}
          {submit && <H3>Added!</H3>}
          <label>
            Name String:
            <Input
              name="string"
              type="text"
              id="string"
              onChange={onChangeString}
              value={string}
            />
          </label>
          <Button disabled={disableBtn} color="teal" type="submit">
            Add
          </Button>
        </Form>
        <BtnComponent href="/">Back</BtnComponent>
      </CenteredSection>
    </Section>
  );
}

PostString.propTypes = {
  onSubmitForm: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  string: PropTypes.string,
  submit: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChangeString: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  string: makeSelectString(),
  submit: makeSubmitString(),
  error: makeError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeString(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitString(evt.target.string.value));
      dispatch(changeString(''));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PostString);
