import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from './../../components/Button';

import styles from './styles.scss';

class Home extends Component {
  static propTypes = {
    goToGame: PropTypes.func.isRequired,
  };

  componentDidUpdate() {}

  render() {
    const { goToGame } = this.props;

    return (
      <section className={classnames(styles.home, 'page')}>
        <p>Home Page :)</p>

        <Button onClick={goToGame}>Go to Game</Button>
      </section>
    );
  }
}

export default Home;
