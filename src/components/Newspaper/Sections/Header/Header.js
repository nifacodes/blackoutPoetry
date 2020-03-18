import React from 'react';
import { Grid, Typography, Button, Hidden, ThemeProvider } from '@material-ui/core';
import PropTypes from 'prop-types';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import styles from './Header.module.css';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const Header = ({ handleOpen }) => (
  <Grid container alignContent="center" justify="center" className={styles['header-container']}>
    <Grid item xs={12} sm={7} className={styles['header-title']}>
      <Grid container alignContent="center" justify="center" className={styles['header-title-container']}>
        <Grid item>
          <ThemeProvider theme={theme}>
            <Typography variant="h2" className={styles['main-font']}>
              BLACKOUT
            </Typography>

            <Typography variant="h2" className={styles['main-font']}>
              POETRY
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Grid>
    <Hidden xsDown>
      <Grid item sm={5} className={styles['side-info']}>
        <Typography variant="body2" className={styles['sec-font']}>
          Welcome to Blackout Poetry: an online tool to create poetry
from real newspaper articles. Inspired by Austin Kleon, a modern poet, Blackout Poetry allows you to create poetry the way he does with Newspapers. To learn more visit <span><a href="https://austinkleon.com/category/newspaper-blackout-poems/">his blog.</a></span> To watch a video of the method, click the button below.
        </Typography>
        <Button
          className={styles['learnmore-button']}
          variant="contained"
          size="medium"
          fullWidth
          onClick={handleOpen}
        >
          WATCH VIDEO
        </Button>
      </Grid>
    </Hidden>
  </Grid>
);
Header.propTypes = {
  handleOpen: PropTypes.func,
};

export default Header;
