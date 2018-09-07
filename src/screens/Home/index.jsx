import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import Button from './../../components/Button';

import styles from './styles.scss';

function Home({ goToLink }) {
  return (
    <section className={styles.home}>
      <p className={styles.title}>Home Page :)</p>

      <Button onClick={goToLink}>Go to repository React</Button>
    </section>
  );
}

Home.propTypes = {
  goToLink: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  goToLink: () => dispatch(push('/facebook/react/')),
});

export default connect(null, mapDispatchToProps)(Home);
