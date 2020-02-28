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
          Welcome! Blackout Poetry (short for Newspaper Blackout Poetry) is a tool to create poetry
from real newspaper articles. Traditionally, when creating a poem, it is written out completely from scratch with a pen and paper. Austin Kleon, a modern poet and blogger writes his poetry by choosing words that stand out to him from newspapers. Blackout Poetry is a digitized tool for his method. It allows you to make poetry the way Austin Kleon does with Newspapers. To learn more visit <span><a href="https://austinkleon.com/category/newspaper-blackout-poems/">his blog.</a></span> To watch a video of the method, click the button below.
        </Typography>
        <Button
          className={styles['learnmore-button']}
          variant="contained"
          size="medium"
          fullWidth
          onClick={handleOpen}
        >
          WATCH VIEDO
        </Button>
      </Grid>
    </Hidden>
  </Grid>
);
Header.propTypes = {
  handleOpen: PropTypes.func,
};

export default Header;
