import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

import Button from './../../components/Button';

import styles from './styles.scss';

function User({ match: { params: { user } }, goToBack }) {
  return (
    <div className="pagehead">
      <div className="container repohead-container">
        <h1 className={styles.title}>{user}</h1>

        <Button onClick={goToBack}>Go Back</Button>
      </div>
    </div>
  );
}

User.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  goToBack: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  goToBack: () => dispatch(goBack()),
});

export default connect(null, mapDispatchToProps)(User);
