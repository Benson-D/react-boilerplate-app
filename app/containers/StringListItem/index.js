/**
 * StringListItem
 *
 * Lists the values of each string in array
 */

import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';

import Wrapper from './Wrapper';

export default function StringListItem(props) {
  const { item } = props;

  // Put together the content of the repository
  const content = <Wrapper> {item} </Wrapper>;

  // Render the content into a list item
  return <ListItem key={item} item={content} />;
}

StringListItem.propTypes = {
  item: PropTypes.string,
};
