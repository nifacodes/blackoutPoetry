import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './Header.module.css';

const isMobile = window.innerWidth <= 768;

const Header = ({ handleOpen }) => (
  <Grid container className={styles['header-container']}>
    <Grid item xs={12} sm={8} md={8} lg={8}>
      <Typography variant="h1" className={styles['main-font']}>
        BLACKOUT
      </Typography>
      <Typography variant="h1" className={styles['main-font']}>
        POETRY
      </Typography>
    </Grid>
    <Grid item xs={12} sm={4} md={4} lg={4} className={styles['side-info']}>
      <Typography variant="subtitle1">
        <span><p>
          Welcome! Traditional poetry is written completely from scratch. Austin Kleon, a modern poet and blogger writes his poetry by choosing words that stand out to him from newspapers. Blackout Poetry is a digitized tool for his method. It allows you to make poetry the way Austin Kleon does with Newspapers. To learn more visit <span><a href="https://austinkleon.com/category/newspaper-blackout-poems/">his blog.</a></span> To watch a video of the method, click the button below.</p></span>
      </Typography>
      {!isMobile ? (
        <Button
          className={styles['learnmore-button']}
          variant="contained"
          size="medium"
          fullWidth
          onClick={handleOpen}>
          WATCH VIEDO
        </Button>
      ) : null}
    </Grid>
  </Grid>
);
Header.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default Header;


