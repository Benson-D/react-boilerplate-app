/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { FormattedNumber } from 'react-intl';

// import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
// import IssueIcon from './IssueIcon';
import Wrapper from './Wrapper';

export default function RepoListItem(props) {
  const { item } = props;

  // If the repository is owned by a different person than we got the data for
  // it's a fork and we should show the name of the owner
  // if (item.owner.login !== props.currentUser) {
  //   nameprefix = `${item.owner.login}/`;
  // }

  // Put together the content of the repository
  const content = <Wrapper> {item} </Wrapper>;

  // Render the content into a list item
  return <ListItem key={item} item={content} />;
}

RepoListItem.propTypes = {
  item: PropTypes.string,
};
