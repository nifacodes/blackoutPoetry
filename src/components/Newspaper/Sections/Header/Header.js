import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Header.module.css';

const isMobile = window.innerWidth <= 768;

const Header = ({ handleOpen }) => (
  <Grid container>
    <Grid item xs={12} sm={8} md={8} lg={8} className={['header-title']}>
      <Typography variant="h3" className={styles['title-font']}>
        <span className={classNames(styles['title-main'], styles.first)}>BLACKOUT</span>
      </Typography>
      <Typography variant="h3" className={styles['title-font']}>
        <span className={['title-main']}>POETRY</span>
      </Typography>
    </Grid>
    <Grid item xs={12} sm={4} md={4} lg={4} className={['side-info']}>
      <Typography variant="subtitle1">
        <strong className={['title-main']}>Inspiration:</strong>
        <span><p className={['main-font']}>Austin Kleon </p></span>
      </Typography>
      <Typography variant="subtitle1">
        <strong className={['title-main']}>Powered By:</strong>
        <span><p className={['main-font']}>NewsAPI and LexperAPI</p></span>
      </Typography>
      {!isMobile ? (<Button
        className={styles['learnmore-button']}
        variant="contained"
        size="small"
        fullWidth
        onClick={handleOpen}
      >
        LEARN MORE
        </Button>
      ) : null}
    </Grid>
  </Grid >
);
Header.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default Header;
