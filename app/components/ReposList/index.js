import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import RepoListItem from 'containers/RepoListItem';

function ReposList({ loading, error, strings }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (strings !== false) {
    if (strings.strings.length === 0) {
      const EmptyComponent = () => <ListItem item="The list is empty" />;
      return <List component={EmptyComponent} />;
    }
    return <List items={strings.strings} component={RepoListItem} />;
  }

  return null;
}

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  strings: PropTypes.any,
};

export default ReposList;
