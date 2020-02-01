import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Header.module.css';

const isMobile = window.innerWidth <= 768;

const Header = ({ handleOpen }) => (
  <Grid container className={styles['header-container']}>
    <Grid item xs={12} sm={8} md={8} lg={8}>
      <Typography variant="h1">
        <span className={styles.first}>BLACKOUT</span>
      </Typography>
      <Typography variant="h1">
        <span>POETRY</span>
      </Typography>
    </Grid>
    <Grid item xs={12} sm={4} md={4} lg={4} className={styles['side-info']}>
      <Typography variant="subtitle1">

        <span><strong className={styles['']}>Inspiration:</strong></span>
        <span><p>Austin Kleon </p></span>
      </Typography>
      <Typography variant="subtitle1">
        <span><strong>Powered By:</strong></span>
        <span><p>NewsAPI and LexperAPI </p></span>

      </Typography>
      {!isMobile ? (
        <Button
          className={styles['learnmore-button']}
          variant="contained"
          size="medium"
          fullWidth
          onClick={handleOpen}>
          <p>LEARN MORE</p>
        </Button>
      ) : null}
    </Grid>
  </Grid>
);
Header.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default Header;
